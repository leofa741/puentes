'use client';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


interface Post {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const BlogCard = ({ post }: { post: Post }) => {

 


    return (
        <>
            <div >
                <div className="bg-white rounded overflow-hidden shadow-lg">

                    <article
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Image
                            className="w-full h-48 object-cover"
                            src={post.imageUrl}
                            alt={post.title}
                            width={640}
                            height={360}
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                            <p className="text-gray-600 mt-2">{post.description}</p>
                            <a
                                href={post.link}
                                className="text-blue-600 font-medium hover:underline mt-4 inline-block"
                            >
                                Leer más →
                            </a>
                        </div>
                    </article>


                   
                        <div className="border-b">
                            <Link href="/blog/admin-blog" className="px-4 py-2 hover:bg-gray-100 flex" >
                                <span className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-green-600">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">
                                            Crear Articulo
                                        </p>
                                        <p className="text-xs text-gray-500">View your campaigns</p>
                                    </div>
                                </span>
                            </Link>
                        </div>


                  


                </div>
            </div>
        </>
    )
}
