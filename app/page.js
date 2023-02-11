import Footer from "./footer"
import Navbar from "./navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      {/* Header */}
      <section className="w-full  h-screen">
        <div className="flex flex-row container bg-[#253360] rounded-3xl m-8 mx-auto px-24 shadow-2xl">
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-[36px] leading-tight font-semibold text-white">
              Beli Barang kesukaanmu<br></br>
              Sekarang di Catalyst 👜
            </p>
            <p className="text-base mt-4 text-white">
              platform jual beli barang barang keseharian nomor 1 di indonesia. Buruan beli sekarang juga
            </p>

            <div className="inline-flex space-x-6">
              <button
                className="text-black py-2 px-6 outline-white bg-white rounded-full mt-10 font-semibold hover:shadow-lg">Let's
                Buy</button>
              <button
                className="py-2 px-6 border-2 border-white text-white rounded-full mt-10 font-semibold hover:shadow-lg">See
                Product</button>
            </div>
          </div>

          <div className="grid w-1/2">
            <img src="/header.png" className="justify-center place-self-end" width={2000} alt="" />
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}
