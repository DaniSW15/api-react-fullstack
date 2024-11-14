import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function index({ auth, projects }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Projects
                                    {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
                                </h2>
                                {/* <a
                                    href={route('project.create')}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create New Project
                                </a> */}
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500 '>
                                        <tr className='text-nowrap'>
                                            <th className="px-3 py-2">ID</th>
                                            <th className="px-3 py-2">Image</th>
                                            <th className="px-3 py-2">Name</th>
                                            <th className="px-3 py-2">Status</th>
                                            <th className="px-3 py-2">Description</th>
                                            <th className="px-3 py-2">Created Date</th>
                                            <th className="px-3 py-2">Due Date</th>
                                            <th className="px-3 py-2">Created By</th>
                                            <th className="px-3 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr key={project.id}>
                                                <td className="px-3 py-2">{project.id}</td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={project.image_path}
                                                        alt={project.name}
                                                        className="w-10 h-10 object-cover rounded-full"
                                                    />
                                                </td>
                                                <td className="px-3 py-2">{project.name}</td>
                                                <td className="px-3 py-2">{project.status}</td>
                                                <td className="px-3 py-2">{project.description}</td>
                                                <td className="px-3 py-2">{project.created_at}</td>
                                                <td className="px-3 py-2">{project.due_date}</td>
                                                <td className="px-3 py-2">{project.created_by}</td>
                                                <td className="px-3 py-2">
                                                    <a
                                                        href={route('project.show', project.id)}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href={route('project.edit', project.id)}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
