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


                   
                  


                </div>
            </div>
        </>
    )
}
