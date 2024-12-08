'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Swal from 'sweetalert2';

interface User {
  id: string;
  email: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
  profile: {
    name: string;
    avatar: string;
  };
}

const AdminPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);
  const [uloading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirigir si el usuario no tiene permisos
  useEffect(() => {
    if (!loading && (!user || !user.roles?.includes('admin'))) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Cargar usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/users');
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Eliminar usuario
  const deleteUser = async (userId: string) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isDenied) {
      return;
    }
    

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        throw new Error('Error al eliminar el usuario');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
    }
  };

  // Actualizar roles
  const updateRole = async (userId: string, currentRoles: string[]) => {
    // Abrir un SweetAlert para pedir el nuevo rol
    const { value: newRole } = await Swal.fire({
      title: 'Actualizar Rol',
      input: 'text',
      inputLabel: 'Introduce el nuevo rol para este usuario (separado por comas):',
      inputValue: currentRoles.join(', '),
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, introduce al menos un rol';
        }
        return null;
      },
    });
  
    // Si se cancela, no continuar
    if (!newRole) return;
  
    try {
      const response: Response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roles: newRole.split(',').map((role: string) => role.trim()) }),
      });
  
      if (response.ok) {
        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === userId ? { ...user, roles: updatedUser.roles } : user))
        );
  
        // Mostrar un SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Rol actualizado!',
          text: 'El rol del usuario ha sido actualizado exitosamente.',
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        throw new Error('Error al actualizar el rol');
      }
    } catch (err) {
      console.error(err);
  
      // Mostrar un SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar el rol del usuario.',
      });
    }
  };
  // Estados de carga y error
  if (loading || uloading) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Panel de Administración</h1>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Avatar</th>
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Roles</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <img
                  src={user.profile?.avatar || '/assets/img/react.png'}
                  alt={user.profile?.name}
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.profile?.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.roles?.join(', ')}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 mr-2"
                  onClick={() => updateRole(user.id, user.roles)}
                >
                  Actualizar Rol
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => deleteUser(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
