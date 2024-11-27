'use client';

import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function ClientComponent({ post }: { post: Post }) {
  const formattedDescription = post.description.replace(
    /(\d+\.)\s(.*?)(?=\d+\.)/g,
    (match, p1, p2) => {
      return `<p><strong class="text-gray-800">${p1}</strong> ${p2}</p>`;
    }
  );

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 ">
            { post.title }
          </h1>
          <p className="text-lg text-gray-600 mt-2">{post.subtitle}</p>
          <div className="mt-4 border-t-4 border-blue-500 w-16 mx-auto"></div>
        </header>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/3">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={640}
                height={360}
                className="rounded-lg"
              />
            </div>

            <div className="lg:w-2/3">
              <div
                className="text-lg text-gray-700 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: formattedDescription }}
              />
              <div className="text-center lg:text-left">
                <Link
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                  href="/blog"
                >
                  Leer más artículos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
