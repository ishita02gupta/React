import Footer from "./Footer";
import Navbar from "./Navbar";
import details from "../../images/images(6).jpg";
import d1 from "../../images/images(1).jpg";
import d2 from "../../images/images(2).jpg";
import d3 from "../../images/images(3).jpg";
import d4 from "../../images/images(4).jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartUI() {
    const handleAddToCart = () => {
        addToCart(product);
      };
    
      const Images = [
        {
          photo:{url:d1},
        },{
          photo:{url:d2},
        },{
          photo:{url:d3},
        },{
          photo:{url:d4},
        },{
          photo:{url:details}
        }
      ]
     
      const [mainImage, setMainImage] = useState(Images[4]);
  return (
    <>
      <div className="ml-10 mt-5">
      <div className="grid grid-cols-[3fr,1fr] gap-4">
        <div className="lg:-ml-5">
            <div className="bg-gray-300 h-2/3">
                <Navbar />
                <div>
          <div className="flex flex-wrap mx-14 mr-20 lg:grid lg:grid-cols-2 lg:mx-0 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2">
            <div className="mx-5 sm:mx-20 md:mx-36 lg:mx-32 xl:mx-40 2xl:mx-40 mt-5">
              <div className="sm:flex sm:text-sm md:flex md:text-sm">
                Home/ Women
                <div className=" text-gray-400">/ I&apos;m a Product</div>
              </div>
              <div>
              <button className="text-black font-normal px-1 text-xs">
                <span>&lt;</span> Prev
              </button>
              <span className="mx-2"> | </span>
              <button className="text-black font-normal px-1 text-xs">
                Next <span>&gt;</span>
              </button>
            </div>
              <div className="w-auto sm:w-96 md:w-80 lg:w-80 xl:w-80 2xl:w-80 mr-20 mt-5">
                {/* <Link href=""><img src="images/details.jpg" /></Link> */}
                <Link href="/"><Image src={mainImage.photo.url} alt={"Image"} /></Link>
                <div className="flex w-52 sm:w-60 mt-5 gap-1 ">
                  {
                    Images.map((e,i)=>{
                      return(
                        <>
                          <div className="mx-2 hover:border-orange-500 border-2">
                            {/* // eslint-disable-next-line @next/next/no-img-element */}
                            <Image src={e.photo.url} alt={"iMAGE"} key={i} onClick={() =>{setMainImage(e)}}/>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                <div className="w-96 text-justify text-sm mt-5 lg:w-72">
                I&apos;m aproduct description. I&apos;m a great place to add more
                  details to your product such as sizing, material, care,
                  instructions and cleaning instructions.
                </div>
              </div>
            </div>

            <div className="ml-14">
            <div className="mx-5 sm:mx-20 md:mx-36 lg:mx-0 xl:mx-0 2xl:mx-0 lg:ml-14">
              <div className="mt-5 font-semibold text-2xl lg:mt-14">
              I&apos;m a Product
              </div>
              <div className="text-sm">SKU:0001</div>
              <div className="flex">
                <s className="mt-2 text-orange-500">$ 42.00</s>
                <div className="mt-2 ml-2 text-orange-500">$ 39.90</div>
              </div>
              <p className="text-md mt-1">Color</p>
              <div className="flex">
                <button className="w-4 h-4 bg-red-700 rounded-full mt-1"></button>
                <button className="w-4 h-4 bg-pink-400 rounded-full mt-1 ml-1"></button>
              </div>

              <p className="text-md mt-2">Size</p>
              <div className="relative inline-block mt-2 cursor-pointer">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected hidden>
                    Select Size
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 5a2 2 0 011.373-.05l4.427 1.348a1 1 0 01.705.976v5.653a1 1 0 01-.705.977L4.373 15.05A2 2 0 013 14V5zm2-.29a1 1 0 00-.683.192l-2.5 1.9A1 1 0 002 8v6a1 1 0 00.19.558l2.5 3A1 1 0 005 18h10a1 1 0 00.81-1.585l-2.5-3A1 1 0 0013 13V8a1 1 0 00-.183-.558l-2.5-1.9a1 1 0 00-.684-.192H5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-md mt-2">Quantity</p>
              <input
                type="number"
                placeholder="1"
                className="border border-black w-14 mt-1 mb-3"
              />

              <br />
              <div className="flex">
              <Link href="/cart">
                    <button
                      className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
                  rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                  hover:border-orange-500 hover:border-solid"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </Link>
                <button className="ml-2 border-orange-500 border-2 h-10 w-11 text-black mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" w-10 pl-1 pr-1 mt-0.5 text-orange-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-black text-center text-white p-2 mt-4 w-60 hover:bg-white hover:text-black hover:border-black hover:border-2">
                Buy Now
              </button>
              <div className="mt-12 mb-4">PRODUCT INFO</div>
              <div className="text-sm w-80 text-justify">
              I&apos;m aproduct description. I&apos;m a great place to add more to
                your product such as sizing, material, care, instructions and
                cleaning instructions. This is also a great space to write what
                makes this product special and how your customes can benifit
                from this item.
              </div>
              <hr className="mt-3 w-80 mb-3" />
              <div className="flex ">
                <div className="ml-2 ">RETURN & RETURN POLICY</div>
                <div className="ml-24 mb-2 text-xl">+</div>
              </div>
              <hr className="mt-3 w-80 mb-3" />
              <div className="flex">
                <div className="ml-2 mr-2">SHIPPING INFO</div>
                <div className="ml-44 mb-2 text-xl">+</div>
              </div>
              {/* <svg style="color: rgb(0, 240, 4);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mt-2 ml-1" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="#00f004"></path> </svg> */}
            </div>
            </div>
          </div>
        </div>
            </div>
        </div>
        <div>
        {/* Second grid */}
        <div className="bg-black h-14 text-white">
            <center className="font-semibold text-2xl pt-3">Cart</center>
            <div className="flex">
                <div className="w-24 mt-7">
                    <div className="flex">
                    {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
                        <img src="images/img16.webp" className="h-28" />
                        <div className="ml-2">
                            <div className="text-sm text-black">I'm a product</div>
                            <div className="text-gray-700">$31.00</div>
                        </div>
                    </div>
                    <hr className="mt-2 mb-2 bg-black border-gray-500 w-80" />

                    <div className="flex">
                    {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
                        <img src="images/img15.webp" className="h-28" />
                        <div className="ml-2">
                            <div className="text-sm text-black">I'm a product</div>
                            <div className="text-gray-700"><s className="text-gray-400">$42.00</s>$39.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black text-xl mt-14">Subtotal</div>
            <div className="text-black text-xl mt-2">$70.90</div>
            <hr className="mt-2 mb-2 bg-black border-gray-500 w-80" />
            <div className="">
                <button className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
                  rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                  hover:border-orange-500 hover:border-solid ml-20 mt-3">View Cart</button>
            </div>
        </div>
        </div>
        </div>
        <div>
        {/* <RelPro/> */}
        <Footer />
        </div>
      </div>
    </>
  );
};


