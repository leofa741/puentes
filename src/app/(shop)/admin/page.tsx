'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

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

  // Mueve los hooks al inicio
  const [users, setUsers] = useState<User[]>([]);
  const [uloading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && (!user || !user.roles?.includes('admin'))) {
      router.push('/'); // Redirige al home si no es admin
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/users'); // Ruta para obtener los usuarios
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

  const deleteUser = async (userId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este usuario?')) return;

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
      alert('No se pudo eliminar el usuario');
    }
  };

  if (loading || uloading) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

   // Bloquear renderizado mientras se verifica el usuario
   if (loading || (!user && !error)) {
    return <div className="text-center">Verificando permisos...</div>;
  }

  // Mostrar mensaje si el usuario no está autorizado (como precaución extra)
  if (!user || !user.roles?.includes('admin')) {
    return null; // O puedes mostrar un mensaje como un 404 o un texto de "No autorizado".
  }
  const updateRole = async (userId: string, currentRoles: string[]) => {
    const newRole = prompt('Introduce el nuevo rol para este usuario (separado por comas si hay más de uno):', currentRoles.join(', '));
    
    if (!newRole) return;
  
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roles: newRole.split(',').map((role) => role.trim()) }),
      });
  
      if (response.ok) {
        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === userId ? { ...user, roles: updatedUser.roles } : user))
        );
      } else {
        throw new Error('Error al actualizar el rol');
      }
    } catch (err) {
      console.error(err);
      alert('No se pudo actualizar el rol del usuario');
    }
  };
  
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
                  src={user.profile?.avatar || 'assets/img/react.png'}
                  alt={user.profile?.name}
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.profile?.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user?.email}</td>
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
