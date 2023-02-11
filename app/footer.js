import React from 'react'

export default function Footer() {
    return (
        <>
            <section className="border-t bg-zinc-100 mt-16">
                <div className='container mx-auto 0'>
                    <div className="grid grid-cols-4 py-12 ">
                        <div className="flex flex-col">
                            <img src="/logo1.png" width={48} height={48} className='bg-cover bg-center' alt="" />
                            <p className="mt-4 text-sm text-neutral-500">2023 Rizky Ferdian. All right reserved</p>
                        </div>
                        <div className="flex flex-col space-y-4 text-zinc-500">
                            <a href="">About Me</a>
                            <a href="">Testimonial</a>
                            <a href="">Contact</a>
                            <a href="">Reference</a>
                        </div>
                        <div className="flex flex-col space-y-4 text-zinc-500">
                            <a href="">Portofolio</a>
                            <a href="">Email</a>
                            <a href="">Dribble</a>
                            <a href="">Reference</a>
                        </div>
                        <div className="flex flex-col space-y-4 text-zinc-500">
                            <a href="">Get In Touch</a>
                            <a href="" className="mt-6 font-bold text-gray-700">📞+62895339642658</a>
                            <a href="" className="font-bold text-gray-700">📨rizkyferdian002@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
