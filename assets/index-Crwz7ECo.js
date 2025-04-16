(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();let m=` <div class="w-full h-[28px] mt-[64px] flex items-center pl-[16px] 4xl:px-[18%] ">
    <h2 class="text-[24px] text-white font-bold">Recommended</h2>
  </div>`,L=`  <div class="w-full h-[28px] mt-[64px] flex items-center pl-[16px] 4xl:px-[18%]">
      <h2 class="text-[24px] text-white font-bold">Featured</h2>
    </div>`,Z=` <div class="w-full h-[28px] mt-[64px] flex items-center pl-[16px] 4xl:px-[18%]">
    <h2 class="text-[24px] text-white font-bold">Trending Now</h2>
  </div> `,y=`<div class="w-full h-[28px] mt-[64px] flex items-center pl-[16px] 4xl:px-[18%]">
  <h2 class="text-[24px] text-white font-bold">Most Gifted</h2>
</div> `,_=`

  <footer id="footer"
      class="w-[full] ol:h-[336px] md:h-[547px] sm:h-[644px] p-[40px] flex justify-center items-center"
    >
      <div
        class="w-full ol:h-[256px] sm:h-[550px] md:h-auto md:mt-[-90px] ol:mt-0 mx-auto sm:mt-[50px]"
      >
        <div
          class="w-full h-[48px] flex ol:flex-row sm:flex-col-reverse ol:justify-between sm:justify-center sm:gap-[15px] ol-gap-0 sm:items-cente"
        >
          <!-------------------->
          <div
            class="w-auto h-full flex ol:justify-start sm:justify-center items-center sm:gap-[0px] ol:gap-0 sm:flex-wrap md:flex-nowrap"
          >
            <a
              class="ol:w-[88px] sm:w-[80px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >Careers</a
            >
            <a
              class="ol:w-[74px] sm:w-[80px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >About</a
            >
            <a
              class="ol:w-[89px] sm:w-[81px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >Support</a
            >
            <a
              class="ol:w-[110px] sm:w-[102px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >Contact Us</a
            >
            <a
              class="ol:w-[71px] sm:w-[63px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >Press</a
            >
            <a
              class="ol:w-[57px] sm:w-[48px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center rounded-[6px] hover:bg-[#2d2e317d]"
              href="#"
              >API</a
            >
          </div>

          <!-------------------->
          <div
            class="h-[48px] flex ol:justify-end sm:justify-center items-center relative"
          >
            <!-------------------->
             <div
              id="region"
              class="ol:w-[592px] md:w-[454px] sm:w-[370px] h-[60vh] bg-[#10111b] absolute ol:right-0 md:bottom-[70px] rounded-[8px] hidden sm:mx-auto sm:bottom-[170px] md:mx-auto"
            >
              <div
                class="w-full md:h-[173px] sm:h-[173px] ol:h-[125px] bg-[#171926] rounded-tr-[8px] rounded-tl-[8px] p-[20px] flex flex-col justify-center gap-[10px] relative"
              >
                <div
                  id="regclose"
                  class="w-[40px] h-[40px] bg-[#3a3b46] rounded-[5px] ml-[60px] ol:hidden sm:flex justify-center items-center absolute right-[8px] top-[8px]"
                >
                  <svg
                    class="w-[35px] h-[35px] fill-white"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8L8 16M8.00001 8L16 16"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="w-full h-[21px]">
                  <p class="text-[14px] text-[#ffffff80] font-bold">REGION</p>
                </div>
                <div
                  class="w-full h-[40px] flex sm:flex-wrap ol:flex-nowrap md:flex-wrap gap-[5px] mb-[40px] ol:mb-0"
                >
                  <div
                    class="w-[240px] h-full bg-[#ffffff1a] flex justify-center items-center rounded-[8px] hover:bg-[#3a3b46] ol:mr-0 sm:mr-[20px]"
                  >
                    <p class="text-[16px] text-white font-bold cursor-pointer">
                      Americas & Southeast Asia
                    </p>
                  </div>
                  <div
                    class="w-[81px] h-full bg-[#ffffff0d] flex justify-center items-center rounded-[8px] hover:bg-[#3a3b46] cursor-pointer"
                  >
                    <p class="text-[16px] text-white font-bold">Europe</p>
                  </div>
                  <div
                    class="w-[70px] h-full bg-[#ffffff0d] flex justify-center items-center rounded-[8px] hover:bg-[#3a3b46] cursor-pointer"
                  >
                    <p class="text-[16px] text-white font-bold">Korea</p>
                  </div>
                  <div
                    class="w-[79px] h-full bg-[#ffffff0d] flex justify-center items-center rounded-[8px] hover:bg-[#3a3b46] cursor-pointer"
                  >
                    <p class="text-[16px] text-white font-bold">Taiwan</p>
                  </div>
                </div>
              </div>
              <div
                class="sm:w-auto ol:w-full md:w-[454px] ol:h-[320px] md:h-[250px] sm:h-[475px] bg-[#10111b] rounded-br-[8px] rounded-bl-[8px] p-[12px] pt-[25px] flex md:flex-row ol:flex-row sm:flex-col overflow-y-auto"
              >
                <div class="w-[50%] flex flex-col">
                  <div class="flex flex-col gap-[8px]">
                    <div class="w-full h-[21px] ml-[8px]">
                      <p class="text-[14px] text-[#ffffff80] font-bold">
                        LANGUAGE
                      </p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[10px] hover:bg-[#1c1d27] hover:rounded-[8px] gap-[8px] cursor-pointer"
                    >
                      <svg
                        class="w-[24px] h-[24px] fill-[#ffffff80]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-labelledby="blz-icon-title-bn-checkmark-filled"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-bn-checkmark-filled">
                          Checkmark
                        </title>
                        <path
                          d="M19.777 5.636a.5.5 0 0 0-.707 0L8.818 15.888 4.93 12a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l4.216 4.217.025.026.707.707a.5.5 0 0 0 .708 0l.708-.707.021-.023L20.485 7.05a.5.5 0 0 0 0-.707z"
                        ></path>
                      </svg>
                      <p class="text-[16px] text-[#ffffff]">English (US)</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Español (Latino)</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">
                        Português (Brasil)
                      </p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">ภาษาไทย</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">日本語</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Deutsch</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">English (EU)</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Español (EU)</p>
                    </div>
                  </div>
                </div>
                <!------------------------->
                <div class="w-[50%] flex flex-col">
                  <div class="flex flex-col gap-[8px]">
                    <div class="w-full h-[21px] ml-[8px]"></div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] gap-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Français</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Italiano</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Polski</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Русский</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">Türkçe</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">한국어</p>
                    </div>
                    <div
                      class="ol:w-[280px] md:w-[200px] sm:w-[350px] h-[48px] flex items-center pl-[40px] hover:bg-[#1c1d27] hover:rounded-[8px] cursor-pointer"
                    >
                      <p class="text-[16px] text-[#ffffff]">繁體中文</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-------------------->

            <div
              id="lan"
              class="w-[152px] h-[48px] text-white text-[14px] font-bold flex justify-center items-center gap-1 rounded-[6px] hover:bg-[#2d2e317d] cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="#808080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              English (US)
              <svg
                class="fill-gray-500"
                class="meka-menu-drop-down-label__icon fill-[#ffffffb8]"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="[#808080]"
                viewBox="0 0 24 24"
                slot="icon"
              >
                <path
                  d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
                ></path>
              </svg>
            </div>
          </div>

          <!-------------------->
        </div>

        <!-------------------->
        <span
          class="w-full h-[.5px] bg-stone-800 ol:block sm:hidden mt-[8px]"
        ></span>
        <!-------------------->
        <div
          class="w-full ol:h-[81px] sm:auto flex ol:flex-row sm:flex-col items-center mt-[20px] sm:pt-[70px] md:pt-[10px] ol:pt-[0px]"
        >
          <div class="w-[240px] h-[80px] flex justify-center items-center">
            <a href="#">
              <svg
                class="w-[240px] h-[39px] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-battlenet-logo"
                viewBox="0 0 196 32"
                part="icon"
              >
                <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                ></path>
                <path
                  stroke="none"
                  d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                ></path>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                ></path>
                <path
                  stroke="none"
                  d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                ></path>
              </svg>
            </a>
          </div>
          <div
            class="w-full h-full flex sm:flex-col-reverse ol:flex-row sm:justify-center items-center ol:justify-between sm:gap-[30px]"
          >
            <div
              class="ol:w-[500px] sm:w-auto md:w-[400px] bg-red h-[82px] flex flex-col justify-center ol:items-start sm:text-center ol:pl-[40px] sm:pl-0"
            >
              <span class="text-[12px] text-[#9e9fa1] font-[600]"
                >©2025 Blizzard Entertainment, Inc.</span
              >
              <span class="text-[12px] text-[#9e9fa1] font-[600]"
                >All
                <a
                  class="text-[12px] text-[#ffffffb8] underline font-[600] hover:text-[#ffffff]"
                  href="#"
                  >trademarks</a
                >
                referenced herein are the properties of their respective
                owners.</span
              >
              <div
                class="flex ol:gap-[15px] ol:mt-[23px] sm:justify-center ol:justify-start sm:gap-[25px] sm:mt-[30px] sm:flex-wrap sm:flex-row md:flex-nowrap"
              >
                <a
                  class="text-[#9e9fa1] hover:text-white text-[12px] font-bold flex justify-center items-center"
                  href="#"
                  >Privacy</a
                >
                <a
                  class="text-[#9e9fa1] hover:text-white text-[12px] font-bold flex justify-center items-center"
                  href="#"
                  >Legal</a
                >
                <a
                  class="text-[#9e9fa1] hover:text-white text-[12px] font-bold flex justify-center items-center"
                  href="#"
                  >Terms</a
                >
                <a
                  class="text-[#9e9fa1] hover:text-white text-[12px] font-bold flex justify-center items-center"
                  href="#"
                  >Cookie Policy</a
                >
                <a
                  class="text-[#9e9fa1] hover:text-white text-[12px] font-bold flex justify-center items-center"
                  href="#"
                  >Cookie Settings</a
                >
              </div>
            </div>

            <div
              class="flex gap-3 ol:justify-end sm:justify-center ol:mb-[40px] sm:mb-[30px] md:mb-[0px]"
            >
              <div
                class="w-[40px] h-[40px] rounded-full bg-[#ffffff0d] hover:bg-[#303237] flex justify-center items-center cursor-pointer"
              >
                <svg
                  class="w-[24px] h[48px] fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-mathematical-double-struck-capital-x"
                  viewBox="0 0 48 48"
                  part="icon"
                >
                  <title
                    id="blz-icon-title-mathematical-double-struck-capital-x"
                  >
                    𝕏
                  </title>
                  <path
                    stroke="none"
                    d="M27.032 21.551 38.936 8h-2.82l-10.34 11.764L17.521 8H8l12.484 17.791L8 40h2.82l10.914-12.426L30.452 40h9.521M11.838 10.083h4.332L36.114 38.02h-4.333"
                  ></path>
                </svg>
              </div>
              <div
                class="w-[40px] h-[40px] rounded-full bg-[#ffffff0d] hover:bg-[#303237] flex justify-center items-center cursor-pointer"
              >
                <svg
                  class="w-[24px] h[48px] fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-facebook"
                  viewBox="0 0 48 48"
                  part="icon"
                >
                  <title id="blz-icon-title-facebook">Facebook</title>
                  <path
                    stroke="none"
                    d="M42 24.11C42 14.108 33.941 6 24 6S6 14.108 6 24.11C6 33.15 12.582 40.641 21.188 42V29.345h-4.57V24.11h4.57v-3.99c0-4.539 2.687-7.046 6.798-7.046 1.97 0 4.03.354 4.03.354v4.457h-2.27c-2.236 0-2.933 1.396-2.933 2.828v3.397h4.992l-.798 5.235h-4.195V42C35.419 40.641 42 33.15 42 24.11"
                  ></path>
                </svg>
              </div>
              <div
                class="w-[40px] h-[40px] rounded-full bg-[#ffffff0d] hover:bg-[#303237] flex justify-center items-center cursor-pointer"
              >
                <svg
                  class="w-[24px] h[48px] fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-instagram"
                  viewBox="0 0 48 48"
                  part="icon"
                >
                  <title id="blz-icon-title-instagram">Instagram</title>
                  <path
                    stroke="none"
                    d="M24 6c-4.889 0-5.501.02-7.421.108-1.916.088-3.225.392-4.37.837A8.8 8.8 0 0 0 9.021 9.02a8.8 8.8 0 0 0-2.076 3.188c-.445 1.145-.75 2.454-.837 4.37C6.021 18.499 6 19.11 6 24s.02 5.502.108 7.421c.088 1.916.392 3.225.837 4.37a8.8 8.8 0 0 0 2.076 3.188c1 1 2.005 1.616 3.188 2.076 1.145.445 2.454.75 4.37.837 1.92.087 2.532.108 7.421.108s5.502-.02 7.421-.108c1.916-.088 3.225-.392 4.37-.837a8.8 8.8 0 0 0 3.188-2.076c1-1 1.616-2.005 2.076-3.188.445-1.145.75-2.454.837-4.37.087-1.92.108-2.532.108-7.421s-.02-5.501-.108-7.421c-.088-1.916-.392-3.225-.837-4.37a8.8 8.8 0 0 0-2.076-3.188 8.8 8.8 0 0 0-3.188-2.076c-1.145-.445-2.454-.75-4.37-.837C29.501 6.021 28.89 6 24 6m0 3.243c4.806 0 5.375.019 7.273.105 1.756.08 2.709.373 3.343.62.84.326 1.44.717 2.07 1.346s1.02 1.23 1.346 2.07c.247.634.54 1.588.62 3.343.086 1.898.105 2.467.105 7.273s-.019 5.375-.105 7.273c-.08 1.756-.373 2.709-.62 3.343a5.6 5.6 0 0 1-1.346 2.07c-.63.63-1.23 1.02-2.07 1.346-.634.247-1.587.54-3.343.62-1.897.086-2.466.105-7.273.105s-5.376-.019-7.273-.105c-1.755-.08-2.709-.373-3.343-.62a5.6 5.6 0 0 1-2.07-1.346 5.6 5.6 0 0 1-1.346-2.07c-.247-.634-.54-1.587-.62-3.343-.086-1.898-.105-2.467-.105-7.273s.019-5.375.105-7.273c.08-1.755.373-2.709.62-3.343.326-.84.717-1.44 1.346-2.07s1.23-1.02 2.07-1.346c.634-.247 1.588-.54 3.343-.62 1.898-.086 2.467-.105 7.273-.105"
                  ></path>
                  <path
                    stroke="none"
                    d="M24 30a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-15.243a9.243 9.243 0 1 0 0 18.486 9.243 9.243 0 1 0 0-18.486m11.769-.365a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

 
`,H=()=>{let c=document.querySelector("#region"),t=document.querySelector("#lan"),a=document.querySelector("#regclose");t.addEventListener("click",()=>{c.classList.contains("hidden")?(c.classList.remove("hidden"),c.classList.add("block")):c.classList.contains("block")&&(c.classList.remove("block"),c.classList.add("hidden"))}),a.addEventListener("click",()=>{c.classList.remove("block"),c.classList.add("hidden")})};const V=()=>`
    <div
    id="gamesContainer1"
    class="w-full p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 auto-rows-[411px] [&>*]:bg-[#23252b] gap-4 4xl:px-[18%]"
  >
 </div> `,z=()=>`
    <div
    id="gamesContainer2"
    class="w-full p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 auto-rows-[411px] [&>*]:bg-[#23252b] gap-4 4xl:px-[18%]"
  >
 </div> `,k=()=>`
    <div
    id="gamesContainer3"
    class="w-full p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 auto-rows-[411px] [&>*]:bg-[#23252b] gap-4 4xl:px-[18%]"
  >
 </div> `,S=()=>`
    <div
    id="gamesContainer4"
    class="w-full p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 auto-rows-[411px] [&>*]:bg-[#23252b] gap-4 mb-[60px] 4xl:px-[18%]"
  >
 </div> `;let j=`


<header
class="w-full h-[60px] items-center pl-[16px] pr-[16px] pt-[10px] sm:hidden ol:flex 4xl:px-[18%]"
>
<div class="header1__logo w-[200px] h-[56px]">
  <a
    href="#"
    class="text-white w-[200px] h-[56px] flex justify-center items-center"
  >
    <svg fill="currentColor" viewBox="0 0 196 32">
      <title id="blz-icon-title-battlenet-logo">Battle.net</title>
      <path
        fill="#148EFF"
        stroke="none"
        d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
      ></path>
      <path
        stroke="none"
        d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
      ></path>
      <path
        fill="#148EFF"
        stroke="none"
        d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
      ></path>
      <path
        stroke="none"
        d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
      ></path>
    </svg>
  </a>
</div>
<div class="w-[calc(100vw-200px)] flex flex-row justify-end">
  <div
    class="haeder1__download w-[230px] h-[48px] flex flex-row gap-3 justify-center items-center hover:bg-[#23252b] hover:rounded-[4px] group/Download"
  >
    <svg
      class="w-[24px] h-[24px] fill-[#8b8c8f] group-hover/Download:fill-white"
      xmlns="http://www.w3.org/2000/svg "
      fill="currentColor"
      aria-labelledby="blz-icon-title-bn-download-outlined"
      viewBox="0 0 24 24"
      part="icon"
    >
      <title id="blz-icon-title-bn-download-outlined">Download</title>
      <path
        d="m18.06 9.646-.707-.707a.5.5 0 0 0-.707 0L13 12.586V4a1 1 0 1 0-2 0v8.586L7.353 8.939a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .708l5.707 5.707a.5.5 0 0 0 .707 0l5.708-5.707a.5.5 0 0 0 0-.708Z"
      ></path>
      <path
        d="M3.5 16a.5.5 0 0 0-.5.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V19H5v-2.5a.5.5 0 0 0-.5-.5z"
      ></path>
    </svg>
    <a class="text-white font-[700] text-[17px]" href="#"
      >Download Battle.net
    </a>
  </div>
  <div
    class="header1__support w-[133px] h-[48px] flex gap-3 flex-row justify-center items-center hover:bg-[#23252b] group/Support hover:rounded-[4px]"
  >
    <svg
      class="w-[24px] h-[24px] fill-[#8b8c8f] group-hover/Support:fill-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-labelledby="blz-icon-title-bn-question-outlined"
      viewBox="0 0 24 24"
      part="icon"
    >
      <title id="blz-icon-title-bn-question-outlined">Question</title>
      <path
        d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
      ></path>
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
      ></path>
    </svg>
    <a class="text-white font-[700] text-[17px]" href="#">Support</a>
  </div>
  <div
    class="w-[151px] h-[48px] flex flex-row justify-center items-center gap-3 hover:bg-[#23252b] hover:rounded-[4px] relative group/header1"
  >
    <svg
      class="w-[24px] h-[24px] fill-[#8b8c8f]"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-labelledby="blz-icon-title-bn-account-outlined"
      viewBox="0 0 24 24"
      part="icon"
    >
      <title id="blz-icon-title-bn-account-outlined">Account</title>
      <path
        d="M15.75 9.75a3.73 3.73 0 0 1-1.433 2.949A3.73 3.73 0 0 1 12 13.5a3.73 3.73 0 0 1-3.023-1.53 3.75 3.75 0 1 1 6.773-2.22m-5.5 0a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
      ></path>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.047-4.73q.223.29.393.595A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.445-2.139l.005.005q.171-.305.393-.596c.442-.575.92-.943 1.36-1.13a7.37 7.37 0 0 0 3.687.992c1.34 0 2.594-.364 3.687-.993.44.188.919.556 1.36 1.13Zm-8.835-3.194c-1.188.268-2.237 1.115-2.99 2.172H5.22a8 8 0 1 1 13.56 0c-.755-1.056-1.804-1.904-2.992-2.172a4 4 0 0 0-.487-.075c-.947.715-2.082 1.131-3.3 1.131-1.22 0-2.355-.416-3.302-1.131q-.247.022-.487.075"
      ></path>
    </svg>
    <a
      class="text-white font-[700] text-[17px] flex flex-row justify-center items-center gap-1"
      href="#"
    >
      Account
      <svg
        class="w-[12px] h-[12px] fill-[#8b8c8f]"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-labelledby="blz-icon-title-bn-chevron-down-filled"
        viewBox="0 0 24 24"
        part="icon"
      >
        <title id="blz-icon-title-bn-chevron-down-filled">
          Chevron Down
        </title>
        <path
          d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
        ></path>
      </svg>
    </a>

    <div
      class="w-[320px] h-auto absolute top-[100%] hidden group-hover/header1:flex right-[-15px] z-50 pt-[17px]"
    >
      <div
        class="w-[320px] h-[370px] bg-[#1a1c23] hidden group-hover/header1:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col"
      >
        <div
          class="w-[10px] h-[10px] border-t-[10px] mt-[-20px] rotate-270 border-b-[10px] border-r-[10px] border-l-[10px] border-l-[#1a1c23] border-r-transparent border-t-transparent border-b-transparent shadow-2xl absolute right-[80px] top-[20px]"
        ></div>

        <div
          class="w-full h-[80px] flex justify-center items-center pr-[23px] pl-[23px]"
        >
          <div
            class="w-full h-[48px] bg-[#0074e0] hover:bg-[#47a6ff] rounded-[4px] flex justify-center items-center cursor-pointer "
          >
            <a class="text-white font-bold text-[17px]" href="#"
              >Log In</a
            >
          </div>
        </div>
        <div
          class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings"
        >
          <div
            class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
          >
            <a
              class="text-[#8b8c8f] font-bold text-[14px] flex flex-row gap-3 group-hover/Account__Settings:text-white"
              href="#"
            >
              <svg
                class="w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-account-settings-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-account-settings-outlined">
                  Account Settings
                </title>
                <path
                  d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"
                ></path>
                <path
                  d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"
                ></path>
              </svg>
              Account Settings</a
            >
          </div>
        </div>
        <div
          class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Wish__List"
        >
          <div
            class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
          >
            <a
              class="text-[#8b8c8f] font-bold text-[14px] flex flex-row gap-3 group-hover/Wish__List:text-white"
              href="#"
            >
              <svg
                class="w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-heart-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-heart-outlined">
                  Heart
                </title>
                <path
                  d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"
                ></path>
              </svg>
              Wish List</a
            >
          </div>
        </div>
        <div
          class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Redeem__Code"
        >
          <div
            class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
          >
            <a
              class="text-[#8b8c8f] font-bold text-[14px] flex flex-row gap-3 group-hover/Redeem__Code:text-white"
              href="#"
            >
              <svg
                class="w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-bar-code-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-bar-code-outlined">
                  Bar Code
                </title>
                <path
                  d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"
                ></path>
              </svg>
              Redeem Code</a
            >
          </div>
        </div>
        <div
          class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Change__BattleTag"
        >
          <div
            class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
          >
            <a
              class="text-[#8b8c8f] font-bold text-[14px] flex flex-row gap-3 group-hover/Change__BattleTag:text-white"
              href="#"
            >
              <svg
                class="w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-battletag-change-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-battletag-change-outlined">
                  Battletag Change
                </title>
                <path
                  d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
                ></path>
              </svg>
              Change BattleTag</a
            >
          </div>
        </div>
        <div
          class="w-full h-[75px] bg-[#2c2e30] flex justify-center items-center pr-[10px] pl-[10px] mt-[10px] group/Create__Account"
        >
          <div
            class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
          >
            <a
              class="text-[#8b8c8f] font-bold text-[14px] flex flex-row gap-3 group-hover/Create__Account:text-white"
              href="#"
            >
              <svg
                class="w-[24px] h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-pencil-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-pencil-outlined">
                  Pencil
                </title>
                <path
                  d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"
                ></path>
              </svg>
              Create Account</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
`,B=`


<header
class="w-full h-[83px] sticky top-0 flex-row gap-2 pr-[16px] pl-[16px] z-40 bg-[#15171e] items-center justify-center sm:hidden ol:flex 4xl:px-[10%]"
>
<div
  class="2xl:w-[64%] ol:w-[75%] h-[56px] bg-[#23252b] rounded-[4px] flex flex-row"
>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[113px] h-full flex relative group/header2 justify-center items-center gap-1 hover:bg-[#303237] cursor-pointer hover:rounded-bl-[4px] hover:rounded-tl-[4px] group/Warcraft"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/Warcraft:text-white"
      href="#"
    >
      Warcraft
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>
    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/header2:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-[315px] bg-[#1a1c23] hidden group-hover/header2:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col pb-[10px] gap-1"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/World_of_Warcraft"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #2b374c;
                }
                .st1 {
                  fill: #f4bf2a;
                }
              </style>
              <g>
                <circle
                  class="st0"
                  cx="255.7"
                  cy="256.5"
                  r="168"
                ></circle>
                <path
                  class="st1"
                  d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
          c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
          c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
          c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                ></path>
                <path
                  class="st1"
                  d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
          c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
          c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
          h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/World_of_Warcraft:text-white font-[600]"
                href="#"
              >
                World of Warcraft
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Massively Multiplayer RPG</span
              >
            </div>
          </div>
        </div>
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/World_of_Warcraft_Classic"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              part="icon"
            >
              <g clip-path="url(#clip0_1641_233)">
                <path
                  d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                  fill="#010100"
                ></path>
                <path
                  d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                  fill="#A43B00"
                ></path>
                <path
                  d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                  fill="#FEAF51"
                ></path>
                <path
                  d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                  fill="#FEAF51"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1641_233">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/World_of_Warcraft_Classic:text-white font-[600]"
                href="#"
              >
                World of Warcraft Classic</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Massively Multiplayer RPG</span
              >
            </div>
          </div>
        </div>
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft_Rumble"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Warcraft_Arclight_Rumble_Icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              style="enable-background: new 0 0 50 50"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  display: none;
                }
                .st1 {
                  display: inline;
                }
                .st2 {
                  fill: #ffc345;
                }
                .st3 {
                  fill: #1783fc;
                }
                .st4 {
                  fill: #65faff;
                }
                .st5 {
                  fill: #ca9a2d;
                }
                .st6 {
                  clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                  fill: #f3c029;
                }
                .st7 {
                  fill: #cb9b2e;
                }
                .st8 {
                  clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                  fill: #f3c029;
                }
              </style>
              <g id="BG_Check" class="st0">
                <g class="st1">
                  <rect
                    x="-0.9"
                    y="0"
                    class="st2"
                    width="51.8"
                    height="50.1"
                  ></rect>
                </g>
              </g>
              <g id="Color_Icon">
                <g id="Color">
                  <g>
                    <polygon
                      id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                      class="st3"
                      points="3,41.2 24.8,12.8 26.5,20.6 
45.1,8.7 22.6,38.9 21,30.9 			"
                    ></polygon>
                    <polygon
                      id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                      class="st4"
                      points="8.9,36.1 23.9,17 25.4,23.7 
39.5,13.8 23.7,34.9 22.2,28.2 			"
                    ></polygon>
                  </g>
                </g>
                <g id="Gear_Bottom">
                  <path
                    class="st5"
                    d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                  ></path>
                  <g>
                    <defs>
                      <rect
                        id="SVGID_1_"
                        x="25.5"
                        y="22"
                        transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                        width="22.3"
                        height="21.3"
                      ></rect>
                    </defs>
                    <clipPath
                      id="SVGID_00000075133456212352472110000010580075822202493077_"
                    >
                      <use
                        xlink:href="#SVGID_1_"
                        style="overflow: visible"
                      ></use>
                    </clipPath>
                    <path
                      style="
                        clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                        fill: #f3c029;
                      "
                      d="M43.8,20.1l3.2-2.8
l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                    ></path>
                  </g>
                </g>
                <g id="Gear_Top">
                  <path
                    class="st7"
                    d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
S11.4,18.2,10.3,18.2z"
                  ></path>
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000055672971664679300050000012021230636705464218_"
                        x="5.7"
                        y="6.8"
                        transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                        width="22.3"
                        height="21.3"
                      ></rect>
                    </defs>
                    <clipPath
                      id="SVGID_00000018927629766040953380000014933339883308610698_"
                    >
                      <use
                        xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                        style="overflow: visible"
                      ></use>
                    </clipPath>
                    <path
                      style="
                        clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                        fill: #f3c029;
                      "
                      d="M15.7,17.1
c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
S11.4,18.2,10.3,18.2z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft_Rumble:text-white font-[600]"
                href="#"
              >
                Warcraft Rumble
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action Strategy</span
              >
            </div>
          </div>
        </div>
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Hearthstone"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #593810;
                }
                .st1 {
                  fill: #ff9c00;
                }
                .st2 {
                  fill: #39ccff;
                }
              </style>
              <g>
                <circle
                  class="st0"
                  cx="256.7"
                  cy="256"
                  r="138.3"
                ></circle>
                <g>
                  <path
                    class="st1"
                    d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                  c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                  L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                  c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                  c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                  L256,384.3z"
                  ></path>
                  <path
                    class="st2"
                    d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                  c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                  c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                  c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                  c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                  c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                  c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                  c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                  s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                  c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                  c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                  c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                  c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                  c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                  c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                  ></path>
                </g>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Hearthstone:text-white font-[600]"
                href="#"
              >
                Hearthstone</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Strategy Card Game</span
              >
            </div>
          </div>
        </div>
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              id="a"
              data-name="Warcraft_Family"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              part="icon"
            >
              <defs>
                <style>
                  .d,
                  .e {
                    fill: #f8b700;
                  }

                  .e {
                    fill-rule: evenodd;
                  }
                </style>
              </defs>
              <path
                id="b"
                data-name="Border"
                class="d"
                d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
              ></path>
              <path
                id="c"
                data-name="W"
                class="e"
                d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[96px] h-full flex justify-center items-center gap-1 hover:bg-[#303237] cursor-pointer group/Diablo relative"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/Diablo:text-white"
      href="#"
    >
      Diablo
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>

    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/Diablo:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-[315px] bg-[#1a1c23] hidden group-hover/Diablo:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col pb-[10px] gap-1"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Diablo_IV"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="diablo_4"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              style="enable-background: new 0 0 24 24"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #ebe9e8;
                }

                .st1 {
                  fill: #dd0707;
                }
              </style>
              <path
                class="st0"
                d="M9.7,7.3c0.7,0,3.2,0,5.3,0c0.9,0,1.7,0.1,2.2,0.1c0.2,0,0.2,0.1,0.1,0.2S17,7.8,16.8,8s-0.1,0.5,0,0.7
          c0.1,0.3,0.5,1.5,0.8,2.2c0,0,0,0,0,0c-0.1,0.1-0.2,0.6-0.3,0.8c-0.1,0.2-0.2,1.1-0.4,1.7s-0.7,1.6-1.5,2.4
          c-0.8,0.7-1.9,1.2-2.9,1.4c-0.9,0.2-3.1,0.3-4.1,0.3c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0.1-0.2,0.2
          c-0.2,0-1,0.1-1.3,0.1c-0.3,0-1.4,0-1.7,0c0.1-0.1,0.2-0.2,0.6-0.5c0.3-0.3,1.6-0.6,2-0.6c0.2-0.1,0.2-0.2,0.2-0.3
          c0-0.1,0-0.4-0.1-0.5c-0.1-0.1-0.1-0.4-0.1-0.6c0-0.2,0-1.4,0-1.6c0-0.2,0.1-0.3,0.2-0.4s0-0.2-0.1-0.3c-0.1,0-0.1-0.1-0.1-0.2
          s0-1.6,0-1.9c0-0.3,0.5-0.8,0.8-1.1C8.1,9.6,7.9,9.5,7.7,9.5c-0.2,0-0.3,0-0.6-0.1s-1.1-0.7-1.6-1C5.1,8.1,4.4,7.6,4.3,7.5
          C4.2,7.5,4.1,7.3,4.1,7.3C4.8,7.2,8.6,7.3,9.7,7.3z M9,8.3c0.2,0.2,0.8,0.8,1,0.9c0.2,0.1,0.4,0.5,0.4,0.6c-0.2,0-0.7,0-0.8,0
          c-0.1,0-0.2,0-0.2,0.1c0,0.3,0.1,2.1,0.1,2.3c0,0.1,0,0.2,0.1,0.3s0.5,0.5,0.5,0.6c-0.1,0.1-0.4,0.4-0.5,0.5
          c-0.1,0.1-0.1,0.1-0.1,0.3c0,0.2,0,1.1,0,1.2c0,0.2,0.1,0.8,0,0.9c0.4,0,1.6,0,2.2,0c0.6,0,1.3-0.3,1.8-0.8c0.6-0.6,0.7-1.5,0.8-2.1
          c0.1-0.4,0-0.6,0.2-1.1c0-0.4,0-0.9,0-1c0-0.1,0-0.5-0.1-0.7c-0.1-0.2-0.1-0.8-0.5-1.1C14.2,9.2,14.3,9,14.4,9
          c0.1-0.1,0.2-0.2,0-0.2c-0.5-0.2-1.8-0.3-2.6-0.4C11,8.3,9.5,8.3,9,8.3z"
              ></path>
              <path
                class="st1"
                d="M3.9,5.1L2,4.2l0.1,0c0,0,1.7-0.1,2-0.1c0.3,0,0.4,0,0.4,0s0.3,0.1,0.3,0.1l0.8,0l0.4,0c0,0,0.2,0,0.3,0.1
          c0.1,0,1,0,1,0s0.3,0,0.3,0c0,0,0.4,0,0.4,0c0.1,0,0.2,0,0.2,0c0,0,0.3,0,0.3,0s0.4,0,0.4,0c0,0,0.1,0,0.1,0S8.4,4.8,8.3,4.9
          c0,0-0.1,0.1-0.1,0.1L7.9,5.3L7.6,5.8c0,0,0,0.1,0,0.2c0,0,0,0.3,0,0.6c-0.9,0-1.8,0-2.5,0c-0.1,0-0.1,0-0.2,0c0-0.1,0-0.3,0-0.3
          s0,0,0-0.1c0,0-0.1-0.3-0.1-0.3s0-0.1,0-0.1c0,0-0.4-0.5-0.4-0.5S4.1,5.1,4.1,5.1S4,5.1,3.9,5.1z M6.8,10.1C6.4,9.9,5.5,9.3,5.1,9
          C5.1,9,5,8.9,4.9,8.9c0,0.3,0,0.7,0,0.8c0,0.1,0,0.2,0,0.2C5,9.9,5,9.9,5,9.9s0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1
          s0.3,1.1,0.3,1.3c0,0.2,0.2,1,0.2,1c0,0.1,0.2,1.9,0.3,2.2c0,0.1,0.1,0.7,0.2,1.3C6.1,16,6.4,16,6.6,15.9c0-0.2-0.1-0.4-0.1-0.7
          c0-0.1,0-0.6,0-1.2c0-0.2,0-0.4,0-0.5c0-0.2,0-0.4,0.1-0.5c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.4,0-1.6,0-2C6.6,10.5,6.7,10.3,6.8,10.1z
           M7.4,18.4c-0.3,0-0.7,0-0.9,0c-0.1,0-0.1,0-0.2,0c0,0.3,0,0.5,0.1,0.5c0,0.1,0.1,1.3,0.1,1.3c0,0.1,0.1,0.3,0.1,0.3s0,0.2,0.1,0.3
          c0,0.1,0,0.4,0.1,0.7c0.1,0.3,0.1,0.3,0.1,0.3s0.3-1.7,0.5-2.6c0-0.3,0.1-0.5,0.1-0.5c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1
          C7.3,18.6,7.4,18.5,7.4,18.4z M9.5,4.6c0,0.1,0.2,0.2,0.2,0.3c0,0,0.1,0.1,0.1,0.1l0.4,0.5c0,0,0.7,0.6,0.7,0.6c0,0,0.1,0.1,0.1,0.2
          c0,0,0,0.1,0.1,0.2c0,0,0,0,0,0.1c0.5,0,1.1,0,1.7,0c0.2,0,0.5,0,0.7,0c0,0,0-0.1,0-0.2c0-0.2,0.1-0.2,0.2-0.3
          c0.1-0.1,0.2-0.2,0.2-0.2c0.1-0.1,0.4-0.5,0.4-0.6c0,0,0.3-0.4,0.6-0.5c0.2-0.2,0.4-0.4,0.4-0.4c-0.2,0-0.4,0-0.4,0s-0.1,0-0.2,0
          c-0.1,0-0.3,0-0.4,0c-0.1,0-0.5,0.1-0.6,0.1c-0.2,0-0.5,0-0.5,0s-0.1,0-0.2,0c-0.1,0-0.3-0.1-0.3-0.1c-0.1,0-0.6,0-0.7,0
          c-0.1,0-0.3,0-0.3,0s-0.1,0-0.1,0c0,0-0.7,0-0.7,0c0,0-0.2,0.1-0.2,0.1c-0.1,0-0.4,0-0.4,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0
          c-0.1,0-0.2,0-0.2,0c0,0-0.3,0-0.3,0c-0.1,0-0.4,0-0.4,0c0,0,0,0,0,0.1C9.3,4.4,9.4,4.5,9.5,4.6z M11.9,9.1C12,9.2,12,9.2,11.9,9.1
          c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0.2,0,0.2l0.2,0.7l0.2,0.9c0,0.1,0.3,0.8,0.3,0.8c0,0,0.3,1,0.3,1
          c0,0,0.2,0.3,0.3,0.7c0.1-0.3,0.1-0.5,0.2-0.8l0-0.1c0-0.1,0-0.1,0-0.2c0-0.2,0-0.5,0.2-0.9c0-0.3,0-0.6,0-0.8c0,0,0-0.1,0-0.1
          c0-0.1,0-0.3-0.1-0.5c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.4-0.2-0.5l-0.7-0.6L13,9.2C12.6,9.2,12.3,9.2,11.9,9.1z M22,2.1
          C22,2.1,22,2.1,22,2.1l-0.8,1.4c0,0.1,0,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1-0.6,1.2-0.7,1.4c-0.1,0.2-0.8,1.7-0.9,2
          c-0.1,0.2-0.7,1.7-0.9,1.9c-0.1,0.2-0.3,0.8-0.5,1.2c0.1,0.2,0.1,0.3,0.2,0.5c0,0,0,0.1,0,0.1l0.1,0.3l-0.2,0.3
          c0,0.1-0.1,0.4-0.2,0.5c0,0,0,0.1,0,0.2c-0.1,0.4-0.2,1-0.4,1.5c-0.1,0.3-0.6,1.7-1.7,2.7c-0.4,0.4-0.8,0.7-1.2,0.9
          c0.1,0.4,0.2,0.8,0.3,0.9c0.1,0.2,0.4,1.1,0.5,1.4c0.1,0.3,0.3,1,0.3,1c0.1,0.2,0.1,0.4,0.1,0.4c0,0,0.1,0,0.1,0s0.1-0.1,0.1-0.1
          c0,0,0-0.1,0-0.1c0,0,0.1-0.1,0.1-0.1s0.2-0.5,0.2-0.6c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0s0.2-0.3,0.2-0.3c0,0,0.1-0.2,0.1-0.2
          c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0s0.2-0.7,0.2-0.8c0-0.2,0.3-1,0.3-1.1c0-0.1,0.1-0.2,0.1-0.2c0,0,0.1-0.6,0.2-0.6c0,0,0-0.1,0-0.1
          c0,0,0.4-0.7,0.5-0.8c0.1-0.1,0-0.2,0-0.2s0.1-0.1,0.1-0.1s0-0.1,0-0.1s0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.2-0.8,0.3-0.9
          c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.3-0.8,0.3-1c0.1-0.2,0.3-1.1,0.4-1.3c0.1-0.2,0.2-0.7,0.2-0.8c0-0.1,0-0.2,0-0.2
          c0,0-0.1-0.1-0.1-0.2c-0.1-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0.1-0.2,0.1-0.2c0,0,0.1-0.5,0.1-0.5l0.3-1.1
          l0.1-0.4c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.2c0-0.1,0.2-0.6,0.2-0.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.2-0.5s0.1-0.2,0.1-0.3
          c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0-0.2C21,5,21,4.8,21,4.8c0,0,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.3,0.2-0.4c0-0.1,0.1-0.2,0.1-0.3
          c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.3c0-0.1,0.1-0.2,0.1-0.2c0,0,0.1-0.1,0.1-0.2c0,0,0-0.2,0-0.2c0-0.1,0.1-0.1,0-0.1
          C21.9,2.5,22,2.2,22,2.1z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Diablo_IV:text-white font-[600]"
                href="#"
              >
                Diablo IV
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Diablo_Immortal"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 213 213"
              style="enable-background: new 0 0 213 213"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #ed1c24;
                }
                .st1 {
                  fill: #ede6ca;
                }
              </style>
              <g
                id="Layer_1_00000041290065268955031760000004908605694924825523_"
              >
                <path
                  class="st0"
                  d="M190.9,126l15.8-15.8l-15.8-15.8c-3.5,0.5-7.1-0.7-9.6-3.2L128,37.8c-2.5-2.5-3.7-6.1-3.2-9.6L109,12.4
            L93.2,28.3c0.5,3.5-0.7,7.1-3.2,9.6L36.6,91.2c-2.5,2.5-6.1,3.7-9.6,3.2l-15.8,15.8L27.1,126c3.5-0.5,7.1,0.7,9.6,3.2L90,182.5
            c2.5,2.5,3.7,6.1,3.2,9.6L109,208l15.8-15.8c-0.5-3.5,0.7-7.1,3.2-9.6l53.3-53.3C183.9,126.7,187.4,125.5,190.9,126z"
                ></path>
                <path
                  d="M99.5,126.3v40.5c0,1.1-12.3,8.3-12.3,8.3h43.4c0,0-9.6-7.2-9.6-8.3c0,0,0-39.8,0-41.4c0,0,0-7.6,0-7.6
            c0-0.6,3.7-3.8,7.4-6.4l0.3-0.2l-0.3-0.2c-3.6-2.7-7.3-5.8-7.3-6.4c0-0.4,0.1-10.1,0.1-10.1c0-1.4,0-39.7,0-39.8
            c0-1.1,9.5-8.3,9.5-8.3H87.3c0,0,12.2,7.2,12.2,8.3c0,0,0,37.8,0,38.6c0,0,0.1,10.8,0.1,11.3s-7.6,6.5-7.6,6.5s7.6,6,7.6,6.6
            C99.6,117.8,99.5,126.3,99.5,126.3z"
                ></path>
                <path
                  class="st1"
                  d="M174.4,98.7c-0.2-0.5-0.4-1-0.7-1.4l0,0c0,0-3-8.7-17-20.4c-5.9-5-12.6-9-19.8-11.8c-9.2-4-20.1-5.6-37.5-5.6
            l-51.5-0.2h-0.7l0.5,0.4c0.1,0.1,10.8,7.6,15,10.6c0.1,7.1,0,77.7,0,81L47,160.9l61,0.1c17,0,29.3-4.2,39.7-13.7
            c7.8-6.7,13.3-15.7,15.5-25.8c0.4-1.6,0.6-3.3,0.8-5c0.1-1.5,0.2-3,0.2-4.5c0-9.1-2.7-18-7.8-25.6c0,0,0-0.1,0-0.1
            c0.1,0,0.2,0.1,0.3,0.1c1.5,0.7,3,1.4,4.4,2.3l0.3,0.2c0.9,0.5,1.7,1.1,2.6,1.7c3.6,2.5,6.9,5.3,10,8.4l0.6,0.7L174.4,98.7z
             M102.3,150.7c-5.5,0-10.6,0-13.3,0h-1.8c-1.1,0-1.3,0-1.3-1.7c0-1.1,0.1-73.4,0.1-77.4c2-0.3,23.6-1.3,34,3.6
            c4.4,1.9,8.4,4.9,11.4,8.6c4.6,5.6,6.9,13,6.9,22c0,25.7-10.4,36.6-19.9,41.9C114.3,149.9,107.2,150.7,102.3,150.7L102.3,150.7z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/Diablo_Immortal:text-white font-[600]"
                href="#"
              >
                Diablo Immortal</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Diablo_III"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #490005;
                }
                .st1 {
                  fill: #d80000;
                }
                .st2 {
                  fill: #f23f00;
                }
                .st3 {
                  fill: #e8dcc1;
                }
              </style>
              <g>
                <g>
                  <path
                    class="st0"
                    d="M495.9,248.6c0,0-55.8-11.8-79.4-52.7c0,0-11.2,19.2-22.9,20.5c0,0,3.1-22.3,17.4-32.2l-17.4-16.7h-40.3
              c0,0,10.5-31,24.8-33.5c0,0-24.2-11.2-40.3,2.5c0,0-52.1,7.4-8.1-33.5c0,0-63.2-24.8-73.8-52.1c-10.5,27.3-73.8,52.1-73.8,52.1
              c44,40.9-8.1,33.5-8.1,33.5c-16.1-13.6-40.3-2.5-40.3-2.5c14.3,2.5,24.8,33.5,24.8,33.5h-40.3L101,184.1
              c14.3,10.5,17.4,32.2,17.4,32.2c-11.8-1.9-22.9-20.5-22.9-20.5c-22.9,40.9-79.4,52.7-79.4,52.7l0,0c0,0,55.8,11.8,79.4,52.7
              c0,0,11.2-19.2,22.9-20.5c0,0-3.1,22.3-17.4,32.2l17.4,16.7h40.3c0,0-10.5,31-24.8,33.5c0,0,24.2,11.2,40.3-2.5
              c0,0,52.1-7.4,8.1,33.5c0,0,63.2,24.8,73.8,52.1c10.5-27.3,73.8-52.1,73.8-52.1c-44-40.9,8.1-33.5,8.1-33.5
              c16.1,13.6,40.3,2.5,40.3,2.5c-14.3-2.5-24.8-33.5-24.8-33.5h40.3L411,313c-14.3-10.5-17.4-32.2-17.4-32.2
              c11.8,1.9,22.9,20.5,22.9,20.5C439.5,261,495.9,249.2,495.9,248.6L495.9,248.6z"
                  ></path>
                  <g>
                    <path
                      class="st1"
                      d="M257.2,10.5c6.2,40.9,9.9,81.2,12.4,122.1s3.1,81.2,3.1,122.1s-1.2,81.2-3.1,122.1
                c-2.5,40.9-5.6,81.2-12.4,122.1c-6.2-40.9-9.9-81.2-12.4-122.1s-3.1-81.2-3.1-122.1s1.2-81.2,3.1-122.1
                C247.9,91.7,251,50.8,257.2,10.5z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="st2"
                      d="M257.2,8c6.2,41.5,9.9,82.5,12.4,124s3.1,82.5,3.1,124s-1.2,82.5-3.1,124c-2.5,41.5-5.6,82.5-12.4,124
                c-6.2-41.5-9.9-82.5-12.4-124s-3.1-82.5-3.1-124s1.2-82.5,3.1-124C247.9,90.5,251,49.5,257.2,8z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="st2"
                      d="M172.3,58.2c6.2,32.9,9.9,65.7,12.4,98c2.5,32.9,3.1,65.7,3.1,98c0,32.9-1.2,65.7-3.1,98
                c-2.5,32.9-5.6,65.7-12.4,98c-6.2-32.9-9.9-65.7-12.4-98c-1.9-32.2-3.1-65.1-3.1-97.3c0-32.9,1.2-65.7,3.1-98
                C162.4,123.3,166.1,91.1,172.3,58.2z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="st2"
                      d="M337.8,58.2c6.2,32.9,9.9,65.7,12.4,98c2.5,32.9,3.1,65.7,3.1,98c0,32.9-1.2,65.7-3.1,98
                c-2.5,32.9-5.6,65.7-12.4,98c-6.2-32.9-9.9-65.7-12.4-98c-2.5-32.9-3.1-65.7-3.1-98c0-32.9,1.2-65.7,3.1-98
                C327.9,123.3,331.6,91.1,337.8,58.2z"
                    ></path>
                  </g>
                </g>
                <path
                  class="st3"
                  d="M398,198.3c-12.4-8.7-26-17.4-42.2-21.7c15.5,21.7,33.5,45.9,31,86.2c-1.9,31-16.7,52.7-32.9,70.1
            c-17.4,18-39.7,31.6-63.9,37.8c-14.3,5-28.5,7.4-43.4,8.1c-49,0-99.8-3.1-146.9,2.5c-0.6-4.3-1.2-8.7-2.5-13
            c19.2-5,45.3-11.2,47.7-33.5c1.2-12.4,1.2-154.4-1.2-164.9c-3.1-14.3-31-18.6-45.9-21.7c0-5,1.2-8.1,1.2-13
            c32.2-4.3,64.5-4.3,99.2-6.2C287.6,125.2,364.5,143.2,398,198.3z M210.7,163c-4.3,0.6-3.1,14.9-3.1,19.2c0.6,36-0.6,78.1-0.6,114.1
            c0,11.2-3.1,35.3,3.7,40.9s32.9,3.7,43.4,2.5c54.6-3.7,78.7-63.9,60.1-116.6c-11.8-34.1-38.4-57.7-82.5-60.8
            C226.2,161.8,212,163,210.7,163z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Diablo_III:text-white font-[600]"
                href="#"
              >
                Diablo III
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Diablo_II_Resurrected"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              id="DII_Icon"
              data-name="DII Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 447.64 382.43"
              part="icon"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #ffcb05;
                  }
                  .cls-2 {
                    fill: #540000;
                  }
                  .cls-3 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M499.29,101.52c1.83,9.22,1.69,16.38-8.24,20.71-5.09,2.23.54,9.94-6.2,13-7.92,3.61-10.58-16.1-10.58-16.1-6.64,9.05-4.22,14.59-1.4,22.36,1.06,2.92,2.43,7-2.37,11-3.54,3-11.86,6.42-20.41-.55-4.53-3.71-8.26-13.85-4.42-17.8,7.09-7.29,1.72-18.31,1.72-18.31-.14,7.63-4.38,11.31-10.14,13-3.62,1.06-6.21,4.66-4,13.52s2.16,17-3.67,16c-10.18-1.7-3.82-16.68-8.74-19.81-3.18-2-7.76,2.89-11.08,1.56s-4.44-4.66-2.89-10.42.22-14.19-2.74-17.42c-6.26-6.83.14-15.19.41-15.54-11.72,5.36-6.63,12.23-9.72,24.89-2.78,11.37-10.56,6.07-13.89,19.82s1.56,10.42,8.21,11.85,6.43,7,6.87,13,7.32,5.09,8,10.19-4.43,9.76-8.64,10.2-13.08-6.65-13.75-12.41-6.29-9.92-13.22-11.06c-10.12-1.67-11.51-17.08-11.51-17.08-.84,6.41-6,16.89,3.8,26.18A10.93,10.93,0,0,1,363,185.84c-2.88,4.87-13.75-.67-17.07-4s-8-1.1-12.42,3.33c-3.93,3.93-6.31-8.24-4-14.19,4-10.2-9.21-21.07-9.21-21.07.29,2.26,6,9.75-5.1,18.63-6.68,5.35-.22,10.75.45,20.5s-8.43,3.88-8.4,13.9c0,9,17.07,15.14,8.17,21.8-5.41,4-16.21.85-17.11-7.8-.64-6.15-4.06-8.22-9.05-12.16-10.37-8.21,8.18-30.26,8.64-30.8-23.27,12.4-25.26,18.17-22.16,33.46,2.14,10.54-5.58,17.11-12.41,12.2-3.73-2.68-6-7.2-3.55-14.64,2.63-7.86-2.35-20,6.37-28.25,12.19-11.57,5.54-28.82-10-36.24-9.1-4.35-9.31-19.19-9.31-19.19-12.86,20.4,2.54,28.35,2.88,38.8.67,19.95-15.18,27.13-15.18,27.13,0-1.77,7.87-10.95-.33-19.37-3.05-3.14-8.43-6.21-4.92-13.12C233.62,146.24,224,134,224,134c.27,7.91,2.21,17.06-6.42,21.25-5.87,2.85,0,13.75-2.44,17.74s-8.07,8.45-15.38,4.37c-8.56-4.77-3.16-15.24.38-20.19,5.65-7.91-2.44-20.12-2.9-20.78.13.56,1.57,7.66-6.26,13.76-10.26,8-8,16.92-8.18,20.47S180,181.7,175.19,182c-4.49.26-6.25-7.35-.28-14.7,2.68-3.31,0-19.42,0-19.42-1.39,4.58-2.64,8-8.88,10.54-5.9,2.36-6.52,14.29-6.52,14.29s.34-6.42-5.41-9.57c-9.16-5-4.19-16.8-4-17.19-13.16,5.27-6.78,17-9.19,19.25-2.88,2.7-7.53.92-12.86-4s-5.26-12.67-1.77-18.63,12.3-4.75,17.74-9.53,4.43-10.86.88-16.85c-3-5,4.22-14.41,4.22-14.41-8.86-.27-14.34,4.28-15,14.43-.41,6.8-4.56,7.94-9.29,7.21-11.65-1.8-5.83-15.53-5.83-15.53s-11.57.7-11.23,16.23c.14,6.38-3.45,10-11.65,11.09s-10.23-10.59-6.24-15.58,1.78-13.19,1.78-13.19-2,4.21-8.43,8.2-5.7,5.82-6.8,11.14,2.08,13.87-2.87,13.7c-10.87-.39-4.48-23.41-4.48-23.41-6.88,6.43-16.68,19.09-4,40.08,4.32,7.16,9.6,13.6,27.87,36.1h0c6.83,8.41,15.35,14.61,20,18.15s22.61,26.38,25,29.71,8.79,13.83,5.91,19.6-.06,169.7-1.39,174.58c-1,3.86-8.58,13.62-15.25,22.3h0c-3,4-5.91,7.73-7.88,10.58-2.24,3.24-3.33,5.33-2.22,5.27,4.21-.23,17.74,3.1,29.27.66,2.4-.5,17.32-.7,39.5-.71,5,0,10.35,0,16,0,90.41.23,259.18,2.43,263,.57,3.27-1.59.32-4.08-3.52-6.51-3.38-2.12-7.46-4.19-8.6-5.54-2.44-2.88-17.61-21-23-22.5-7.55-2.06-.12-172.84-.34-183.25-.09-4,2.43-10.2,4-14.64s37.24-42.5,43.45-50c3.85-4.68,8.41-8.67,12.08-13.91a1,1,0,0,1,.08-.11,35.61,35.61,0,0,0,5.31-11.35c2.83-10.67-4.34-16.05,9.5-36.27C512,117.14,499.29,101.52,499.29,101.52ZM268.77,272.59c21.93,0,33.2,6.32,38.79,11.62C320,296,320.38,319.49,320.62,333.55c0,1.13,0,2.19.06,3.18.28,12-2.3,36.62-13.7,52.83-10.32,14.65-18.59,14.65-21.31,14.65H262.15c0-11.3-.17-120.75-.19-131.58,1.29,0,2.78,0,4.19,0h2.62Z"
                transform="translate(-58.94 -96.79)"
              ></path>
              <path
                class="cls-2"
                d="M90.19,167.56a1.56,1.56,0,0,1,2.42-1.92c10.41,10.19,32,27.93,61.6,35.05C196.9,211,244.72,205,244.72,205s3.19-.58.83,1.72-14.14,11.58-18.43,18.1-10,12.47-10,47.54-.28,132.64-.28,139.57.28,31.46,12.75,40.33c12,8.5,20.48,9.75,21.16,9.83l.11,0c.63.14,6.23,1.37,7.15,3.59,0,0,1,1.53-2.64,1.53H110.94a1.4,1.4,0,0,1-.54-.1c-.57-.2-1.75-.75-1.65-1.7.14-1.25,4-2.64,9.15-4.44a60.79,60.79,0,0,0,22-14c7.62-7.76,9.28-10.25,9.28-26.47V260.57c0-7.9-.55-15.67-6.65-25.78s-9.28-15.53-24.25-31.33C107.51,192.06,96.35,177.69,90.19,167.56Z"
                transform="translate(-58.94 -96.79)"
              ></path>
              <path
                class="cls-1"
                d="M438.44,241l.23-.38c5.7-9.47,8.57-14.23,22.45-28.89C472.35,199.87,484,185,490.8,173.79a13.56,13.56,0,0,0-21.07-16.73c-9.37,9.16-29.09,25.49-56,32-15.7,3.78-34,5.69-54.48,5.69a295.2,295.2,0,0,1-31.59-1.61,15.92,15.92,0,0,0-2.37-.18,12.67,12.67,0,0,0-12,7.82c-.75,1.86-2.73,8.4,3.58,14.56.82.8,2,1.79,3.56,3.16,3.25,2.8,10.87,9.37,13.23,12.95.31.47.62.93.94,1.39,3.31,4.89,7.06,10.44,7.06,39.55,0,24.29.14,79.14.22,111.91,0,14.83.06,25.54.06,27.66,0,18.48-4,27.9-7.71,30.55-8.61,6.13-14.74,7.51-15.7,7.7l-.66.05-.24.1a29.07,29.07,0,0,0-9.65,3.62c-29.2-1.59-50.77-2.78-54.56-3.58-.33-.07-.64-.12-1-.17s-6.7-1.23-15.82-7.72c-3.73-2.65-7.71-12.07-7.71-30.55,0-2.12,0-12.83.06-27.66.08-32.77.22-87.62.22-111.91,0-29.11,3.75-34.66,7.06-39.55.32-.46.63-.92.94-1.39,2.36-3.58,16-15.31,16.79-16.11,6.31-6.16,4.33-12.7,3.58-14.56a12.67,12.67,0,0,0-12-7.82,15.92,15.92,0,0,0-2.37.18,294.13,294.13,0,0,1-31.59,1.61c-20.45,0-38.78-1.91-54.48-5.69-26.93-6.47-46.65-22.8-56-32a13.47,13.47,0,0,0-9.46-3.88h0a13.57,13.57,0,0,0-11.61,20.61c6.8,11.19,18.45,26.08,29.68,37.92,13.88,14.66,16.75,19.42,22.45,28.89l.23.38c4.58,7.59,4.93,12.91,4.93,19.59V420.51c0,4.42-.11,9.8-1,12.16-.47,1.25-1.51,2.52-4.84,5.9a49.05,49.05,0,0,1-17.46,11.09c-3.06,1.07-5.37,1.9-7.36,2.79-5.89,2.63-9.17,6.55-9.73,11.64-.7,6.25,3.11,12,9.47,14.31a13.58,13.58,0,0,0,4.64.82H461.61l1.52-.41c7.1-1.89,11.53-7.94,10.77-14.72-.56-5.09-3.84-9-9.73-11.64-2-.89-4.3-1.72-7.36-2.79a49.05,49.05,0,0,1-17.46-11.09c-3.33-3.38-4.37-4.65-4.84-5.9-.89-2.36-1-7.74-1-12.16V260.57C433.5,253.89,433.86,248.57,438.44,241Zm-183,226.24H110.94a1.4,1.4,0,0,1-.54-.1c-.57-.2-1.75-.75-1.65-1.7.14-1.25,4-2.64,9.15-4.44a60.79,60.79,0,0,0,22-14c7.62-7.76,9.28-10.25,9.28-26.47V260.57c0-7.91-.55-15.67-6.65-25.78s-9.28-15.53-24.25-31.33c-10.81-11.4-22-25.77-28.13-35.9a1.57,1.57,0,0,1,1.35-2.38,1.53,1.53,0,0,1,1.07.46c10.41,10.18,32,27.93,61.6,35.05,19.75,4.74,40.59,6,57.29,6A297.59,297.59,0,0,0,244.72,205a4.41,4.41,0,0,1,.74-.07c.77,0,1.66.26.09,1.79-2.35,2.3-14.14,11.58-18.43,18.1s-10,12.47-10,47.54-.28,132.64-.28,139.57.28,31.46,12.75,40.33c12,8.5,20.48,9.75,21.16,9.83l.11,0c.63.14,6.23,1.37,7.15,3.59C258,465.69,259,467.22,255.39,467.22ZM430.79,447a60.79,60.79,0,0,0,22,14c5.13,1.8,9,3.19,9.15,4.44s-1.94,1.8-1.94,1.8H373.45a12.72,12.72,0,0,0-1.28-6.84c-.86-1.79-16.37-3.38-36.25-4.75,1.65-1,3.38-2.09,5.2-3.38,12.47-8.87,12.75-33.4,12.75-40.33s-.28-104.51-.28-139.57-5.68-41-10-47.54-16.08-15.8-18.43-18.1c-1.57-1.53-.68-1.79.09-1.79a4.41,4.41,0,0,1,.74.07,297.59,297.59,0,0,0,33.22,1.72c16.7,0,37.54-1.28,57.29-6,29.63-7.12,51.19-24.87,61.6-35.05a1.53,1.53,0,0,1,1.07-.46,1.57,1.57,0,0,1,1.35,2.38c-6.16,10.13-17.32,24.5-28.13,35.9-15,15.8-18.15,21.21-24.25,31.33s-6.66,17.87-6.66,25.78V420.51C421.5,436.73,423.17,439.22,430.79,447Z"
                transform="translate(-58.94 -96.79)"
              ></path>
              <path
                class="cls-2"
                d="M480.54,167.56a1.56,1.56,0,0,0-2.42-1.92c-10.41,10.19-32,27.93-61.6,35.05C373.83,211,326,205,326,205s-3.19-.58-.83,1.72,14.13,11.58,18.43,18.1,10,12.47,10,47.54.28,132.64.28,139.57-.28,31.46-12.75,40.33-21.21,9.84-21.21,9.84-6.24,1.25-7.21,3.6c0,0-1,1.53,2.64,1.53H460s2.07-.56,1.94-1.8-4-2.64-9.15-4.44a60.79,60.79,0,0,1-22-14c-7.62-7.76-9.29-10.25-9.29-26.47V260.57c0-7.9.56-15.67,6.66-25.78s9.28-15.53,24.25-31.33C463.22,192.06,474.38,177.69,480.54,167.56Z"
                transform="translate(-58.94 -96.79)"
              ></path>
              <path
                d="M353.59,275.94a63.52,63.52,0,0,0-4.34-6.47c-2.51-3.3-5.1-6.53-7.94-9.61-12.17-13.2-28.84-23.5-63.25-23.5h-68.9a5.87,5.87,0,0,0-5.86,5.86v4a5.83,5.83,0,0,0,5.33,5.83c3.12.28,7.15,1.28,9.08,3.19a4.15,4.15,0,0,1,.64.77c2.4,3.77,3.09,5.33,3.09,16V404.15c0,.08.36,7.24-4.55,11.14l-.23.18c-19.82,14.87-26.35,37.33-28.48,49.39a5.85,5.85,0,0,0,.07,2.36,5.67,5.67,0,0,0,1.19,2.42,5.87,5.87,0,0,0,9.32-.42c.43-.61.9-1.29,1.43-2,4.19-5.67,11.43-14.08,20.44-18.66,1.27-.65,2.55-1.22,3.81-1.74a55.41,55.41,0,0,1,13.4-3.47,49.33,49.33,0,0,1,6.18-.43c.61,0,1,0,1.17,0h47c9.22,0,23.52-1.77,41.21-17.1a66.71,66.71,0,0,0,8.3-8.68,95.48,95.48,0,0,0,12.09-19.7,132.67,132.67,0,0,0,12-55C365.84,314.47,363.67,293.05,353.59,275.94ZM258,408.39a9.85,9.85,0,0,1-.33-3.42c0-5.55-.2-131.91-.2-133.18a18.69,18.69,0,0,1,.19-3.34c1.33-.35,5-.35,8.5-.35h2.62c23.42,0,35.7,7,41.89,12.85,13.78,13.06,14.2,37.77,14.46,52.53,0,1.12,0,2.17.06,3.16.29,12.54-2.44,38.35-14.52,55.52-11.66,16.56-21.7,16.56-25,16.56H260.58A6.73,6.73,0,0,1,258,408.39Z"
                transform="translate(-58.94 -96.79)"
              ></path>
              <path
                class="cls-3"
                d="M353.55,267.72c-.23-.33-.47-.65-.72-1a115.67,115.67,0,0,0-12-13.78c-12.46-11.87-30.22-21.1-62.74-21.1h-68.9a10.37,10.37,0,0,0-10.36,10.36v4a10.31,10.31,0,0,0,9.42,10.31c3.57.32,5.88,1.4,6.36,1.93,1.86,2.93,2.36,3.76,2.36,13.6V404.31l0,.14a12.9,12.9,0,0,1-.09,1.53c-.2,1.7-.86,4.36-2.9,5.89-21.05,15.8-28,39.49-30.21,52.21a9.75,9.75,0,0,0-.06,3.14,10.13,10.13,0,0,0,2.23,5.22l.07.09a10.36,10.36,0,0,0,15.95-.07c.18-.22.36-.44.52-.68.9-1.3,2.05-2.87,3.4-4.56,4-5,9.89-11.12,16.82-14.65a43.93,43.93,0,0,1,4.8-2.09A49.85,49.85,0,0,1,244,447.42h.86l.55,0h46.8c9.94,0,25.33-1.89,44.15-18.2a64.66,64.66,0,0,0,4.72-4.53,89.18,89.18,0,0,0,12.75-17.54c10.27-18.18,16.48-41.58,16.48-64.72C370.34,310.43,367.51,286.68,353.55,267.72ZM341.86,409.44a68.37,68.37,0,0,1-11.36,13c-17.32,15-30.67,16-38.26,16H245.37c-.13,0-.6,0-1.34,0a56.58,56.58,0,0,0-10.1,1,57.68,57.68,0,0,0-11.71,3.47c-1.2.5-2.41,1.05-3.62,1.67-10.87,5.54-19.21,15.88-23.53,22.1a1.33,1.33,0,0,1-.87.57l-.23,0-.26,0a1.33,1.33,0,0,1-1.09-1.57c1.85-10.5,7.53-30.8,24.54-44.83.72-.6,1.45-1.18,2.21-1.75,7.26-5.45,6.57-15.21,6.57-15.21V272c0-11.21-.77-13.71-3.79-18.47a10.5,10.5,0,0,0-4-3.5,25,25,0,0,0-9.17-2.52,1.36,1.36,0,0,1-1.23-1.35v-4a1.36,1.36,0,0,1,1.36-1.36h68.9c36.56,0,51.94,12.16,63.49,26.11,1.42,1.72,2.78,3.47,4.12,5.23A61.14,61.14,0,0,1,353.6,286c5.87,14.07,7.74,31.89,7.74,56.42a128.73,128.73,0,0,1-7.53,43.16A105,105,0,0,1,341.86,409.44ZM313.75,277.67c-14.1-13.36-36.38-14.08-45-14.08h-2.62c-11.77,0-13.19,0-13.19,8.19,0,0,.2,127.57.2,133.18s1,8.24,7.42,8.24h25.09c4.76,0,16.13-.65,28.67-18.47s15.66-44,15.33-58.22S330,293.09,313.75,277.67ZM285.67,404.21H262.15c0-11.3-.17-120.75-.19-131.58,1.29,0,2.78,0,4.19,0h2.62c21.93,0,33.2,6.32,38.79,11.62C320,296,320.38,319.49,320.62,333.55c0,1.13,0,2.19.06,3.18.28,12-2.3,36.62-13.7,52.83C296.66,404.21,288.39,404.21,285.67,404.21Zm44-67.69c-.33-14.18.35-43.43-15.92-58.85-14.1-13.36-36.38-14.08-45-14.08h-2.62c-11.77,0-13.19,0-13.19,8.19,0,0,.2,127.57.2,133.18s1,8.24,7.42,8.24h25.09c4.76,0,16.13-.65,28.67-18.47S330,350.71,329.67,336.52Zm-44,67.69H262.15c0-11.3-.17-120.75-.19-131.58,1.29,0,2.78,0,4.19,0h2.62c21.93,0,33.2,6.32,38.79,11.62C320,296,320.38,319.49,320.62,333.55c0,1.13,0,2.19.06,3.18.28,12-2.3,36.62-13.7,52.83C296.66,404.21,288.39,404.21,285.67,404.21Zm56.19,5.23a68.37,68.37,0,0,1-11.36,13c-17.32,15-30.67,16-38.26,16H245.37c-.13,0-.6,0-1.34,0a56.58,56.58,0,0,0-10.1,1,10.09,10.09,0,0,0,2.64,3.06c.43.31.86.6,1.28.88a49.33,49.33,0,0,1,6.18-.43c.61,0,1,0,1.17,0h47c9.22,0,23.52-1.77,41.21-17.1a66.71,66.71,0,0,0,8.3-8.68q.12-2.49.12-5.25C341.87,411.47,341.87,410.63,341.86,409.44Zm-81.28,3.77h25.09c4.76,0,16.13-.65,28.67-18.47s15.66-44,15.33-58.22.35-43.43-15.92-58.85c-14.1-13.36-36.38-14.08-45-14.08h-2.62c-11.77,0-13.19,0-13.19,8.19,0,0,.2,127.57.2,133.18S254.14,413.21,260.58,413.21Zm6.7-140.61h1.49c21.93,0,33.2,6.32,38.79,11.62C320,296,320.38,319.49,320.62,333.55c0,1.13,0,2.19.06,3.18.28,12-2.3,36.62-13.7,52.83-10.32,14.65-18.59,14.65-21.31,14.65H262.15c0-11.3-.17-120.75-.19-131.58,1.29,0,2.78,0,4.19,0ZM225.94,272c0-11.21-.77-13.71-3.79-18.47a10.5,10.5,0,0,0-4-3.5c-.18,1.6-.34,3.31-.49,5.15-.36,4.78-.57,10.43-.57,17.14,0,22.46-.11,70.58-.2,104.09v27.87l0,.14a12.9,12.9,0,0,1-.09,1.53c0,3.06,0,5.13,0,5.94s0,2,0,3.37c0,1.59.11,3.47.26,5.53.72-.6,1.45-1.18,2.21-1.75,7.26-5.45,6.57-15.21,6.57-15.21Z"
                transform="translate(-58.94 -96.79)"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Diablo_II_Resurrected:text-white font-[600]"
                href="#"
              >
                Diablo II: Resurrected</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Diablo_1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 646.17 1062.19"
              part="icon"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #f3ebac;
                  }

                  .cls-2 {
                    fill: #f3e8ae;
                  }

                  .cls-3 {
                    fill: #f3eede;
                  }

                  .cls-4 {
                    fill: #f3efbd;
                  }

                  .cls-5 {
                    fill: #f3edb9;
                  }

                  .cls-6 {
                    fill: #f3f0e9;
                  }

                  .cls-7 {
                    fill: #f3f1ef;
                  }

                  .cls-8 {
                    fill: #f6f4f1;
                  }

                  .cls-9 {
                    fill: #f6f4f0;
                  }

                  .cls-10 {
                    fill: #f6f2d5;
                  }

                  .cls-11 {
                    fill: #f6f0ce;
                  }

                  .cls-12 {
                    fill: #f7f5f2;
                  }

                  .cls-13 {
                    fill: #f7efb3;
                  }

                  .cls-14 {
                    fill: #f7f2dd;
                  }

                  .cls-15 {
                    fill: #f2ecac;
                  }

                  .cls-16 {
                    fill: #f2e7ac;
                  }

                  .cls-17 {
                    fill: #f2e4ae;
                  }

                  .cls-18 {
                    fill: #f2e398;
                  }

                  .cls-19 {
                    fill: #f2df93;
                  }

                  .cls-20 {
                    fill: #f2efd7;
                  }

                  .cls-21 {
                    fill: #f2f0ee;
                  }

                  .cls-22 {
                    fill: #f2e47e;
                  }

                  .cls-23 {
                    fill: #f2ed7f;
                  }

                  .cls-24 {
                    fill: #f2eeea;
                  }

                  .cls-25 {
                    fill: #f9f2d2;
                  }

                  .cls-26 {
                    fill: #f9f3d4;
                  }

                  .cls-27 {
                    fill: #f9f0c9;
                  }

                  .cls-28 {
                    fill: #f9f4db;
                  }

                  .cls-29 {
                    fill: #f8f0d4;
                  }

                  .cls-30 {
                    fill: #f8f1cf;
                  }

                  .cls-31 {
                    fill: #f8f3d2;
                  }

                  .cls-32 {
                    fill: #f8f7ef;
                  }

                  .cls-33 {
                    fill: #f8f7f6;
                  }

                  .cls-34 {
                    fill: #6b3121;
                  }

                  .cls-35 {
                    fill: #6b3d2e;
                  }

                  .cls-36 {
                    fill: #020202;
                  }

                  .cls-37 {
                    fill: #6a3a26;
                  }

                  .cls-38 {
                    fill: #eede68;
                  }

                  .cls-39 {
                    fill: #eee793;
                  }

                  .cls-40 {
                    fill: #eee9d5;
                  }

                  .cls-41 {
                    fill: #eee07d;
                  }

                  .cls-42 {
                    fill: #efdb8d;
                  }

                  .cls-43 {
                    fill: #ecd536;
                  }

                  .cls-44 {
                    fill: #eeefea;
                  }

                  .cls-45 {
                    fill: #eee7e1;
                  }

                  .cls-46 {
                    fill: #ebe6be;
                  }

                  .cls-47 {
                    fill: #ebe07f;
                  }

                  .cls-48 {
                    fill: #ebde50;
                  }

                  .cls-49 {
                    fill: #ebde67;
                  }

                  .cls-50 {
                    fill: #ebde5e;
                  }

                  .cls-51 {
                    fill: #eae2c0;
                  }

                  .cls-52 {
                    fill: #f0ebc0;
                  }

                  .cls-53 {
                    fill: #f0eb9a;
                  }

                  .cls-54 {
                    fill: #f0ede6;
                  }

                  .cls-55 {
                    fill: #eae4b0;
                  }

                  .cls-56 {
                    fill: #eae58f;
                  }

                  .cls-57 {
                    fill: #ebd98e;
                  }

                  .cls-58 {
                    fill: #eae08b;
                  }

                  .cls-59 {
                    fill: #eae16d;
                  }

                  .cls-60 {
                    fill: #e9e3c5;
                  }

                  .cls-61 {
                    fill: #e7cf21;
                  }

                  .cls-62 {
                    fill: #e7d73c;
                  }

                  .cls-63 {
                    fill: #eac11f;
                  }

                  .cls-64 {
                    fill: #f4efe5;
                  }

                  .cls-65 {
                    fill: #f5ebad;
                  }

                  .cls-66 {
                    fill: #f5f2f1;
                  }

                  .cls-67 {
                    fill: #f5f0d2;
                  }

                  .cls-68 {
                    fill: #f5f2c3;
                  }

                  .cls-69 {
                    fill: #f5f0d3;
                  }

                  .cls-70 {
                    fill: #f5eda6;
                  }

                  .cls-71 {
                    fill: #e8c020;
                  }

                  .cls-72 {
                    fill: #e8d743;
                  }

                  .cls-73 {
                    fill: #e8d21b;
                  }

                  .cls-74 {
                    fill: #e7e3c3;
                  }

                  .cls-75 {
                    fill: #e7e45a;
                  }

                  .cls-76 {
                    fill: #e7e3d4;
                  }

                  .cls-77 {
                    fill: #e8de6a;
                  }

                  .cls-78 {
                    fill: #e8c71f;
                  }

                  .cls-79 {
                    fill: #e8c51f;
                  }

                  .cls-80 {
                    fill: #e7deda;
                  }

                  .cls-81 {
                    fill: #e3d527;
                  }

                  .cls-82 {
                    fill: #e3d121;
                  }

                  .cls-83 {
                    fill: #e4ac24;
                  }

                  .cls-84 {
                    fill: #e4b224;
                  }

                  .cls-85 {
                    fill: #e4ae24;
                  }

                  .cls-86 {
                    fill: #e4ab25;
                  }

                  .cls-87 {
                    fill: #e4ab24;
                  }

                  .cls-88 {
                    fill: #e7c020;
                  }

                  .cls-89 {
                    fill: #e7c220;
                  }

                  .cls-90 {
                    fill: #e7c23a;
                  }

                  .cls-91 {
                    fill: #e7dd4f;
                  }

                  .cls-92 {
                    fill: #e3e1d7;
                  }

                  .cls-93 {
                    fill: #e4dfc9;
                  }

                  .cls-94 {
                    fill: #e9d21b;
                  }

                  .cls-95 {
                    fill: #e4d9be;
                  }

                  .cls-96 {
                    fill: #e9d51a;
                  }

                  .cls-97 {
                    fill: #e9d250;
                  }

                  .cls-98 {
                    fill: #e9cf1c;
                  }

                  .cls-99 {
                    fill: #e9d11f;
                  }

                  .cls-100 {
                    fill: #e9d574;
                  }

                  .cls-101 {
                    fill: #e9d547;
                  }

                  .cls-102 {
                    fill: #e4b424;
                  }

                  .cls-103 {
                    fill: #e9cc1d;
                  }

                  .cls-104 {
                    fill: #e9cc22;
                  }

                  .cls-105 {
                    fill: #e9d827;
                  }

                  .cls-106 {
                    fill: #e9d460;
                  }

                  .cls-107 {
                    fill: #e9d93f;
                  }

                  .cls-108 {
                    fill: #e3c222;
                  }

                  .cls-109 {
                    fill: #e4b823;
                  }

                  .cls-110 {
                    fill: #e4cf25;
                  }

                  .cls-111 {
                    fill: #e4bb25;
                  }

                  .cls-112 {
                    fill: #e4b024;
                  }

                  .cls-113 {
                    fill: #e4d225;
                  }

                  .cls-114 {
                    fill: #e4d33d;
                  }

                  .cls-115 {
                    fill: #e9ca1d;
                  }

                  .cls-116 {
                    fill: #e4c36e;
                  }

                  .cls-117 {
                    fill: #e4c331;
                  }

                  .cls-118 {
                    fill: #e9c31f;
                  }

                  .cls-119 {
                    fill: #e9c321;
                  }

                  .cls-120 {
                    fill: #edebe7;
                  }

                  .cls-121 {
                    fill: #ede9cd;
                  }

                  .cls-122 {
                    fill: #ede8de;
                  }

                  .cls-123 {
                    fill: #eedc6b;
                  }

                  .cls-124 {
                    fill: #eedd65;
                  }

                  .cls-125 {
                    fill: #eedc5f;
                  }

                  .cls-126 {
                    fill: #e3c72a;
                  }

                  .cls-127 {
                    fill: #e3cd26;
                  }

                  .cls-128 {
                    fill: #e3cc2d;
                  }

                  .cls-129 {
                    fill: #e3c537;
                  }

                  .cls-130 {
                    fill: #fffad9;
                  }

                  .cls-131 {
                    fill: #e8e4c9;
                  }

                  .cls-132 {
                    fill: #e8e1ce;
                  }

                  .cls-133 {
                    fill: #f4eba9;
                  }

                  .cls-134 {
                    fill: #eacc1c;
                  }

                  .cls-135 {
                    fill: #eada2d;
                  }

                  .cls-136 {
                    fill: #ead564;
                  }

                  .cls-137 {
                    fill: #f1eaba;
                  }

                  .cls-138 {
                    fill: #f1e8b0;
                  }

                  .cls-139 {
                    fill: #f1e5a5;
                  }

                  .cls-140 {
                    fill: #f1e9b9;
                  }

                  .cls-141 {
                    fill: #f1ecdd;
                  }

                  .cls-142 {
                    fill: #f1e88e;
                  }

                  .cls-143 {
                    fill: #f0e890;
                  }

                  .cls-144 {
                    fill: #f1eeea;
                  }

                  .cls-145 {
                    fill: #f1eece;
                  }

                  .cls-146 {
                    fill: #ece082;
                  }

                  .cls-147 {
                    fill: #e5cb3a;
                  }

                  .cls-148 {
                    fill: #faf3f1;
                  }

                  .cls-149 {
                    fill: #e6bb22;
                  }

                  .cls-150 {
                    fill: #e6bc22;
                  }

                  .cls-151 {
                    fill: #e6ba22;
                  }

                  .cls-152 {
                    fill: #e6b223;
                  }

                  .cls-153 {
                    fill: #e6b224;
                  }

                  .cls-154 {
                    fill: #e6bf24;
                  }

                  .cls-155 {
                    fill: #e6c84c;
                  }

                  .cls-156 {
                    fill: #e6c726;
                  }

                  .cls-157 {
                    fill: #e6c221;
                  }

                  .cls-158 {
                    fill: #e6dc49;
                  }

                  .cls-159 {
                    fill: #e6d33a;
                  }

                  .cls-160 {
                    fill: #e3b824;
                  }

                  .cls-161 {
                    fill: #e3bb26;
                  }

                  .cls-162 {
                    fill: #e3b024;
                  }

                  .cls-163 {
                    fill: #e3a725;
                  }

                  .cls-164 {
                    fill: #e3ac25;
                  }

                  .cls-165 {
                    fill: #e6ca59;
                  }

                  .cls-166 {
                    fill: #e6ce22;
                  }

                  .cls-167 {
                    fill: #e3ab25;
                  }

                  .cls-168 {
                    fill: #efe7c9;
                  }

                  .cls-169 {
                    fill: #efe15a;
                  }

                  .cls-170 {
                    fill: #efe36d;
                  }

                  .cls-171 {
                    fill: #f0db90;
                  }

                  .cls-172 {
                    fill: #eee2a2;
                  }

                  .cls-173 {
                    fill: #e5bf21;
                  }

                  .cls-174 {
                    fill: #e5b323;
                  }

                  .cls-175 {
                    fill: #e5db43;
                  }

                  .cls-176 {
                    fill: #e5c322;
                  }

                  .cls-177 {
                    fill: #e5c325;
                  }

                  .cls-178 {
                    fill: #efe7d0;
                  }

                  .cls-179 {
                    fill: #e5d01e;
                  }

                  .cls-180 {
                    fill: #7f4026;
                  }

                  .cls-181 {
                    fill: #7f412b;
                  }

                  .cls-182 {
                    fill: #7f4e38;
                  }

                  .cls-183 {
                    fill: #813425;
                  }

                  .cls-184 {
                    fill: #803e27;
                  }

                  .cls-185 {
                    fill: #803e24;
                  }

                  .cls-186 {
                    fill: #664638;
                  }

                  .cls-187 {
                    fill: #824526;
                  }

                  .cls-188 {
                    fill: #73412d;
                  }

                  .cls-189 {
                    fill: #995326;
                  }

                  .cls-190 {
                    fill: #9a4928;
                  }

                  .cls-191 {
                    fill: #6c4228;
                  }

                  .cls-192 {
                    fill: #9a6127;
                  }

                  .cls-193 {
                    fill: #7f2a20;
                  }

                  .cls-194 {
                    fill: #993a2a;
                  }

                  .cls-195 {
                    fill: #99312b;
                  }

                  .cls-196 {
                    fill: #989b94;
                  }

                  .cls-197 {
                    fill: #994327;
                  }

                  .cls-198 {
                    fill: #98342b;
                  }

                  .cls-199 {
                    fill: #974329;
                  }

                  .cls-200 {
                    fill: #984726;
                  }

                  .cls-201 {
                    fill: #6d3d2a;
                  }

                  .cls-202 {
                    fill: #812e23;
                  }

                  .cls-203 {
                    fill: #7e3926;
                  }

                  .cls-204 {
                    fill: #8c3529;
                  }

                  .cls-205 {
                    fill: #9d372b;
                  }

                  .cls-206 {
                    fill: #9d4e2d;
                  }

                  .cls-207 {
                    fill: #9d6332;
                  }

                  .cls-208 {
                    fill: #93382a;
                  }

                  .cls-209 {
                    fill: #a03b2b;
                  }

                  .cls-210 {
                    fill: #a03b29;
                  }

                  .cls-211 {
                    fill: #93372c;
                  }

                  .cls-212 {
                    fill: #a0482a;
                  }

                  .cls-213 {
                    fill: #934b26;
                  }

                  .cls-214 {
                    fill: #a0673b;
                  }

                  .cls-215 {
                    fill: #a1442c;
                  }

                  .cls-216 {
                    fill: #854626;
                  }

                  .cls-217 {
                    fill: #9f5b26;
                  }

                  .cls-218 {
                    fill: #a1452a;
                  }

                  .cls-219 {
                    fill: #872f23;
                  }

                  .cls-220 {
                    fill: #853c25;
                  }

                  .cls-221 {
                    fill: #874225;
                  }

                  .cls-222 {
                    fill: #944929;
                  }

                  .cls-223 {
                    fill: #944532;
                  }

                  .cls-224 {
                    fill: #952f2c;
                  }

                  .cls-225 {
                    fill: #883c24;
                  }

                  .cls-226 {
                    fill: #883a25;
                  }

                  .cls-227 {
                    fill: #946a48;
                  }

                  .cls-228 {
                    fill: #934230;
                  }

                  .cls-229 {
                    fill: #b6542d;
                  }

                  .cls-230 {
                    fill: #b65630;
                  }

                  .cls-231 {
                    fill: #b6592c;
                  }

                  .cls-232 {
                    fill: #b7b5b6;
                  }

                  .cls-233 {
                    fill: #bc5a2c;
                  }

                  .cls-234 {
                    fill: #bc5a2e;
                  }

                  .cls-235 {
                    fill: #8c2c26;
                  }

                  .cls-236 {
                    fill: #9e492a;
                  }

                  .cls-237 {
                    fill: #9e472a;
                  }

                  .cls-238 {
                    fill: #b95e31;
                  }

                  .cls-239 {
                    fill: #b75230;
                  }

                  .cls-240 {
                    fill: #b76929;
                  }

                  .cls-241 {
                    fill: #b9602a;
                  }

                  .cls-242 {
                    fill: #b7512b;
                  }

                  .cls-243 {
                    fill: #9e4a29;
                  }

                  .cls-244 {
                    fill: #9e522f;
                  }

                  .cls-245 {
                    fill: #9d4427;
                  }

                  .cls-246 {
                    fill: #ba602c;
                  }

                  .cls-247 {
                    fill: #b86729;
                  }

                  .cls-248 {
                    fill: #ba6529;
                  }

                  .cls-249 {
                    fill: #ba592d;
                  }

                  .cls-250 {
                    fill: #ba562b;
                  }

                  .cls-251 {
                    fill: #9e4429;
                  }

                  .cls-252 {
                    fill: #9f422b;
                  }

                  .cls-253 {
                    fill: #9f4129;
                  }

                  .cls-254 {
                    fill: #8e3828;
                  }

                  .cls-255 {
                    fill: #c2a435;
                  }

                  .cls-256 {
                    fill: #91342a;
                  }

                  .cls-257 {
                    fill: #913f29;
                  }

                  .cls-258 {
                    fill: #c3762a;
                  }

                  .cls-259 {
                    fill: #c36829;
                  }

                  .cls-260 {
                    fill: #905a26;
                  }

                  .cls-261 {
                    fill: #904827;
                  }

                  .cls-262 {
                    fill: #916538;
                  }

                  .cls-263 {
                    fill: #c36d2a;
                  }

                  .cls-264 {
                    fill: #c35d2b;
                  }

                  .cls-265 {
                    fill: #c45a2b;
                  }

                  .cls-266 {
                    fill: #913728;
                  }

                  .cls-267 {
                    fill: #8f3f29;
                  }

                  .cls-268 {
                    fill: #914927;
                  }

                  .cls-269 {
                    fill: #b8622a;
                  }

                  .cls-270 {
                    fill: #904a2c;
                  }

                  .cls-271 {
                    fill: #914822;
                  }

                  .cls-272 {
                    fill: #b75e2a;
                  }

                  .cls-273 {
                    fill: #b75d2a;
                  }

                  .cls-274 {
                    fill: #b5682a;
                  }

                  .cls-275 {
                    fill: #b75b2e;
                  }

                  .cls-276 {
                    fill: #b8632a;
                  }

                  .cls-277 {
                    fill: #b5542a;
                  }

                  .cls-278 {
                    fill: #b6462f;
                  }

                  .cls-279 {
                    fill: #b5582c;
                  }

                  .cls-280 {
                    fill: #bc4c2e;
                  }

                  .cls-281 {
                    fill: #8e4f2d;
                  }

                  .cls-282 {
                    fill: #8d3829;
                  }

                  .cls-283 {
                    fill: #8f4c25;
                  }

                  .cls-284 {
                    fill: #b9adb4;
                  }

                  .cls-285 {
                    fill: #bb4c37;
                  }

                  .cls-286 {
                    fill: #8e4a25;
                  }

                  .cls-287 {
                    fill: #8e4029;
                  }

                  .cls-288 {
                    fill: #8e4929;
                  }

                  .cls-289 {
                    fill: #8e4826;
                  }

                  .cls-290 {
                    fill: #90332a;
                  }

                  .cls-291 {
                    fill: #8d472d;
                  }

                  .cls-292 {
                    fill: #8d3f2a;
                  }

                  .cls-293 {
                    fill: #b9442c;
                  }

                  .cls-294 {
                    fill: #863123;
                  }

                  .cls-295 {
                    fill: #863224;
                  }

                  .cls-296 {
                    fill: #86452b;
                  }

                  .cls-297 {
                    fill: #86462a;
                  }

                  .cls-298 {
                    fill: #ce6f2f;
                  }

                  .cls-299 {
                    fill: #cf912a;
                  }

                  .cls-300 {
                    fill: #cf772a;
                  }

                  .cls-301 {
                    fill: #cf822a;
                  }

                  .cls-302 {
                    fill: #cf7138;
                  }

                  .cls-303 {
                    fill: #d07e2b;
                  }

                  .cls-304 {
                    fill: #d0682b;
                  }

                  .cls-305 {
                    fill: #a65b39;
                  }

                  .cls-306 {
                    fill: #a6562b;
                  }

                  .cls-307 {
                    fill: #b3392e;
                  }

                  .cls-308 {
                    fill: #b24f2d;
                  }

                  .cls-309 {
                    fill: #b2582a;
                  }

                  .cls-310 {
                    fill: #b25929;
                  }

                  .cls-311 {
                    fill: #b2572c;
                  }

                  .cls-312 {
                    fill: #aa4c2c;
                  }

                  .cls-313 {
                    fill: #a75c2a;
                  }

                  .cls-314 {
                    fill: #a8422b;
                  }

                  .cls-315 {
                    fill: #a8472c;
                  }

                  .cls-316 {
                    fill: #a67837;
                  }

                  .cls-317 {
                    fill: #aa522b;
                  }

                  .cls-318 {
                    fill: #a74d2a;
                  }

                  .cls-319 {
                    fill: #a9452d;
                  }

                  .cls-320 {
                    fill: #b45c29;
                  }

                  .cls-321 {
                    fill: #aa4e2b;
                  }

                  .cls-322 {
                    fill: #aa442c;
                  }

                  .cls-323 {
                    fill: #c16032;
                  }

                  .cls-324 {
                    fill: #c06c2a;
                  }

                  .cls-325 {
                    fill: #a6472b;
                  }

                  .cls-326 {
                    fill: #ac4a2b;
                  }

                  .cls-327 {
                    fill: #c0592b;
                  }

                  .cls-328 {
                    fill: #bd432f;
                  }

                  .cls-329 {
                    fill: #c0672a;
                  }

                  .cls-330 {
                    fill: #c0682a;
                  }

                  .cls-331 {
                    fill: #c0682b;
                  }

                  .cls-332 {
                    fill: #a75127;
                  }

                  .cls-333 {
                    fill: #a7522c;
                  }

                  .cls-334 {
                    fill: #b04c2c;
                  }

                  .cls-335 {
                    fill: #b16d2b;
                  }

                  .cls-336 {
                    fill: #b16f2a;
                  }

                  .cls-337 {
                    fill: #b1492e;
                  }

                  .cls-338 {
                    fill: #af5d28;
                  }

                  .cls-339 {
                    fill: #b24b2e;
                  }

                  .cls-340 {
                    fill: #d89029;
                  }

                  .cls-341 {
                    fill: #d88d28;
                  }

                  .cls-342 {
                    fill: #b24d2f;
                  }

                  .cls-343 {
                    fill: #b15329;
                  }

                  .cls-344 {
                    fill: #b15829;
                  }

                  .cls-345 {
                    fill: #b1592a;
                  }

                  .cls-346 {
                    fill: #d8a529;
                  }

                  .cls-347 {
                    fill: #d99328;
                  }

                  .cls-348 {
                    fill: #ae532d;
                  }

                  .cls-349 {
                    fill: #d99629;
                  }

                  .cls-350 {
                    fill: #a63d2c;
                  }

                  .cls-351 {
                    fill: #a54b29;
                  }

                  .cls-352 {
                    fill: #a54b2a;
                  }

                  .cls-353 {
                    fill: #b35b29;
                  }

                  .cls-354 {
                    fill: #b38a34;
                  }

                  .cls-355 {
                    fill: #b2b2ae;
                  }

                  .cls-356 {
                    fill: #a8502b;
                  }

                  .cls-357 {
                    fill: #a65029;
                  }

                  .cls-358 {
                    fill: #a54e29;
                  }

                  .cls-359 {
                    fill: #a54e2d;
                  }

                  .cls-360 {
                    fill: #bd6229;
                  }

                  .cls-361 {
                    fill: #c2672a;
                  }

                  .cls-362 {
                    fill: #be6b2a;
                  }

                  .cls-363 {
                    fill: #ab5828;
                  }

                  .cls-364 {
                    fill: #a5502b;
                  }

                  .cls-365 {
                    fill: #a8512c;
                  }

                  .cls-366 {
                    fill: #a7452d;
                  }

                  .cls-367 {
                    fill: #a7482c;
                  }

                  .cls-368 {
                    fill: #c2602b;
                  }

                  .cls-369 {
                    fill: #bf7d2b;
                  }

                  .cls-370 {
                    fill: #bf612a;
                  }

                  .cls-371 {
                    fill: #bf682c;
                  }

                  .cls-372 {
                    fill: #bf5f2b;
                  }

                  .cls-373 {
                    fill: #c4672a;
                  }

                  .cls-374 {
                    fill: #c06a2b;
                  }

                  .cls-375 {
                    fill: #c24537;
                  }

                  .cls-376 {
                    fill: #c24a30;
                  }

                  .cls-377 {
                    fill: #c4622b;
                  }

                  .cls-378 {
                    fill: #c1892e;
                  }

                  .cls-379 {
                    fill: #ab522d;
                  }

                  .cls-380 {
                    fill: #aba1ab;
                  }

                  .cls-381 {
                    fill: #c1722b;
                  }

                  .cls-382 {
                    fill: #dac327;
                  }

                  .cls-383 {
                    fill: #be652c;
                  }

                  .cls-384 {
                    fill: #be5e29;
                  }

                  .cls-385 {
                    fill: #be5c2b;
                  }

                  .cls-386 {
                    fill: #be5f2b;
                  }

                  .cls-387 {
                    fill: #c0562b;
                  }

                  .cls-388 {
                    fill: #bf692b;
                  }

                  .cls-389 {
                    fill: #cd812a;
                  }

                  .cls-390 {
                    fill: #c4732a;
                  }

                  .cls-391 {
                    fill: #c46b2a;
                  }

                  .cls-392 {
                    fill: #cb7d2b;
                  }

                  .cls-393 {
                    fill: #caa133;
                  }

                  .cls-394 {
                    fill: #cb6729;
                  }

                  .cls-395 {
                    fill: #ca7c2a;
                  }

                  .cls-396 {
                    fill: #cb742a;
                  }

                  .cls-397 {
                    fill: #ca7f2a;
                  }

                  .cls-398 {
                    fill: #ca842a;
                  }

                  .cls-399 {
                    fill: #ca742b;
                  }

                  .cls-400 {
                    fill: #c66b2a;
                  }

                  .cls-401 {
                    fill: #ca782a;
                  }

                  .cls-402 {
                    fill: #ca912b;
                  }

                  .cls-403 {
                    fill: #ca932c;
                  }

                  .cls-404 {
                    fill: #d18c2a;
                  }

                  .cls-405 {
                    fill: #d1892e;
                  }

                  .cls-406 {
                    fill: #d18f2a;
                  }

                  .cls-407 {
                    fill: #d18c3b;
                  }

                  .cls-408 {
                    fill: #ca722c;
                  }

                  .cls-409 {
                    fill: #ca712a;
                  }

                  .cls-410 {
                    fill: #d18229;
                  }

                  .cls-411 {
                    fill: #d1882a;
                  }

                  .cls-412 {
                    fill: #d0902a;
                  }

                  .cls-413 {
                    fill: #dea527;
                  }

                  .cls-414 {
                    fill: #df9d27;
                  }

                  .cls-415 {
                    fill: #deac35;
                  }

                  .cls-416 {
                    fill: #dda53b;
                  }

                  .cls-417 {
                    fill: #dda228;
                  }

                  .cls-418 {
                    fill: #de972a;
                  }

                  .cls-419 {
                    fill: #ddd6b2;
                  }

                  .cls-420 {
                    fill: #ddb027;
                  }

                  .cls-421 {
                    fill: #cc8f2b;
                  }

                  .cls-422 {
                    fill: #cc842a;
                  }

                  .cls-423 {
                    fill: #cc772a;
                  }

                  .cls-424 {
                    fill: #cc732a;
                  }

                  .cls-425 {
                    fill: #cbaf30;
                  }

                  .cls-426 {
                    fill: #d3a22c;
                  }

                  .cls-427 {
                    fill: #d38d2a;
                  }

                  .cls-428 {
                    fill: #d3862a;
                  }

                  .cls-429 {
                    fill: #d37529;
                  }

                  .cls-430 {
                    fill: #d28629;
                  }

                  .cls-431 {
                    fill: #d1ccb9;
                  }

                  .cls-432 {
                    fill: #d28f2a;
                  }

                  .cls-433 {
                    fill: #d27b2a;
                  }

                  .cls-434 {
                    fill: #c56a2d;
                  }

                  .cls-435 {
                    fill: #c56b2a;
                  }

                  .cls-436 {
                    fill: #c76a29;
                  }

                  .cls-437 {
                    fill: #c55f2a;
                  }

                  .cls-438 {
                    fill: #c7722b;
                  }

                  .cls-439 {
                    fill: #c6652d;
                  }

                  .cls-440 {
                    fill: #c5742a;
                  }

                  .cls-441 {
                    fill: #ad5230;
                  }

                  .cls-442 {
                    fill: #ae492d;
                  }

                  .cls-443 {
                    fill: #d58f29;
                  }

                  .cls-444 {
                    fill: #d58429;
                  }

                  .cls-445 {
                    fill: #d7852b;
                  }

                  .cls-446 {
                    fill: #d4ced2;
                  }

                  .cls-447 {
                    fill: #d5922a;
                  }

                  .cls-448 {
                    fill: #dd962c;
                  }

                  .cls-449 {
                    fill: #dca52a;
                  }

                  .cls-450 {
                    fill: #dcc926;
                  }

                  .cls-451 {
                    fill: #dcbf30;
                  }

                  .cls-452 {
                    fill: #e1b32a;
                  }

                  .cls-453 {
                    fill: #dc9f28;
                  }

                  .cls-454 {
                    fill: #dc9828;
                  }

                  .cls-455 {
                    fill: #dd9328;
                  }

                  .cls-456 {
                    fill: #d48929;
                  }

                  .cls-457 {
                    fill: #dac156;
                  }

                  .cls-458 {
                    fill: #d4882f;
                  }

                  .cls-459 {
                    fill: #d47c31;
                  }

                  .cls-460 {
                    fill: #da9428;
                  }

                  .cls-461 {
                    fill: #daa228;
                  }

                  .cls-462 {
                    fill: #da9628;
                  }

                  .cls-463 {
                    fill: #d9b231;
                  }

                  .cls-464 {
                    fill: #da812b;
                  }

                  .cls-465 {
                    fill: #d9a645;
                  }

                  .cls-466 {
                    fill: #e0dcc2;
                  }

                  .cls-467 {
                    fill: #e0a926;
                  }

                  .cls-468 {
                    fill: #e1a027;
                  }

                  .cls-469 {
                    fill: #e0a526;
                  }

                  .cls-470 {
                    fill: #d7a429;
                  }

                  .cls-471 {
                    fill: #d89a2f;
                  }

                  .cls-472 {
                    fill: #d89329;
                  }

                  .cls-473 {
                    fill: #d99128;
                  }

                  .cls-474 {
                    fill: #b04d2d;
                  }

                  .cls-475 {
                    fill: #b05a28;
                  }

                  .cls-476 {
                    fill: #ad4a2b;
                  }

                  .cls-477 {
                    fill: #ad482d;
                  }

                  .cls-478 {
                    fill: #ad4d2f;
                  }

                  .cls-479 {
                    fill: #ad4c2c;
                  }

                  .cls-480 {
                    fill: #ae3f32;
                  }

                  .cls-481 {
                    fill: #c67b2c;
                  }

                  .cls-482 {
                    fill: #e2b626;
                  }

                  .cls-483 {
                    fill: #e1c92b;
                  }

                  .cls-484 {
                    fill: #e2dfe0;
                  }

                  .cls-485 {
                    fill: #e1b025;
                  }

                  .cls-486 {
                    fill: #e2b424;
                  }

                  .cls-487 {
                    fill: #e1a226;
                  }

                  .cls-488 {
                    fill: #e1aa26;
                  }

                  .cls-489 {
                    fill: #e1aa28;
                  }

                  .cls-490 {
                    fill: #e1db5d;
                  }

                  .cls-491 {
                    fill: #e1b83a;
                  }

                  .cls-492 {
                    fill: #e1d123;
                  }

                  .cls-493 {
                    fill: #c97d2a;
                  }

                  .cls-494 {
                    fill: #c97529;
                  }

                  .cls-495 {
                    fill: #d77e29;
                  }

                  .cls-496 {
                    fill: #b15f29;
                  }

                  .cls-497 {
                    fill: #e09f26;
                  }

                  .cls-498 {
                    fill: #e09c27;
                  }

                  .cls-499 {
                    fill: #d79729;
                  }

                  .cls-500 {
                    fill: #e0cf27;
                  }

                  .cls-501 {
                    fill: #a94e2c;
                  }

                  .cls-502 {
                    fill: #a96337;
                  }

                  .cls-503 {
                    fill: #a96028;
                  }

                  .cls-504 {
                    fill: #ac4f2d;
                  }

                  .cls-505 {
                    fill: #ac4f2e;
                  }

                  .cls-506 {
                    fill: #953e29;
                  }

                  .cls-507 {
                    fill: #953c2a;
                  }

                  .cls-508 {
                    fill: #984427;
                  }

                  .cls-509 {
                    fill: #813e27;
                  }

                  .cls-510 {
                    fill: #9c5128;
                  }

                  .cls-511 {
                    fill: #9c5a34;
                  }

                  .cls-512 {
                    fill: #713423;
                  }

                  .cls-513 {
                    fill: #a34f2b;
                  }

                  .cls-514 {
                    fill: #6f4534;
                  }

                  .cls-515 {
                    fill: #a3392b;
                  }

                  .cls-516 {
                    fill: #963b28;
                  }

                  .cls-517 {
                    fill: #956b45;
                  }

                  .cls-518 {
                    fill: #964427;
                  }

                  .cls-519 {
                    fill: #703c28;
                  }

                  .cls-520 {
                    fill: #724939;
                  }

                  .cls-521 {
                    fill: #724932;
                  }

                  .cls-522 {
                    fill: #724934;
                  }

                  .cls-523 {
                    fill: #a44637;
                  }

                  .cls-524 {
                    fill: #a34c33;
                  }

                  .cls-525 {
                    fill: #a36928;
                  }

                  .cls-526 {
                    fill: #975530;
                  }

                  .cls-527 {
                    fill: #97332b;
                  }

                  .cls-528 {
                    fill: #974d29;
                  }

                  .cls-529 {
                    fill: #974a2b;
                  }

                  .cls-530 {
                    fill: #9a4628;
                  }

                  .cls-531 {
                    fill: #965a35;
                  }

                  .cls-532 {
                    fill: #96382a;
                  }

                  .cls-533 {
                    fill: #8a3e26;
                  }

                  .cls-534 {
                    fill: #9b5139;
                  }

                  .cls-535 {
                    fill: #9b4529;
                  }

                  .cls-536 {
                    fill: #893a26;
                  }

                  .cls-537 {
                    fill: #8a432b;
                  }

                  .cls-538 {
                    fill: #6d473a;
                  }

                  .cls-539 {
                    fill: #893f27;
                  }

                  .cls-540 {
                    fill: #894a2f;
                  }

                  .cls-541 {
                    fill: #893525;
                  }

                  .cls-542 {
                    fill: #893426;
                  }

                  .cls-543 {
                    fill: #89562d;
                  }

                  .cls-544 {
                    fill: #884a22;
                  }

                  .cls-545 {
                    fill: #9c3c2b;
                  }

                  .cls-546 {
                    fill: #704435;
                  }

                  .cls-547 {
                    fill: #70412f;
                  }

                  .cls-548 {
                    fill: #703d27;
                  }

                  .cls-549 {
                    fill: #63402f;
                  }

                  .cls-550 {
                    fill: #834428;
                  }

                  .cls-551 {
                    fill: #853324;
                  }

                  .cls-552 {
                    fill: #71401f;
                  }

                  .cls-553 {
                    fill: #633a2e;
                  }

                  .cls-554 {
                    fill: #613a2d;
                  }

                  .cls-555 {
                    fill: #753d2b;
                  }

                  .cls-556 {
                    fill: #76391d;
                  }

                  .cls-557 {
                    fill: #754630;
                  }

                  .cls-558 {
                    fill: #75493b;
                  }

                  .cls-559 {
                    fill: #7a3e23;
                  }

                  .cls-560 {
                    fill: #7a3c23;
                  }

                  .cls-561 {
                    fill: #78351f;
                  }

                  .cls-562 {
                    fill: #78392a;
                  }

                  .cls-563 {
                    fill: #783927;
                  }

                  .cls-564 {
                    fill: #7a3421;
                  }

                  .cls-565 {
                    fill: #794930;
                  }

                  .cls-566 {
                    fill: #794924;
                  }

                  .cls-567 {
                    fill: #7b3924;
                  }

                  .cls-568 {
                    fill: #7b391f;
                  }

                  .cls-569 {
                    fill: #722a21;
                  }

                  .cls-570 {
                    fill: #78442a;
                  }

                  .cls-571 {
                    fill: #793929;
                  }

                  .cls-572 {
                    fill: #793324;
                  }

                  .cls-573 {
                    fill: #844727;
                  }

                  .cls-574 {
                    fill: #764737;
                  }

                  .cls-575 {
                    fill: #764728;
                  }

                  .cls-576 {
                    fill: #7b462f;
                  }

                  .cls-577 {
                    fill: #833e25;
                  }

                  .cls-578 {
                    fill: #7b3f28;
                  }

                  .cls-579 {
                    fill: #7a4334;
                  }

                  .cls-580 {
                    fill: #7c2924;
                  }

                  .cls-581 {
                    fill: #7c351f;
                  }

                  .cls-582 {
                    fill: #7c2d24;
                  }

                  .cls-583 {
                    fill: #7c3620;
                  }

                  .cls-584 {
                    fill: #7c4325;
                  }
                </style>
              </defs>
              <path
                class="cls-538"
                d="M468.15,236.09c32.19,12.37,61.4,29.75,87.48,52.3,39.96,34.56,61.3,79.63,73.1,130,.28,1.21,.05,2.54,.05,3.82-.76,.06-1.52,.11-2.28,.17-3.85-1.84,.22-5.57-1.86-7.83-.3-5.77-.36-11.63-5.8-15.47l-.03-.05c-.45-3.26,1.32-6.96-1.95-9.65-3.33-1.07,.42-4.44-1.91-5.84-2.56-11.69-9.33-21.53-14.32-32.13-10.45-22.17-24.59-41.58-43.87-57-6.39-5.26-10.71-13.11-19.41-15.47-4.91-.48-7.27-4.18-9.73-7.74-1.93-2.56-4.65-3.58-7.72-3.89h-.01c-2.02-3.94-5.01-6.27-9.67-5.81l-.04-.03c-1.07-2.58-3.02-3.84-5.8-3.86-4.24-2.61-8.68-4.75-13.58-5.83-10.17-3.2-18.1-10.33-27.2-15.41,1.53-.1,3.05-.2,4.58-.3Z"
              ></path>
              <path
                class="cls-522"
                d="M23.28,633.54c-3.09-1.65-.64-6.29-4.17-7.7-4.44-9.97-4.18-20.71-3.94-31.13,.54-24.13-2.9-48.67,5.91-72.14,.1,3.41,.2,6.82,.3,10.22-.54,4.43-1.79,8.9-1.51,13.27,1.7,26.54,3.14,53.09,3.43,79.68,0,2.6,0,5.19-.01,7.79Z"
              ></path>
              <path
                class="cls-186"
                d="M133.96,36.49c.74,8.83,10.13,14.15,9.55,23.51-.9-.29-2.34-.33-2.62-.92-5.41-11.55-14.72-20.71-18.97-33.12-5.43-15.82-16.44-17.85-28.23-6.32-1.35,1.32-2.99,2.36-4.49,3.53,1.99-5.75,5.36-10.75,8.73-15.73,6.81-10.06,11.1-9.82,18.5,.13,3.35,4.5,15.01,23.8,17.53,28.92Z"
              ></path>
              <path
                class="cls-520"
                d="M468.15,236.09c-1.53,.1-3.05,.2-4.58,.3-9.39-.32-17.61-6.08-27.12-5.87-.64,0-1.29-.01-1.93-.02-1.88-1.15-3.68-3.12-5.66-3.32-16.21-1.61-31.86-7.21-48.43-6.32-9.01,.48-17.62-2.42-26.41-4.05-16.23-3.01-29.19-12.72-43.67-19.26-1.26-2.04-12.92-10.23-14.18-12.27,2.02,.93,14.69,7.68,16.43,8.98,24.2,18.08,51.87,24.06,81.54,25.49,25.39,1.23,50.27,6.67,74,16.35Z"
              ></path>
              <path
                class="cls-546"
                d="M638.17,463.03c.06,5.7,.12,11.41,.18,17.12-.08,5.29-.17,10.57-.25,15.86-9.91-23.59-8.46-48.97-11.61-73.62,.76-.06,1.52-.11,2.28-.17,3.13,13.61,6.26,27.21,9.39,40.82Z"
              ></path>
              <path
                class="cls-558"
                d="M143.52,59.99c.58-9.36-8.82-14.68-9.55-23.51,1.77,2.23,31.77,43.5,49.05,58.49,2.64,2.29,4.95,4.97,7.42,7.47-1.42,.07-2.84,.13-4.26,.2-1.31-1.27-2.61-2.53-3.92-3.8-1.56-3.25-3.72-5.72-7.66-5.88-3.25-1.97-6.5-3.94-9.75-5.91-4.49-8.17-14.89-11.5-17.42-21.27-1.3-1.93-2.6-3.86-3.89-5.8Z"
              ></path>
              <path
                class="cls-316"
                d="M48.14,1049.91c-16.66,14.27-24.09,14.24-34.81,9.29,.08-.85,.15-2.5,.23-3.35,2.5-.03,3.8-1.29,3.89-3.79,11.21,3.96,19.52-1.07,27.07-8.63,1.79-1.79,3.87-3.3,5.82-4.94,.4,3.41-2.83,5.05-3.79,7.8,.53,1.21,1.07,2.42,1.6,3.62Z"
              ></path>
              <path
                class="cls-576"
                d="M21.37,532.79c-.1-3.41-.2-6.82-.3-10.22,5.51-20.76,12.29-41.03,23.09-59.75,.8,.07,1.59,.14,2.39,.21,0,.64-.01,1.27,0,1.91-9.88,22.07-18.38,44.65-25.17,67.86Z"
              ></path>
              <path
                class="cls-574"
                d="M46.55,463.03c-.8-.07-1.59-.14-2.39-.21,3.43-11.49,9.65-21.59,16.19-31.45,3.93-5.92,9.6-19.65,11.53-26.49,.73,.01,0,6.44-.13,7.7-.14,5.99-2.34,11.41-5.36,16.35-6.88,11.22-14.91,21.75-19.84,34.1Z"
              ></path>
              <path
                class="cls-562"
                d="M293.34,183.38c4.48,2.56,15.77,12.11,17.03,14.15,.64,1.95,1.28,3.9,1.92,5.85-2,1.19-2.78,4.18-5.79,3.87,.3-3.73-1.11-6.95-3.29-9.8-3.44-4.49-8.02-8.37-9.87-14.07Z"
              ></path>
              <path
                class="cls-517"
                d="M48.14,1049.91c-.53-1.21-1.07-2.42-1.6-3.63,5.18-3.88,14.58-2.12,15.55-11.62,5.55,2.16,9.49-1.11,13.54-4,.08,.85,.15,1.7,.23,2.55-8.42,6.93-17.53,12.7-27.72,16.7Z"
              ></path>
              <path
                class="cls-227"
                d="M75.86,1033.21c-.08-.85-.15-1.7-.23-2.55,6.98-4.5,13.64-9.4,19.38-15.46,1.59-.06,3.04-.4,3.91-1.93,1.9-.12,3.79-.25,5.69-.37l.39,.83c-9.41,6.94-18.18,14.84-29.14,19.47Z"
              ></path>
              <path
                class="cls-579"
                d="M226.25,132.1c-.13,.82-16.85-4.62-16.97-3.81-5.78-4.52-17.33-21.11-23.11-25.64,1.42-.07,2.84-.13,4.26-.2,5.11,4.06,31.82,25.29,35.83,29.65Z"
              ></path>
              <path
                class="cls-214"
                d="M113.48,1004.61c.11,.71,8.76-5.55,8.87-4.84-2.91,2.48-13.5,12.95-17.35,13.97,0,0-.39-.83-.39-.83,2.72-3.1,4.14-7.78,8.87-8.29Z"
              ></path>
              <path
                class="cls-306"
                d="M168.69,989.98c-.6,0-1.19,.03-1.79,.07-5.86,0-11.71,0-17.57,0-1.59-.08-3.04-.42-3.86-1.98,3.21-2.04,6.18-4.16,10.47-3.97,14.05,.64,28.03-1.64,42.02-2.43,8.86-.5,18.46,.86,27.06-3.28,3.23,0,6.45,0,9.68,0,4.53,3.04,9.06,3.01,13.6,0,9.69,0,19.38,0,29.08,0,0,1.29,0,2.58,.01,3.88,0,.64,0,1.28,0,1.92-23.91,.02-47.82,.03-71.73,.05-12.75-.88-25.12,.74-36.95,5.75Z"
              ></path>
              <path
                class="cls-244"
                d="M277.38,984.18c0-.64,0-1.28,0-1.92,25.19,0,50.39-.02,75.58,0,7.39,0,14.5-1.37,21.42-3.87,10.05-.2,19.42-3.82,29.12-5.8,5.36,.93,10.25-1.89,15.49-1.96-1.94,1.84-3.88,3.68-5.82,5.52-11.47,3.38-47.37,9.45-47.37,9.45-27.83-.68-60.61-.75-88.44-1.43Z"
              ></path>
              <path
                class="cls-531"
                d="M277.38,984.18c27.83,.68,60.61,.75,88.44,1.43-4.13,1.28-73.02,3.13-86.58,2.54-1.91-.05-3.82-.11-5.73-.16-2.87-3.04-6.61-1.8-9.97-1.83-16.29-.13-32.59,0-48.88-.11-3.06-.02-6.47,1.05-9.01-1.83,23.91-.02,47.82-.03,71.73-.05Z"
              ></path>
              <path
                class="cls-441"
                d="M490.71,937.56c-1.93,1.32-3.86,2.65-5.79,3.97-2.57,0-5.14,.02-7.72,.03,.65-1.93,1.3-3.87,1.95-5.8,4.79,.69,6.82-3.24,9.69-5.75,7.55-10.04,18.52-15.44,29.09-21.39,1.87,2.56,.12,5.12,0,7.68-9.96,5.96-19.28,12.73-27.22,21.27Z"
              ></path>
              <path
                class="cls-305"
                d="M477.2,941.56c2.57,0,5.14-.02,7.72-.03-21.03,17.51-46.79,25.22-71.73,34.63,1.94-1.84,3.88-3.68,5.82-5.52,10.23-2.18,19.41-6.46,27.18-13.55,13.64,1.4,22.29-7.15,31.01-15.53Z"
              ></path>
              <path
                class="cls-214"
                d="M205.65,984.23c2.53,2.88,5.94,1.81,9.01,1.83,16.29,.1,32.59-.02,48.88,.11,3.37,.03,7.11-1.21,9.97,1.83-34.94,.45-69.93-1.53-104.81,1.99,11.83-5.01,24.2-6.63,36.95-5.75Z"
              ></path>
              <path
                class="cls-207"
                d="M114.22,1005.47c-4.73,.52-6.9,4.33-9.61,7.44-1.9,.12-3.79,.24-5.69,.37-.73-1.88-2.07-3.16-3.93-3.93,1.13-2.54,3.1-3.83,5.88-3.87,4.67,.52,7.63-1.84,9.67-5.74,1.3-.01,2.59-.02,3.89-.04,2.64,.03,5.28,.05,7.92,.08-2.71,1.9-5.42,3.8-8.13,5.7Z"
              ></path>
              <path
                class="cls-502"
                d="M145.47,988.07c.82,1.56,10.67,1.35,10.66,1.99-7.72,1.98-22.24,5.88-29.96,7.86-.04-1.34-.07-2.68-.11-4.03,1.95-1.93,3.89-3.87,5.84-5.8,4.53,3.74,9.04-.53,13.56-.03Z"
              ></path>
              <path
                class="cls-511"
                d="M529.63,909.8c-.6,.03-7.26,4.61-7.86,4.6,4.68-7.41,11.89-11.65,19.43-15.48l.05,.06c-1.96,2.48-3.92,4.96-5.88,7.45-3.94,2.65-1.81,.73-5.74,3.37Z"
              ></path>
              <path
                class="cls-313"
                d="M126.07,993.89c.04,1.34,.07,2.68,.11,4.03-1.28,.62-2.55,1.23-3.83,1.85-2.64-.03-5.28-.05-7.92-.08,3.24-3.21,7.19-5,11.64-5.8Z"
              ></path>
              <path
                class="cls-563"
                d="M626.5,422.38c3.15,24.66,1.7,50.03,11.61,73.62,1.6,10.85-1.21,21.55-2.67,32.03-.95,6.86,1.92,13.73-1.1,20.25-3.96-6.14-1.06-12.97-1.96-19.42,2.18-24.17-5.62-47.37-6.79-71.12-.56-11.46-7.67-20.56-7.28-32.27,.31-9.21,3.56-21.34-9.62-26.65-1.04-.42-1.18-3.42-1.47-5.26-.42-2.75,.81-5.88-1.99-8.04-2.27-1.4-1.87-3.7-1.96-5.83-1.6-11.05-7.87-19.92-13.56-29.07,0-4.52,0-9.04,0-13.56,3.73,2.74,3.28,7.57,5.47,11.03,7.26,11.45,8.05,26.5,19.76,35.45,2.32,1.39-1.42,4.77,1.91,5.84,.5,3.25-1.26,6.95,1.95,9.65,0,0,.03,.05,.03,.05,.55,5.67,1.64,11.15,5.8,15.47,2.09,2.26-1.98,5.98,1.86,7.83Z"
              ></path>
              <path
                class="cls-547"
                d="M614.94,383.55c-11.72-8.96-12.5-24-19.76-35.45-2.19-3.46-1.74-8.29-5.47-11.03-2.68-1.03-3.09-4.28-4.93-5.64-8.09-5.98-8.73-18.91-20.29-21.49-1.75-5.58-9.82-7.97-7.8-15.45l.06-.06c19.29,15.42,33.43,34.84,43.87,57,5,10.6,11.76,20.44,14.32,32.13Z"
              ></path>
              <path
                class="cls-519"
                d="M527.6,271.21c2.46,3.56,4.82,7.25,9.73,7.74,.65,1.29,1.3,2.58,1.94,3.87-1.94,0-3.88,0-5.82,0-8.46-2.22-17.99-3.42-22.87-11.43-4.86-7.99-10.93-11.1-19.79-9.9-.66-3.22-1.33-6.44-1.99-9.66l1.97-.03c4.9,1.09,9.34,3.22,13.58,5.83,.18,3.92,2.98,3.91,5.8,3.86,0,0,.04,.03,.04,.03,1.48,4.83,4.86,6.51,9.67,5.8,0,0,.01,0,.01,0,1.45,3.52,4.42,4.03,7.72,3.89Z"
              ></path>
              <path
                class="cls-188"
                d="M490.78,251.8c-.66,.01-1.31,.02-1.97,.03-6.46-.01-12.91-.02-19.37-.04-4.91-3.42-6.93-10.21-13.57-11.62-.19-3.52-3.02-3.27-5.4-4.2-4.66-1.83-10.45-.88-14.01-5.47,9.51-.21,17.72,5.55,27.12,5.87,9.1,5.08,17.03,12.21,27.2,15.41Z"
              ></path>
              <path
                class="cls-547"
                d="M539.28,282.82c-.65-1.29-1.3-2.58-1.94-3.87,8.71,2.36,13.02,10.22,19.41,15.47,0,0-.06,.06-.06,.06-9.65,1.85-11.78-7.53-17.41-11.67Z"
              ></path>
              <path
                class="cls-546"
                d="M624.63,414.55c-4.16-4.32-5.25-9.8-5.8-15.47,5.44,3.85,5.5,9.7,5.8,15.47Z"
              ></path>
              <path
                class="cls-547"
                d="M519.87,267.31c-4.82,.72-8.19-.97-9.67-5.8,4.66-.46,7.65,1.86,9.67,5.8Z"
              ></path>
              <path
                class="cls-547"
                d="M510.16,261.49c-2.82,.05-5.62,.06-5.8-3.86,2.78,.02,4.73,1.28,5.8,3.86Z"
              ></path>
              <path
                class="cls-546"
                d="M618.8,399.03c-3.2-2.7-1.45-6.4-1.95-9.65,3.27,2.69,1.5,6.39,1.95,9.65Z"
              ></path>
              <path
                class="cls-547"
                d="M527.6,271.21c-3.3,.14-6.27-.37-7.72-3.89,3.07,.31,5.78,1.33,7.72,3.89Z"
              ></path>
              <path
                class="cls-297"
                d="M632.38,528.86c.9,6.45-2,13.28,1.96,19.41-.35,9.74,3.13,19.21,1.96,29.01,0,1.31,0,2.61,.01,3.92-.06,3.75-.58,7.68,3.75,9.74,1.48,9.05,4.27,18.12,4.04,27.33,.56,6.85,.3,10.27,1.49,15.62,.28,1.26,.44,2.56,.49,3.85,.29,7.24-.31,13.53-.96,21.29-3.14,16.42-12.11,76.14-13.02,79.18-4.08,13.66-6.57,27.86-13.33,40.64-1.27,.64-2.55,1.28-3.82,1.92,1.24-8.56-5.61-16.48-1.96-25.23,5.88-1.89,5.11-7.11,5.82-11.59,4.4-4.44,6.91-9.86,8.88-15.74,7.74-23.12,9.52-47.32,12-71.23,1.32-12.72,2.89-26.15-1.47-38.98-2.15-8.93-.75-18.37-3.9-27.15,.76-14.37-4.67-27.99-5.08-42.31-.14-5.09,.62-10.93-2.6-15.77,2.39-.61,1-6.75,5.74-3.91Z"
              ></path>
              <path
                class="cls-182"
                d="M640.07,590.95c-5.83-7.33-6.08-32.93-5.73-42.67,3.02-6.51,.15-13.38,1.1-20.25,1.46-10.48,4.27-21.18,2.67-32.03,.08-5.29,.16-10.57,.25-15.86,2.85,16.17,4.97,32.4,1.29,48.68-1.01,4.48-1.09,8.89-1.32,13.37-1.43,11.66,.26,33.68,1.74,48.76Z"
              ></path>
              <path
                class="cls-529"
                d="M17.43,914.44c.67-1.93,1.34-3.86,2-5.79,7.25-4.07,5.49-11.09,5.74-17.45,3.24-9.7,7.45-26.38,9.75-38.76,2.94-3.21,2.82,3.24,0,0-.01-.65-.03-1.29-.04-1.94,0-3.87,0-7.75,0-11.62,.03-2.58,.06-5.15,.09-7.73,3.11-17.45,1.27-7.76,1.85-11.64-.38-5.59,1.76-10.55,3.95-15.49,1.92-.65,3.84-1.3,5.75-1.95,1.93,1.2,3.87,1.22,5.8,0,.67,3.87-1.55,8.23,1.95,11.62-.37,27.09-16.22,49.81-21.33,75.56-6.73,1.05-.98,5.25-1.95,7.75-6.43,10.08-6.31,22.48-11.62,32.96-.65,0-1.3,0-1.94,0,0-5.17,0-10.35,0-15.52Z"
              ></path>
              <path
                class="cls-187"
                d="M50.52,761.32c1.39-22.1-1.82-43.92-4.01-65.8,0-1.3,.01-2.6,.02-3.89,1.93,1.93,3.87,3.85,5.8,5.78,0,0,.04,.05,.04,.05,0,3.73-.67,7.72,3.85,9.65l.02,.02c2.26,9.63,8.23,18.52,5.76,29.1-2,8.56-6.8,16.26-7.72,25.15-1.25-.02-2.51-.04-3.76-.06Z"
              ></path>
              <path
                class="cls-184"
                d="M23.28,633.54c0-2.6,0-5.19,.01-7.79,5.52-1.71,6.33-6.93,5.24-10.69-3.41-11.82-.72-24.04-3.33-35.81,4.05-1,3.02-5.8,5.8-7.75,.01,3.23,.02,6.47,.03,9.7l.02,9.67c-.46,16.94,2.19,33.64,3.86,50.41-.54,4.07,2.13,10.07-5.83,9.67-3.29-5.35-5.15-11.17-5.8-17.4Z"
              ></path>
              <path
                class="cls-288"
                d="M54.28,761.38c.93-8.89,5.73-16.59,7.72-25.15,2.47-10.58-3.49-19.47-5.76-29.1,4.51,.06,6.64,3.48,6.97,6.85,1.54,15.38,1.55,30.76-1.98,45.96-3.25,13.98-10.43,27.13-8.91,42.12-1.94,1.21-3.87,1.19-5.8,0-.64-1.94-1.28-3.87-1.92-5.81-.22-5.56,3.2-10.2,3.95-15.52,1.62-6.54,5.94-12.28,5.73-19.36Z"
              ></path>
              <path
                class="cls-540"
                d="M29.08,650.94c7.96,.39,5.29-5.61,5.83-9.67,3.23,11.62,6.46,23.24,9.69,34.86-.97,5.37,1.84,10.27,1.94,15.5,0,1.3-.01,2.6-.02,3.89-7.89-14.05-13.64-28.94-17.44-44.59Z"
              ></path>
              <path
                class="cls-526"
                d="M17.43,914.44c0,5.17,0,10.35,0,15.52,0,.64,0,1.28-.03,1.92-5.27,2.18-4.39,9.45-9.64,11.64,.63-8.1,3.89-15.53,5.95-23.26,1.24-1.94,2.48-3.88,3.72-5.82Z"
              ></path>
              <path
                class="cls-540"
                d="M54.28,761.38c.21,7.08-4.11,12.82-5.73,19.36-.74-6.61,.92-12.98,1.96-19.42,1.26,.02,2.51,.04,3.76,.06Z"
              ></path>
              <path
                class="cls-526"
                d="M25.16,891.2c-.24,6.37,1.52,13.39-5.74,17.45,2.94-5.48,2.05-12.22,5.74-17.45Z"
              ></path>
              <path
                class="cls-540"
                d="M44.61,796.26c.64,1.94,1.28,3.87,1.92,5.81-1.92,.65-3.84,1.3-5.75,1.95,.26-3.08,1.29-5.79,3.83-7.75Z"
              ></path>
              <path
                class="cls-567"
                d="M25.2,579.24c2.61,11.77-.08,23.99,3.33,35.81,1.08,3.76,.28,8.98-5.24,10.69-.29-26.6-1.73-53.14-3.43-79.68-.28-4.37,.97-8.85,1.51-13.27,6.79-23.21,15.29-45.79,25.17-67.86,1.29,0,2.58,0,3.87,0-.22,2.87,.39,6.16-.8,8.55-9.43,18.85-13.22,39.44-18.15,59.59-1.18,4.83-7.91,5.52-6.15,10.87,3.9,11.82,.62,23.54-.11,35.31Z"
              ></path>
              <path
                class="cls-201"
                d="M83.27,40.63c.88-6.19,2.57-12.11,5.93-17.46,1.5-1.17,3.14-2.21,4.49-3.53,11.8-11.53,22.81-9.5,28.23,6.32,4.26,12.41,13.56,21.57,18.97,33.12,.27,.59,1.72,.62,2.62,.92,1.3,1.93,2.6,3.86,3.89,5.8-3.65,.28-6.33-.69-9.15-3.63-5.09-5.3-8.11-11.8-12.19-17.67,.49-5.64-7.02-5.46-7.56-10.31-.82-7.41-3.92-11.47-12.36-11.2-8.08,.25-13.79,2.24-15.17,11.03-.67,4.27-4.64,4.89-7.59,6.62h-.12Z"
              ></path>
              <path
                class="cls-577"
                d="M81.86,263.55c5.37,1.54,7.78-2.74,11.04-5.5,9.19-7.76,8.8-19.3,11.83-29.49,.65,0,1.29,0,1.94,0,0,.64,0,1.29,.01,1.93-.36,13.45,4.31,28.74-13.14,35.97-.22,.09-.3,.55-.44,.84-7.01,3.82-12.67,9.15-17.43,15.5-3.9,1.92-6.28,6.88-11.67,5.85l.02-3.88c2.47-3.97,17.01-20.04,17.85-21.22Z"
              ></path>
              <path
                class="cls-291"
                d="M64.01,284.77c0,1.29-.01,2.59-.02,3.88-6.73,7.22-9.32,16.85-14.4,25.06-4.01,6.49-4.79,14.07-1.13,21.42-.92,5.99,1.49,11.6,1.96,17.43-13.52-11.54-15.5-30.89-4.77-48.18,4.8-7.73,10.98-14.24,18.35-19.61Z"
              ></path>
              <path
                class="cls-555"
                d="M50.41,464.93c-1.29,0-2.58,0-3.87,0,0-.64,0-1.27,0-1.91,4.92-12.35,12.95-22.89,19.84-34.1,3.03-4.94,5.23-10.36,5.36-16.35,.04-1.26,.09-2.52,.13-3.78,2.62-2.13,1.56-5.11,1.83-7.79,4.05,5.07-.47,11.93,2.48,16.37,5.8,8.72,2.82,15.42-2.48,22.36-10.11,6.23-21.95,10.87-23.29,25.19h0Z"
              ></path>
              <path
                class="cls-180"
                d="M73.7,439.75c5.31-6.94,8.28-13.64,2.48-22.36-2.95-4.44,1.57-11.3-2.48-16.37-.59-.68-1.18-1.37-1.77-2.05,.56-6.85-4-12.59-4.16-19.29,3.11-.09,4.92,.64,6.17,4.28,1.8,5.25,3.52,10.81,7.48,15.11,.39,4.18-1.47,9.11,3.89,11.62,0,0,0,0,0,0,0,3.23,.01,6.45,.02,9.68,1.24,10.12-3.21,18.04-9.7,25.19-.07-2.13,.34-4.41-1.93-5.81Z"
              ></path>
              <path
                class="cls-257"
                d="M81.43,399.07c-3.96-4.3-5.67-9.86-7.48-15.11-1.25-3.64-3.06-4.37-6.17-4.28-2.6-8.3-10.09-13.51-13.48-21.31,2.58,1.3,5.16,2.6,7.74,3.9,2.59,3.23,5.18,6.46,7.77,9.69,9.84,11.23,14.52,25.02,19.4,38.73-1.29,0-2.59,0-3.88,.01,0,0,0,0,0,0-1.4-3.84-1.04-8.27-3.89-11.62Z"
              ></path>
              <path
                class="cls-243"
                d="M62.04,362.26c-2.58-1.3-5.16-2.6-7.74-3.9-1.29-1.93-2.58-3.87-3.87-5.8-.47-5.83-2.88-11.44-1.96-17.43,2.97-2.81,2.65-6.88,3.5-10.34,.92-3.77,2.33-5.52,6.15-5.16-1.76,5.82-8.95,11.65,.04,17.43,0,1.29,0,2.58,0,3.87-5.52,8.35,2.46,14.22,3.93,21.29l-.05,.03Z"
              ></path>
              <path
                class="cls-574"
                d="M71.94,398.96c.59,.68,1.18,1.37,1.77,2.05-.27,2.68,.79,5.66-1.83,7.79,.02-3.28,.04-6.56,.06-9.84Z"
              ></path>
              <path
                class="cls-553"
                d="M312.28,203.38c-.64-1.95-1.28-3.9-1.92-5.85,14.48,6.55,27.44,16.25,43.67,19.26,8.79,1.63,17.39,4.54,26.41,4.05,16.57-.89,32.22,4.71,48.43,6.32,1.98,.2,3.78,2.17,5.66,3.32-23.92,0-47.85,0-71.77,0,.4-4.87-2.33-6-6.58-5.86-2.81,.09-5.66,.44-8.4-1.3-8.47-5.39-18.1-7.83-27.7-10.28-.17-5.17-5.4-6.28-7.8-9.66Z"
              ></path>
              <path
                class="cls-512"
                d="M362.76,230.48c23.92,0,47.85,0,71.77,0,.64,.01,1.29,.02,1.93,.02,3.56,4.59,9.34,3.64,14.01,5.47,2.38,.93,5.21,.67,5.4,4.2-4.53,0-9.06,0-13.59,0-2.76-4-6.84-3.94-11.12-3.92-21.51,.1-43.02,.05-64.53,.04-1.29,0-2.59,0-3.88,0-5.05-9.49-14.03-4.59-21.34-5.82,1.29-1.29,2.59-2.58,3.88-3.87,6.25-.63,11.92,1.35,17.47,3.86Z"
              ></path>
              <path
                class="cls-281"
                d="M618.78,778.85c-2.47,9.69-24.04,60.08-30.92,65.62,7.91-7.97-5.86,5.96-6.02,6.07-2.6-3.42-3.92,.22-6.52-3.2l.83-.72c6.7,2.48,8.52-3.41,8.8-6.97,.6-7.47,4.29-13.83,7.93-19.17,5.78-8.49,7.25-16.97,6.51-26.56,3.43-2.71,2.01-6.72,5.44-9.43,5.05,1.95,8.76,.5,10.14-3.72,1.27-.64,2.55-1.28,3.82-1.92Z"
              ></path>
              <path
                class="cls-260"
                d="M7.77,943.53c5.25-2.2,4.37-9.46,9.64-11.64,.67,10.57-5.52,20.27-3.9,30.96-1.92,6.95-5.96,14.1-5.35,20.83,1.91,21.03-7.16,41.5-2.37,62.5-5.19-3.18-2.23-9.76-5.72-13.65-.02-1.25-.04-2.5-.06-3.75,2.01-26.93,3.99-53.86,6.08-80.79,.12-1.52,1.1-2.97,1.68-4.46Z"
              ></path>
              <path
                class="cls-572"
                d="M186.17,102.65c5.78,4.52,11.57,9.05,17.35,13.57,.14,.57,.21,1.14,.21,1.73,.63,1.99,1.26,3.98,1.88,5.98l-.02,.02c-6.3,1.06-9.88-5.11-15.51-5.81-7.47-4.19-14.67-8.45-20.6-15.08-5.31-5.94-8.79-14.47-18.18-15.91,0-.65,0-1.3,0-1.95,4.69-.62,9.08,.86,13.54,1.88,3.25,1.97,6.5,3.94,9.75,5.91,1.67,3.11,3.87,5.53,7.66,5.88,1.31,1.27,2.61,2.53,3.92,3.8Z"
              ></path>
              <path
                class="cls-578"
                d="M164.83,87.06c-4.46-1.02-8.85-2.5-13.54-1.88-.65-1.29-1.31-2.59-1.96-3.88,.23-2.97-.06-6.78-2.4-7.87-11.44-5.36-17.63-15.6-24.73-25.06,1.85-.74,3.14-2.03,3.88-3.87,4.07,5.87,7.1,12.37,12.19,17.67,2.82,2.94,5.5,3.91,9.15,3.63,2.53,9.77,12.94,13.1,17.42,21.27Z"
              ></path>
              <path
                class="cls-579"
                d="M182.25,98.85c-3.79-.36-6-2.77-7.66-5.88,3.94,.16,6.1,2.64,7.66,5.88Z"
              ></path>
              <path
                class="cls-559"
                d="M126.07,44.5c-.74,1.84-2.03,3.14-3.88,3.87-1.96-3.6-4.15-7.1-5.82-10.83-4.41-9.91-10.63-11.53-18.04-3.89-3.01,3.11-5.75,6.58-7.64,10.9-7.64,17.43-10.66,35.61-6.94,54.04,2.82,13.95,5.04,28.46,13.21,40.84-5.5,4.9,4.67,7.18,1.94,11.62-1.6,.05-3.05,.4-3.89,1.95-1.87-5.01-4.43-9.89-5.47-15.07-2.19-10.87-7.61-21.02-7.96-32.19-.3-9.64-2.1-18.96-4.03-28.3,.12-12.56,1.56-24.88,5.7-36.8,2.95-1.73,7.04-2.36,7.72-6.62,1.39-8.79,7.09-10.77,15.17-11.03,8.44-.26,11.54,3.8,12.36,11.2,.54,4.85,8.05,4.67,7.56,10.31Z"
              ></path>
              <path
                class="cls-548"
                d="M77.57,77.43c1.93,9.35,3.73,18.66,4.03,28.3,.35,11.18,5.77,21.32,7.96,32.19,1.04,5.18,3.6,10.05,5.47,15.07,.65,4.52,1.29,9.04,1.94,13.56-3.5,3.4-1.31,7.73-1.91,11.6l-.03,.02c-2.84-3.36-3.7-7.38-3.88-11.62h0c2.94-3.88,2.93-7.76,0-11.63-2.2-6.37-4.34-12.76-6.62-19.1-1.76-4.88-.28-11.4-6.94-13.83-.58-3.94-4.22-33.85-.03-44.58Z"
              ></path>
              <path
                class="cls-525"
                d="M5.78,1046.17c-4.79-20.99,4.28-41.46,2.37-62.5-.61-6.73,3.44-13.87,5.35-20.83,.66,0,1.32,.02,1.98,.02-.66,5.82-1.31,11.63-1.97,17.44-1.17,12.3-2.91,24.59-3.37,36.92-.45,12.05-4.19,25.13,7.29,34.82-.09,2.5-1.61,6.31-4.11,6.34-1.89-3.27-2.69-3.12-6.02-4.96,0-.65-1.53-6.61-1.53-7.27Z"
              ></path>
              <path
                class="cls-354"
                d="M17.44,1052.05c-11.48-9.69-7.74-22.77-7.29-34.82,.46-12.33,2.19-24.61,3.37-36.92,.65,.03,1.3,.06,1.94,.09,.15,13.18,.4,26.31-3.43,39.22-1,3.37-1.84,7.68,1.47,10.92,.13,2.17-.29,4.51,1.9,6.03-.29,8.14,2.94,12.62,11.76,11.3,1.91-1.31,3.82-2.62,5.73-3.93,2.89,.77,5.38-.31,7.81-1.67,3.65-1.22,5.18-6.19,9.86-5.59-.04,.61-.13,1.21-.25,1.81-1.95,1.64-4.03,3.15-5.82,4.94-7.55,7.56-15.86,12.58-27.07,8.63Z"
              ></path>
              <path
                class="cls-192"
                d="M50.33,1038.48c.12-.6,.2-1.2,.24-1.82,2.53-2,5.06-4,7.59-6,1.31,.03,2.63,.06,3.94,.09,0,1.3,0,2.6,0,3.9-.97,9.5-10.37,7.74-15.55,11.62,.96-2.75,4.19-4.39,3.79-7.8Z"
              ></path>
              <path
                class="cls-548"
                d="M104.73,228.56c-3.03,10.19-2.64,21.72-11.83,29.49-3.26,2.76-5.67,7.04-11.04,5.5,1.74-2.65,12.25-16.1,13.42-22.09,2.11-10.76,1.5-21.51,1.68-32.28,.16-10.38,.2-20.75-1.94-30.99,0,0,.03-.02,.03-.02,5.85,1.37,5.38,6.12,5.83,10.54,.79,7.75,.33,15.85,5.78,22.42,0,1.29,0,2.59,0,3.88-3.72,4.08-1.19,9.06-1.94,13.56Z"
              ></path>
              <path
                class="cls-35"
                d="M95.03,178.19c2.14,10.24,2.16,23.96,2,34.34-.6-.03-9.01-26.63-9.92-30.44-1.09-3.94-2.18-7.87-3.27-11.8,2.41-1.28,4.09-4,7.31-3.72,.18,4.25,1.03,8.26,3.88,11.62Z"
              ></path>
              <path
                class="cls-202"
                d="M190.09,118.13c5.63,.71,9.22,6.88,15.51,5.81,3.25,3.89,6.63,7.69,9.72,11.7,9.83,12.78,23.53,18.4,38.79,21.23,6.25,4.2,9.33,13.66,19.33,11.64,5.75,6.09,12.82,9.72,21.12,15.74,1.85,5.7,5.2,8.71,8.65,13.2,2.18,2.84,3.59,6.07,3.29,9.8,12.09,2.32,13.41,11.48,13.55,21.36,.06,3.86,0,7.72,0,11.58-3.71-2.33,.52-10.99-7.75-9.68-.65,0-1.29,0-1.94,0-1.97-4.77-7.38-8.21-4.42-14.93,1.01-2.3-1.31-6.01-5.27-6.38-4.31-14.79-12.4-22.86-23.28-23.25-5.43-.57-9.61-1.6-13.31-7.25-2.7-4.12-6.86-8.99-11.16-11.77-13.93-9.02-30.42-14.1-41.49-27.49-6.49-7.72-18.72-9.71-21.34-21.3Z"
              ></path>
              <path
                class="cls-572"
                d="M254.11,156.87c-15.26-2.83-28.96-8.45-38.79-21.23-3.09-4.02-6.47-7.81-9.72-11.7,0,0,.02-.02,.02-.02,1.98-.02,3.96-.04,5.94-.06,1.9,1.33,3.79,2.66,5.69,3.99,6.01,13.55,19.8,16.7,31.09,23.18,1.92,1.32,3.83,2.63,5.75,3.95,0,.63,.01,1.26,.01,1.9Z"
              ></path>
              <path
                class="cls-571"
                d="M247.17,152.52c-11.29-6.48-23.91-11.12-29.92-24.67,12.61,3.82,31.48,23.06,42.12,29.72,.09,.59-12.23-5.64-12.2-5.05Z"
              ></path>
              <path
                class="cls-571"
                d="M254.11,156.87c0-.63,0-1.26-.01-1.9,7.44,3.09,13.63,7.98,19.35,13.53-10.01,2.02-13.08-7.44-19.33-11.64Z"
              ></path>
              <path
                class="cls-511"
                d="M570.31,856.3c1.92-1.28,.42-11.31,2.34-12.6-.02,1.25,15.22-.48,15.2,.77-1.29,2.54-10.55,16.79-11.85,19.33-10.8,11.24-17.74,25.79-30.49,35.36-1.42-.06-7.93,5.98-10.14,7.27,0,0,5.83-7.5,5.83-7.5,8.48-15.56,21.08-28.13,31.05-42.61,.65,0-2.59-.01-1.94-.02Z"
              ></path>
              <path
                class="cls-571"
                d="M211.56,123.86c-1.98,.02-3.96,.04-5.94,.06-.63-1.99-1.26-3.98-1.88-5.98,3.8,.39,5.98,2.94,7.82,5.91Z"
              ></path>
              <path
                class="cls-554"
                d="M91.15,166.57c-3.21-.28-4.89,2.44-7.31,3.72-.24-.6-.38-1.22-.4-1.87-2.03-15.46-6.9-30.56-5.85-46.4,6.65,2.43,5.18,8.96,6.94,13.83,2.28,6.34,4.42,12.73,6.62,19.09,0,3.87,0,7.74,0,11.62h0Z"
              ></path>
              <path
                class="cls-262"
                d="M5.78,1046.17c0,.65,10.84,13.32,10.84,13.98-14.51-2.55-15.28-22.2-16.56-27.63,3.49,3.89,.53,10.47,5.72,13.65Z"
              ></path>
              <path
                class="cls-569"
                d="M320.05,240.18c0-3.86,.06-7.72,0-11.58-.14-9.87-1.46-19.03-13.55-21.36,3,.31,3.79-2.68,5.79-3.87,2.4,3.38,7.62,4.49,7.8,9.66,.16,2.14-.29,5.42,2.48,5.36,8.76-.19,14.53,7.3,22.73,8.23-1.29,1.29-2.59,2.58-3.88,3.87-.97,0-1.94-.05-2.9,.01-3.45,.22-7.23-1.56-7.74,5-.56,7.19,4.13,3.92,6.77,4.69,5.53,1.62,11.34-.45,17.05,1.63,3.9,1.42,7.76-.23,8.16-5.51,1.29,0,2.59,0,3.88,0,2.87,4.89-5.46,5.32-3.87,9.69-3.54,0-7.1,.22-10.63-.04-10.73-.81-22,2.74-32.04-3.83,0-.65-.02-1.3-.03-1.95Z"
              ></path>
              <path
                class="cls-543"
                d="M62.1,1034.66c0-1.3,0-2.6,0-3.9,1.26-.69,2.51-1.38,3.77-2.07,5.17-.63,9.15-3.08,11.72-7.68,2.7-2.77,5.28-5.74,9.6-5.87,2.61,.02,5.21,.04,7.82,.05-5.73,6.06-12.39,10.96-19.38,15.46-4.05,2.9-7.99,6.16-13.54,4Z"
              ></path>
              <path
                class="cls-534"
                d="M95.01,1015.2c-2.61-.02-5.21-.04-7.82-.05,.72-4.45,4.29-5.09,7.8-5.8,1.85,.76,3.19,2.04,3.93,3.93-.87,1.52-2.32,1.86-3.91,1.93Z"
              ></path>
              <path
                class="cls-250"
                d="M277.37,978.38c-9.69,0-19.38,0-29.08,0-.66-.02-1.32-.03-1.98-.05,6.46-5.02,14.93,1.22,21.38-3.82,14.32-.16,28.75,1.03,42.64-3.88,.66-.02,1.32-.03,1.97-.05,5.43,.01,10.87,.23,16.28-.03,4.51-.22,9.87,1.91,12.81-3.78,.64-.02,1.29-.03,1.93-.04,3.88-.58,8.2,1.55,11.62-1.88,7.11,0,14.23,0,21.34,0-3.79,3.5-8.52,.93-12.64,1.97-5.63,1.42-12.58-.74-16.46,5.73-13.33-.74-26.37,.45-38.79,5.82-10.35-.75-20.7-3.7-31.05,0Z"
              ></path>
              <path
                class="cls-501"
                d="M277.37,978.38c10.35-3.7,20.7-.76,31.05,0,21.99,0,43.98,.01,65.97,.02-6.92,2.5-14.03,3.88-21.42,3.87-25.19-.03-50.39,0-75.58,0,0-1.29,0-2.58-.01-3.88Z"
              ></path>
              <path
                class="cls-496"
                d="M145.47,988.07c-4.52-.5-9.03,3.77-13.56,.03,0,0-.05-.07-.05-.07,8.37-5.25,17.51-8.85,27.3-9.49,10.93-.71,21.94-.19,32.92-.2,10.98,.02,21.96,.04,32.94,.06-8.6,4.14-18.2,2.78-27.06,3.28-13.99,.79-27.96,3.07-42.02,2.43-4.29-.2-7.26,1.92-10.47,3.97Z"
              ></path>
              <path
                class="cls-377"
                d="M225.02,978.39c-10.98-.02-21.96-.04-32.95-.06,1.33-1.74,3.24-1.84,5.21-1.89,23.46-.64,46.92-1.3,70.39-1.96,0,0,.03,.04,.03,.04-6.45,5.04-14.93-1.2-21.38,3.82-3.87,.02-7.75,.03-11.62,.05-3.23,0-6.45,0-9.68,0Z"
              ></path>
              <path
                class="cls-496"
                d="M234.7,978.39c3.87-.02,7.75-.03,11.62-.05,.66,.02,1.32,.03,1.98,.05-4.53,3.01-9.06,3.03-13.6,0Z"
              ></path>
              <path
                class="cls-442"
                d="M374.39,978.4c-21.99,0-43.98-.01-65.97-.02,12.41-5.36,25.46-6.55,38.79-5.82,18.75,0,37.5-.01,56.25-.02l.05,.06c-9.7,1.98-19.07,5.6-29.12,5.8Z"
              ></path>
              <path
                class="cls-442"
                d="M446.19,957.1c-7.78,7.09-16.96,11.37-27.18,13.55-5.24,.06-10.13,2.88-15.49,1.96,0,0-.05-.06-.05-.06,.64-1.94,1.28-3.88,1.92-5.83,.03-.64,.04-1.28,.05-1.92,12.73,.69,23.93-4.08,34.91-9.69,1.94,.64,3.87,1.29,5.81,1.93l.04,.06Z"
              ></path>
              <path
                class="cls-379"
                d="M572.25,856.31c-9.96,14.49-22.56,27.05-31.05,42.61-7.54,3.82-14.75,8.07-19.43,15.48-1.28,.63-2.56,1.26-3.84,1.89,.12-2.56,1.87-5.12,0-7.68,11.97-13.94,26.84-25.51,34.89-42.65,3.74-6.54,9.4-11.91,11.72-19.31,4.91-.19,5.79-4.25,7.48-7.64,5.19-10.39,10.49-20.74,15.75-31.1-.02,2.79-.06,5.59,3.84,5.78-6.37,9.19-12.14,18.61-12.95,30.21-.07,.96-1.64,1.82-2.52,2.72,0,0-.02,.02-.02,.02-4.53,1.93-3.82,5.95-3.87,9.67Z"
              ></path>
              <path
                class="cls-386"
                d="M552.82,865.96c-8.04,17.14-22.92,28.71-34.89,42.65-10.57,5.95-21.54,11.35-29.09,21.39-2.58-.02-5.17-.04-7.75-.06-1.34-.03-2.69-.05-4.03-.08,1.8-3.04,4.02-5.5,7.85-5.8,19.28-9.14,34.87-22.81,48.76-38.8,5.92-6.82,10.73-14.9,19.16-19.29Z"
              ></path>
              <path
                class="cls-339"
                d="M477.2,941.56c-8.73,8.39-17.38,16.93-31.01,15.53,0,0-.04-.06-.04-.06,.68-3.19-1.93-8.18,2.76-9.2,10.82-2.36,19.45-9.85,30.23-12.09h.02c-.65,1.95-1.3,3.88-1.95,5.81Z"
              ></path>
              <path
                class="cls-339"
                d="M481.09,929.94c2.58,.02,5.17,.04,7.75,.06-2.88,2.52-4.91,6.45-9.69,5.76,0,0-.02-.01-.02-.01-2.17-2.89,.78-4.05,1.96-5.81Z"
              ></path>
              <path
                class="cls-335"
                d="M94.99,1009.35c-3.51,.71-7.08,1.35-7.8,5.8-4.32,.13-6.9,3.1-9.6,5.87-1.92,.03-3.85,.05-5.77,.08,0,0-.16-.21-.15-.21,9.02-9.05,20.95-13.87,31.09-21.29,.67,.05,1.34,.09,2.01,.14-1.3,1.91-2.6,3.82-3.89,5.73-2.78,.05-4.74,1.33-5.88,3.88Z"
              ></path>
              <path
                class="cls-496"
                d="M126.07,993.89c-4.45,.8-8.4,2.59-11.64,5.8-1.3,.01-2.59,.03-3.89,.04-1.28-.02-2.57-.03-3.85-.05,5.17-3.22,10.33-6.45,15.5-9.67,3.22-.66,6.45-1.32,9.67-1.98,0,0,.05,.07,.05,.07-1.95,1.93-3.89,3.87-5.84,5.8Z"
              ></path>
              <path
                class="cls-313"
                d="M106.69,999.68c1.28,.02,2.57,.03,3.85,.05-2.04,3.91-5,6.26-9.67,5.74,1.3-1.91,2.6-3.82,3.89-5.73,.64-.04,1.29-.06,1.93-.06Z"
              ></path>
              <path
                class="cls-551"
                d="M632.38,528.86c-4.74-2.84-3.35,3.3-5.74,3.91-2.43-3.58-2.02-7.66-2.03-11.66,2.2-14.46-3.8-28.22-3.67-42.55,.08-8.54-.48-17.2-4.07-25.25-2.53-12.13,4.37-24.86-6.83-37.14-5.66-6.2-8.85-19.5-4.81-30.64,2.79,2.16,1.56,5.29,1.99,8.04,.28,1.84,.43,4.85,1.47,5.26,13.18,5.3,9.94,17.44,9.62,26.65-.4,11.72,6.71,20.81,7.28,32.27,1.17,23.74,8.97,46.95,6.79,71.12Z"
              ></path>
              <path
                class="cls-204"
                d="M605.24,385.52c-4.03,11.14-.85,24.44,4.81,30.64,11.2,12.28,4.3,25.01,6.83,37.14-3.24-.62-6.47,2.15-9.71,0-2.35-4.18-2.41-8.55-1.18-13.07,2.25-8.32,2.54-16.95-1.47-24.47-6.46-12.11-4-25.5-7.03-38.02,1.93,.65,3.86,1.3,5.79,1.95,.09,2.13-.31,4.43,1.96,5.83Z"
              ></path>
              <path
                class="cls-583"
                d="M564.49,309.94c11.55,2.58,12.2,15.51,20.29,21.49,1.85,1.36,2.25,4.61,4.93,5.64,0,4.52,0,9.04,0,13.56-1.29-1.29-2.59-2.58-3.88-3.87-2.87-3.41-.41-9.49-5.83-11.63-6.91-8.45-13.82-16.89-21.82-24.38-1.81-1.69-3.49-3.79-3.4-6.62,4.29,.18,3.87,8.2,9.71,5.81Z"
              ></path>
              <path
                class="cls-551"
                d="M585.83,346.75c1.29,1.29,2.59,2.58,3.88,3.87,5.69,9.15,11.96,18.02,13.56,29.07-1.93-.65-3.86-1.3-5.79-1.95,0,0,0,0,0,0-.04-4.37,.63-9.15-5.81-9.68,0,0,0,0,0,0-.33-3.61,1.36-8.02-2.32-10.46-4.37-2.89-3.31-6.94-3.5-10.85Z"
              ></path>
              <path
                class="cls-568"
                d="M564.49,309.94c-5.83,2.4-5.42-5.62-9.71-5.81-8.51-3.25-13.05-11.94-21.32-15.51,0-1.29-.01-2.57-.02-3.86,0-.65,0-1.29,0-1.94,1.94,0,3.88,0,5.82,0,5.64,4.14,7.76,13.51,17.41,11.67-2.02,7.48,6.05,9.88,7.8,15.45Z"
              ></path>
              <path
                class="cls-203"
                d="M533.45,282.82c0,.65,0,1.29,0,1.94-12.25-.33-22.41-6.54-32.97-11.63-3.99-4.87-9.24-7.16-15.4-6.51-3.1,.33-4.74-.66-5.95-3.18,0-.65,0-1.29,0-1.94h.01c3.88-.67,7.77,3.13,11.65-.01,8.86-1.2,14.93,1.91,19.79,9.9,4.87,8.01,14.41,9.21,22.87,11.43Z"
              ></path>
              <path
                class="cls-556"
                d="M490.8,261.49c-3.88,3.14-7.77-.66-11.65,0-1.07-5.4-8.81-4.13-9.71-9.7,6.46,.01,12.91,.02,19.37,.04,.66,3.22,1.33,6.44,1.99,9.66Z"
              ></path>
              <path
                class="cls-185"
                d="M469.44,251.79c.9,5.57,8.64,4.3,9.71,9.7,0,0-.01,.01-.01,.01-2.86-.12-6.33,.82-8.22-1.76-7.87-10.77-19.36-10.18-30.56-9.74-7.37,.29-13.88-.86-19.41-5.94,7.14-1.11,14.62-.41,21.33-3.88,4.53,0,9.06,0,13.59,0,6.64,1.4,8.66,8.19,13.57,11.62Z"
              ></path>
              <path
                class="cls-199"
                d="M638.23,618.01c4.36,12.83,2.79,26.25,1.47,38.98-2.48,23.91-4.26,48.12-12,71.23-1.97,5.88-4.48,11.3-8.88,15.74-.05-1.6-.38-3.05-1.93-3.91,5.93-10.87,9.36-22.29,7.76-34.84,7.2-2.28,5.49-8.34,5.78-13.56,5.35-24.26,7.17-48.89,7.79-73.65Z"
              ></path>
              <path
                class="cls-363"
                d="M638.23,618.01c-.62,24.76-2.44,49.39-7.79,73.65-3.07,2.55-2.13,7.5-5.8,9.7,0-2.6-.02-5.19-.02-7.79,4.89-23.79,10.53-47.52,9.58-72.05-.4-10.22-2.63-20.34-1.8-30.64,.64,0,1.28-.01,1.92-.01,3.15,8.78,1.75,18.22,3.9,27.15Z"
              ></path>
              <path
                class="cls-352"
                d="M634.33,590.85c-.64,0-1.28,0-1.92,.01-4.06-4.62-2.58-10.75-2.49-15.6,.18-10.03-6.82-17.56-7.23-27.03-.1-9.42-2.17-18.42-5.79-27.09,1.55-.86,1.89-2.31,1.92-3.91,1.94,1.29,3.87,2.58,5.81,3.87,.01,4-.4,8.08,2.03,11.66,3.22,4.84,2.46,10.69,2.6,15.77,.41,14.32,5.84,27.94,5.08,42.31Z"
              ></path>
              <path
                class="cls-268"
                d="M614.96,780.77c-1.56,4.76-2.85,9.97-9.73,5.78-1.48-6.29-.77-12.32,1.27-18.47,1.98-5.96,3.1-12.21,4.6-18.33,2.24,1.41,1.84,3.68,1.9,5.8-3.65,8.74,3.2,16.67,1.96,25.23Z"
              ></path>
              <path
                class="cls-223"
                d="M613,755.55c-.07-2.12,.34-4.39-1.9-5.8,0,0-.03-.01-.03-.01-.69-4.81,5.89-5.25,5.83-9.68,1.55,.86,1.88,2.31,1.93,3.91-.71,4.48,.06,9.7-5.82,11.59Z"
              ></path>
              <path
                class="cls-182"
                d="M640.07,590.95c-4.34-2.06-3.81-5.99-3.75-9.74"
              ></path>
              <path
                class="cls-190"
                d="M44.59,676.13c-3.23-11.62-6.46-23.24-9.69-34.86-1.67-16.77-4.31-33.47-3.86-50.41,3.19-2.72,1.44-6.41,1.9-9.66,0,0,.01-.02,.01-.02,4.09-2.94-.22-8.68,3.88-11.61,1.15,8.12-1.97,15.91-1.89,23.91,.14,14.65,2.44,28.94,5.01,43.43,3.34,18.86,9.78,36.35,15.56,54.3,3.03,9.42,11.38,16.76,10.45,27.54,.41,6.99,.07,13.91,1.22,20.98,2.67,16.35-.33,32.62-3.2,48.77-5.61,3.78-6.54,9.32-5.83,15.47-3.07,2.53-1.41,6.94-3.87,9.71-3.5-3.4-1.28-7.75-1.95-11.62-1.52-14.99,5.66-28.14,8.91-42.12,3.53-15.2,3.52-30.58,1.98-45.96-.34-3.37-2.47-6.79-6.97-6.85,0,0-.02-.02-.02-.02-.03-3.72,.66-7.72-3.85-9.65,0,0-.04-.05-.04-.05-1-7.67-1.75-15.43-7.75-21.28Z"
              ></path>
              <path
                class="cls-333"
                d="M54.28,813.69c2.46-2.77,.8-7.18,3.87-9.71,0,0,.02,.02,.02,.02-.62,10.27-2.35,20.63-1.54,30.79,.72,8.99-8.01,14.7-6.19,23.45-5.73,14.32-11.96,28.47-17,43.03-2.76,7.98-7.17,15.77-6.28,24.76-1.95,4.54-3.9,9.07-5.85,13.61,.19-3.4-.09-6.7-1.94-9.69,5.31-10.48,5.19-22.87,11.62-32.96,2.86-2.03,1.69-5.07,1.95-7.75,5.11-25.75,20.96-48.47,21.33-75.56Z"
              ></path>
              <path
                class="cls-217"
                d="M19.37,929.96c1.86,2.99,2.13,6.29,1.94,9.69-.66,4.52-1.32,9.03-1.97,13.55-3.04,2.53-3.97,5.9-3.86,9.68h0c-.66-.01-1.32-.02-1.98-.03-1.62-10.69,4.57-20.39,3.9-30.96,.02-.64,.03-1.28,.03-1.92,.65,0,1.3,0,1.94,0Z"
              ></path>
              <path
                class="cls-526"
                d="M32.95,889.25c-.27,2.68,.9,5.72-1.95,7.75,.97-2.5-4.78-6.69,1.95-7.75Z"
              ></path>
              <path
                class="cls-288"
                d="M44.59,676.13c5.99,5.86,6.74,13.61,7.75,21.28-1.93-1.93-3.87-3.85-5.8-5.78-.11-5.24-2.91-10.13-1.94-15.5Z"
              ></path>
              <path
                class="cls-288"
                d="M52.37,697.46c4.51,1.93,3.83,5.93,3.85,9.65-4.52-1.93-3.86-5.92-3.85-9.65Z"
              ></path>
              <path
                class="cls-183"
                d="M25.2,579.24c.74-11.76,4.01-23.48,.11-35.31-1.76-5.34,4.97-6.03,6.15-10.87,4.93-20.15,8.72-40.74,18.15-59.59,1.19-2.39,.58-5.68,.8-8.55,0,0,0,0,0,0,1.94-.64,3.88-1.28,5.82-1.92,.88,8.11-2.21,15.55-3.88,23.23-14.78,26.5-21.67,54.97-21.36,85.24-2.78,1.96-1.75,6.75-5.8,7.75Z"
              ></path>
              <path
                class="cls-282"
                d="M31,571.49c-.31-30.27,6.58-58.74,21.36-85.24,.65,0,1.3,0,1.96,.01-.65,6.45-1.3,12.9-1.95,19.35l-.02,.02c-4.53,.3-5.82,3.14-5.82,7.18,0,2.83-.3,5.55-1.16,8.4-5.91,19.61-14.92,38.61-12.4,59.97,0,0-.01,.02-.01,.02-.64,0-1.28,0-1.91,0-.01-3.23-.02-6.47-.03-9.7Z"
              ></path>
              <path
                class="cls-197"
                d="M31.03,581.19c.64,0,1.28,0,1.91,0-.45,3.26,1.29,6.94-1.9,9.66,0-3.22-.01-6.45-.02-9.67Z"
              ></path>
              <path
                class="cls-541"
                d="M93.1,267.31c.14-.29,.21-.75,.44-.84,17.45-7.24,12.78-22.52,13.14-35.97,3.19-2.84,1.47-6.62,1.93-9.98,.29-2.12-.99-5.01,1.37-6.16,3.06-1.5,5.04,1.56,6.01,3.45,4.5,8.8,10.12,8.11,17.4,1.01-.49,3.2-1.26,4.86-.83,6.09,1.26,3.58,3.73,6.55,7.87,4.83,3.86-1.61,3.67-4.93,1.17-7.9-3.12-3.7-.93-8.95-3.88-12.65,8.63-.87,5.38,10.13,11.64,11.62h0c1.92,19.85-9.91,34.53-25.56,32.22,3.73,3.49,2.62,9.13,8.09,10.4-.65,.66-1.3,1.31-1.95,1.97-.64,.01-1.29,.02-1.93,.04-7.82,.18-16.31,12.11-23.47-1.43-.6-1.14-3.05,.01-4.28,1.12-2.07,1.87-4.52,2.32-7.17,2.19Z"
              ></path>
              <path
                class="cls-294"
                d="M137.71,209.19c2.95,3.7,.76,8.94,3.88,12.65,2.5,2.97,2.69,6.29-1.17,7.9-4.14,1.73-6.61-1.25-7.87-4.83-.43-1.23,.34-2.89,.83-6.09-7.28,7.1-12.9,7.78-17.4-1.01-.97-1.89-2.95-4.95-6.01-3.45-2.35,1.16-1.07,4.04-1.37,6.16-.46,3.36,1.25,7.14-1.93,9.98,0-.65,0-1.29,0-1.94,0-4.52,0-9.04,0-13.56,0-1.29,0-2.59,0-3.88-.82-14.84,1.96-29.84-1.95-44.55,.65-.64,1.31-1.29,1.96-1.93,5.95,1.51,10.18,4.59,11.49,11.11,1.06,5.27,2.09,10.75,4.4,15.53,3.44,7.12,2.68,18.27,15.14,17.91Z"
              ></path>
              <path
                class="cls-251"
                d="M58.12,319.63c-3.82-.35-5.23,1.4-6.15,5.16-.85,3.45-.53,7.53-3.5,10.34-3.66-7.35-2.88-14.93,1.13-21.42,5.08-8.21,7.66-17.84,14.4-25.06,5.39,1.04,7.77-3.93,11.67-5.85,1.93,0,3.86,0,5.79,0-1.36,3.57-6,5.16-5.82,9.66-2.42,2.54-5.33,4.76-7.15,7.67-3.9,6.23-10.75,10.98-10.36,19.5Z"
              ></path>
              <path
                class="cls-211"
                d="M81.45,282.81c-1.93,0-3.86,0-5.79,0,4.76-6.34,10.43-11.67,17.43-15.5,2.65,.13,5.1-.32,7.17-2.19,1.23-1.11,3.68-2.25,4.28-1.12,7.15,13.54,15.65,1.61,23.47,1.43,.64-.02,1.29-.03,1.93-.04-3.19,4.04-9.01,4.93-11.64,9.65-3.43,.69-7.15,.75-10.23,2.18-8.5,3.95-18.92-1.69-26.62,5.58Z"
              ></path>
              <path
                class="cls-561"
                d="M106.67,215c0,4.52,0,9.04,0,13.56-.65,0-1.29,0-1.94,0,.75-4.51-1.78-9.48,1.94-13.56Z"
              ></path>
              <path
                class="cls-564"
                d="M56.24,463.01c-1.94,.64-3.88,1.28-5.82,1.92,1.34-14.32,13.18-18.96,23.29-25.19,2.27,1.4,1.86,3.68,1.93,5.81-5.34,7.06-15.33,8.98-19.4,17.45Z"
              ></path>
              <path
                class="cls-226"
                d="M56.24,463.01c4.07-8.47,14.06-10.39,19.4-17.45,6.49-7.15,10.94-15.07,9.7-25.19,2.01,.41,1.91,7.14,5.8,1.94-.32,3.11-.09,6.08-1.34,9.3-6.17,15.96-17.59,28.64-26.61,42.76-2.5,3.92-3.96,9.46-8.87,11.89-.65,0-1.3,0-1.96-.01,1.67-7.68,4.76-15.13,3.88-23.23Z"
              ></path>
              <path
                class="cls-267"
                d="M91.14,422.31c-3.89,5.21-3.79-1.52-5.8-1.94,0-3.23-.01-6.45-.02-9.68,1.29,0,2.59,0,3.88-.01,1.3,1.94,2.59,3.88,3.89,5.82-.65,1.93-1.3,3.87-1.95,5.8Z"
              ></path>
              <path
                class="cls-267"
                d="M81.43,399.07c2.85,3.36,2.49,7.78,3.89,11.62-5.36-2.52-3.5-7.45-3.89-11.62Z"
              ></path>
              <path
                class="cls-545"
                d="M93.09,416.51c-1.3-1.94-2.59-3.88-3.89-5.82-4.87-13.71-9.56-27.51-19.4-38.73,1.93,.64,3.86,1.28,5.8,1.92,7.42,5.38,12.14,12.61,16.46,20.69,2.94,5.51-1.6,11.53,2.98,16.12-.01,1.3-.03,2.59-.04,3.89-.64,.64-1.28,1.29-1.91,1.93Z"
              ></path>
              <path
                class="cls-524"
                d="M75.6,373.88c-1.93-.64-3.86-1.28-5.8-1.92-2.59-3.23-5.18-6.46-7.77-9.69,0,0,.05-.03,.05-.03,2.58,0,5.15,0,7.73-.01,1.29,.67,2.59,1.33,3.88,2-.66,3.47,4.86,5.73,1.9,9.66Z"
              ></path>
              <path
                class="cls-231"
                d="M73.7,364.22c-1.29-.67-2.59-1.33-3.88-2-2.23-8-11.88-11.94-11.66-21.28,0-1.29,0-2.58,0-3.87-.14-8.27-.26-16.54,5.84-23.26,.02,1.29,.04,2.59,.06,3.88-2.42,14.68-1.17,28.2,9.47,40.12,3.67,4.1,8.42,6.75,11.78,11.09,2.54,3.28,6.21,5.73,6.34,10.44-8.23-2.38-10.56-11.74-17.94-15.12Z"
              ></path>
              <path
                class="cls-279"
                d="M64,313.81c-6.1,6.71-5.98,14.98-5.84,23.26-8.99-5.79-1.81-11.62-.04-17.43-.39-8.51,6.45-13.26,10.36-19.5,1.82-2.91,4.74-5.13,7.15-7.67,7.88-2.93,14.85-8.04,23.29-9.64-.65,1.28-1.31,2.55-1.96,3.83-3.88,1.95-7.77,3.9-11.65,5.85-10.6,3.61-17.72,10.69-21.3,21.3Z"
              ></path>
              <path
                class="cls-334"
                d="M58.16,340.94c-.21,9.33,9.43,13.28,11.66,21.28-2.58,0-5.15,0-7.73,.01-1.47-7.07-9.45-12.93-3.93-21.29Z"
              ></path>
              <path
                class="cls-34"
                d="M345.28,226.63c-8.2-.93-13.97-8.42-22.73-8.23-2.77,.06-2.32-3.22-2.48-5.36,9.6,2.45,19.23,4.9,27.7,10.28,2.74,1.74,5.58,1.4,8.4,1.3,4.25-.14,6.98,.99,6.58,5.86-5.55-2.51-11.22-4.49-17.47-3.86Z"
              ></path>
              <path
                class="cls-581"
                d="M442.27,240.18c-6.71,3.47-14.19,2.76-21.33,3.88-5.99-1.81-12.09-3.38-18.06-5.16-8.12-2.41-17.21-1.29-25.25,2.08-5.48,2.3-4.61,8.45-5.78,13.29-.61,2.52-2.84,4.14-5.22,5.28-3.58-3.86-4.46-8.5-3.88-13.55-1.58-4.38,6.74-4.8,3.87-9.69,21.51,0,43.02,.06,64.53-.04,4.28-.02,8.36-.08,11.12,3.92Z"
              ></path>
              <path
                class="cls-34"
                d="M362.74,236.31c-.4,5.27-4.26,6.92-8.16,5.51-5.71-2.08-11.52-.01-17.05-1.63-2.64-.77-7.33,2.5-6.77-4.69,.51-6.55,4.29-4.77,7.74-5,.96-.06,1.94-.01,2.9-.01,7.31,1.23,16.29-3.67,21.34,5.82Z"
              ></path>
              <path
                class="cls-236"
                d="M576.15,846.62c.88-.91,2.45-1.76,2.52-2.72,.81-11.6,6.57-21.02,12.95-30.21-.59-6.24,5.36-11.01,3.96-17.43,1.28-.65,2.56-1.29,3.85-1.94,.67,9.43-.84,17.8-6.54,26.17-3.64,5.34-7.33,11.7-7.93,19.17-.29,3.56-2.16,8.27-8.8,6.97Z"
              ></path>
              <path
                class="cls-206"
                d="M599.42,794.31c-1.28,.65-2.56,1.29-3.85,1.94,4.89-9.07,7.39-18.76,7.68-29.04,1.96-5.82,3.91-11.65,5.87-17.47,.65,0,1.29,0,1.94-.01,0,0,.03,.01,.03,.01-1.5,6.12-2.62,12.37-4.6,18.33-2.04,6.15-2.75,12.18-1.27,18.47-1.94,2.59-3.88,5.17-5.81,7.76Z"
              ></path>
              <path
                class="cls-236"
                d="M572.25,856.31c-.33-4.56,.12-8.44,4.65-10.37-.64,3.22-1.5,4.28-2.14,7.5-.74,.99-1.87,2.86-2.51,2.86Z"
              ></path>
              <path
                class="cls-542"
                d="M190.09,118.13c2.62,11.59,14.85,13.58,21.34,21.3-2.59,0-5.17,0-7.76,.01-1.94-4.24-8.52-2.6-9.72-6.57-3.3-10.89-13.48-13.28-21.31-18.61-4-2.41-8.94-3.43-11.65-7.77,.41-8.27-5.51-13.38-9.68-19.36,9.39,1.44,12.88,9.97,18.18,15.91,5.93,6.64,13.13,10.89,20.6,15.08Z"
              ></path>
              <path
                class="cls-507"
                d="M151.3,87.13c4.17,5.98,10.09,11.09,9.68,19.36-2.69-1.08-4.37-4.16-7.75-3.86-3.2-4.85-4.46-11.02-10.64-13.8-2.79-1.25-3.14-4.54-2.93-7.53,3.22,0,6.45,0,9.67,0,.65,1.29,1.31,2.59,1.96,3.88,0,.65,0,1.3,0,1.95Z"
              ></path>
              <path
                class="cls-221"
                d="M149.33,81.3c-3.22,0-6.45,0-9.67,0-2.96-5.86-5.3-12.19-11.66-15.5-2.69-10.23-13.15-15.45-16.65-25.45-.54-1.56-7.32-9.9-11-2.89-3.68,7.01-9.3,13.78-9.2,22.53-3.3,2.73-3.3,6.54-4,10.39-3.11,16.89,4.61,32.75,4.32,49.34-.04,2.01,1.74,3.34,3.58,4.21,.64,0,1.27,.01,1.91,.02-.42,5.59,1.78,10.53,3.89,15.49-1.29,0-2.58,0-3.88,0-8.17-12.38-10.39-26.89-13.21-40.84-3.73-18.44-.7-36.62,6.94-54.04,1.89-4.32,4.63-7.79,7.64-10.9,7.41-7.64,13.63-6.02,18.04,3.89,1.66,3.73,3.86,7.23,5.82,10.83,7.1,9.46,13.29,19.7,24.73,25.06,2.34,1.1,2.63,4.9,2.4,7.87Z"
              ></path>
              <path
                class="cls-582"
                d="M106.68,164.64c-.65,.64-1.31,1.29-1.96,1.93-2.59,0-5.17,0-7.76,0-.65-4.52-1.29-9.04-1.94-13.56,.84-1.55,2.29-1.9,3.89-1.95,1.94,1.3,3.88,2.59,5.82,3.89,.65,3.23,1.3,6.47,1.96,9.7Z"
              ></path>
              <path
                class="cls-225"
                d="M104.72,154.94c-1.94-1.3-3.88-2.59-5.82-3.89,2.73-4.43-7.44-6.72-1.94-11.62,1.29,0,2.58,0,3.88,0,1.94,.65,3.87,1.31,5.81,1.96,0,1.29,0,2.58-.01,3.87-3.21,2.71-1.44,6.41-1.92,9.67Z"
              ></path>
              <path
                class="cls-561"
                d="M96.96,166.56c2.59,0,5.17,0,7.76,0,3.91,14.71,1.13,29.71,1.95,44.55-5.45-6.56-4.99-14.67-5.78-22.42-.45-4.42,.02-9.17-5.83-10.54,.6-3.87-1.59-8.2,1.91-11.6Z"
              ></path>
              <path
                class="cls-35"
                d="M91.16,166.56c0-3.87,0-7.74,0-11.62,2.94,3.87,2.95,7.74,0,11.62Z"
              ></path>
              <path
                class="cls-324"
                d="M19.35,953.2c.66-4.52,1.32-9.03,1.97-13.55,1.95-4.54,3.9-9.07,5.85-13.61,3.29-3.19,1.31-9,5.78-11.6-.64,4.51-1.28,9.03-1.91,13.54-3.24,11.01-6.48,22.02-9.72,33.03-4.47,3.55-3.93,8.54-3.89,13.4-2.31,1.46-1.82,3.83-1.95,6-.65-.03-1.3-.06-1.94-.09,.66-5.81,1.31-11.63,1.97-17.44,0,0,0,0,0,0,3.07-2.52,4.03-5.88,3.86-9.68Z"
              ></path>
              <path
                class="cls-109"
                d="M15.41,1036.56c-2.19-1.52-1.76-3.86-1.9-6.02,.35-3.16-.1-6.7,1.19-9.4,5.1-10.62,8.58-21.22,4.82-33.15-.94-2.99,.69-6.18,1.5-9.3,2.71-10.42,7.8-20.25,8.05-31.29,.16-5.84,2.46-10.87,5.82-15.5,.65,0,1.3,.02,1.95,.02-1.58,5.04-2.42,10.17-1.96,15.47-5.74,20.33-14.61,40.08-11.58,62.05-.04,1.92-.07,3.84-.11,5.75-6.36,5.87-5.66,13.67-5.83,21.24-.65,.05-1.31,.1-1.96,.15Z"
              ></path>
              <path
                class="cls-453"
                d="M29.07,947.38c-.24,11.05-5.33,20.87-8.05,31.29-.81,3.12-2.44,6.31-1.5,9.3,3.76,11.93,.28,22.53-4.82,33.15-1.3,2.7-.84,6.25-1.19,9.4-3.32-3.24-2.47-7.55-1.47-10.92,3.82-12.9,3.58-26.04,3.43-39.22,.13-2.17-.36-4.54,1.95-6,4.65-1.82,3.76-5.92,3.95-9.57,2.57-5.82,5.13-11.63,7.7-17.45Z"
              ></path>
              <path
                class="cls-471"
                d="M58.16,1030.67c-2.53,2-5.06,4-7.59,6-4.68-.6-6.21,4.37-9.86,5.59-.34-3.36,2.63-5.05,3.88-7.61,5.85-2.39,11.01-5.1,14.17-11.42,1.94-3.88,5.93-7.31,11-8.13,.66,.04,1.31,.07,1.97,.11-1.28,1.93-2.55,3.87-3.83,5.8-1.69,4.79-7.63,5.29-9.74,9.65Z"
              ></path>
              <path
                class="cls-457"
                d="M15.41,1036.56c.65-.05,1.31-.1,1.96-.15,1.23-1.91,2.46-3.83,3.69-5.74,.11,1.9,.21,3.81,.32,5.71-1.19,5.4,1.47,8.86,5.79,11.48-8.82,1.32-12.05-3.16-11.76-11.3Z"
              ></path>
              <path
                class="cls-100"
                d="M27.17,1047.86c-4.32-2.62-6.98-6.08-5.79-11.48,.53,.11,1.04,.28,1.53,.51,.56,6.3,3.88,6.75,8.43,3.75,2.36-1.55,4.03-4.2,7.26-4.29-1.9,2.52-3.8,5.05-5.7,7.57-1.91,1.31-3.82,2.62-5.73,3.93Z"
              ></path>
              <path
                class="cls-165"
                d="M32.9,1043.93c1.9-2.52,3.8-5.05,5.7-7.57,0,0,.03,.04,.03,.04,1.94-1.28,3.88-2.55,5.82-3.83,.04,.69,.09,1.38,.13,2.08-1.25,2.56-4.22,4.24-3.88,7.61-2.43,1.36-4.92,2.45-7.81,1.67Z"
              ></path>
              <path
                class="cls-335"
                d="M58.16,1030.67c2.11-4.36,8.06-4.86,9.74-9.65,1.25-.04,2.5-.09,3.76-.13,0,0,.16,.21,.15,.21-1.98,2.53-3.97,5.06-5.95,7.6-1.26,.69-2.51,1.38-3.77,2.07-1.31-.03-2.63-.06-3.94-.09Z"
              ></path>
              <path
                class="cls-235"
                d="M277.39,185.94c10.88,.39,18.97,8.46,23.28,23.25-1.6,7.39,1.51,15.67-4.76,22.23-5.03,5.26-3.41,9.6,2.82,12.64-2.52,1.85-4.82,4.2-7.61,5.45-7.62,3.41-13.04,10.24-21.15,12.91-5.58,1.84-9.91-.79-12.7-4.29-1.78-2.24-4.12-7.15,.72-10.19,1.79,4.66,17.6,8.74,21.01,5.22,2.05-2.11,.26-4.88-.11-7.24-.32-2.02-1.92-3.45-4.25-1.92-5.08,3.33-11.38,1.45-16.65,3.94,1.94-2.58,3.89-5.17,5.83-7.75,7.09,1.17,13.18-3.18,20.12-3.67,4.48-.32,7.55-4.43,6.81-10.03-.8-6.12-.62-12.11,4.37-16.87,1.46-1.39,2.1-4.8,.47-4.91-8.16-.57-9.88-11.25-18.21-11.02-1.77-2.58-1.77-5.16,0-7.74Z"
              ></path>
              <path
                class="cls-290"
                d="M277.39,185.94c-1.77,2.58-1.77,5.16,0,7.74-5.61-.75-11.39-1.06-15.51-5.8-3.56-1.41-4.52-7.14-9.71-5.82-2.64-9.93-6.04-18.93-19.39-15.49-3.23-.65-6.47-1.3-9.7-1.95,.44-4.57,.02-7.74-4.04-11.88-4.83-4.94-11.23-7.81-15.36-13.3,2.59,0,5.17,0,7.76-.01,11.07,13.38,27.56,18.47,41.49,27.49,4.3,2.78,8.45,7.65,11.16,11.77,3.7,5.65,7.88,6.68,13.31,7.25Z"
              ></path>
              <path
                class="cls-219"
                d="M298.73,244.05c-6.23-3.04-7.85-7.38-2.82-12.64,6.27-6.55,3.16-14.83,4.76-22.23,3.97,.37,6.29,4.08,5.27,6.38-2.96,6.72,2.45,10.16,4.42,14.93-4.78,2.41-4.15,8.43-7.76,11.62-.83,1.56-2.28,1.9-3.88,1.94Z"
              ></path>
              <path
                class="cls-295"
                d="M302.6,242.12c3.61-3.19,2.98-9.21,7.76-11.62,.65,0,1.29,0,1.94,0-3.67,8.09,2.11,10.78,7.75,13.56,.23,7.59,2.38,12.93,11.77,11.77,4.08-.5,8.48,.27,9.58,5.67-4.32-.59-8.32,.86-12.12,2.41-6.61,2.7-9.15,1.29-9.41-6.27-.38-11.42-4.5-14.63-17.28-15.52Z"
              ></path>
              <path
                class="cls-219"
                d="M320.06,244.06c-5.64-2.77-11.42-5.47-7.75-13.56,8.27-1.31,4.04,7.35,7.75,9.68,0,.65,.02,1.3,.03,1.94-.01,.64-.02,1.29-.02,1.93Z"
              ></path>
              <path
                class="cls-580"
                d="M320.06,244.06c0-.64,.01-1.29,.02-1.93,10.04,6.57,21.31,3.02,32.04,3.83,3.52,.27,7.08,.04,10.63,.04-.58,5.05,.3,9.68,3.88,13.55-.64,.65-1.28,1.3-1.92,1.95-7.77,0-15.53,0-23.3,0-1.1-5.4-5.5-6.17-9.58-5.67-9.39,1.15-11.54-4.18-11.77-11.77Z"
              ></path>
              <path
                class="cls-192"
                d="M65.87,1028.69c1.98-2.53,3.97-5.06,5.95-7.6,1.92-.03,3.85-.05,5.77-.08-2.57,4.6-6.55,7.05-11.72,7.68Z"
              ></path>
              <path
                class="cls-304"
                d="M343.35,966.74c-.64,0-1.29,.02-1.93,.04-9.87-.03-19.83-.76-29.1,3.81-.66,.02-1.32,.03-1.97,.05-5.16,0-10.32,0-15.48,0,2.93-4.09,8.62,.16,11.59-3.82,27.53-3.33,55.12-6.25,82.57-10.16,12.81-1.83,26.05-2.73,37.81-9.23,2.58-.66,5.15-1.31,7.73-1.97,4.38,.22,8.54-.22,11.65-3.84,.62-.04,1.24-.09,1.86-.14,1.95,.04,3.9,.09,5.85,.13-4.62,4.08-11.24,4.94-15.49,9.62-16.8,1.26-32.82,5.71-48.51,11.61-4.46,.84-9.44-1.72-13.47,2l-.13,.02c-7.11,0-14.23,0-21.34,0-3.89,.55-8.21-1.58-11.62,1.88Z"
              ></path>
              <path
                class="cls-293"
                d="M405.38,966.72c-.64,1.94-1.28,3.88-1.92,5.83-18.75,0-37.5,.01-56.25,.02,3.88-6.46,10.83-4.3,16.46-5.73,4.12-1.04,8.85,1.54,12.64-1.97,0,0,.13-.02,.13-.02,9.48,3.18,19.27,1.53,28.93,1.87Z"
              ></path>
              <path
                class="cls-377"
                d="M294.86,970.64c5.16,0,10.32,0,15.48,0-13.88,4.91-28.32,3.72-42.64,3.88,0,0-.03-.04-.03-.04,8.61-4.51,18.55,.42,27.19-3.84Z"
              ></path>
              <path
                class="cls-377"
                d="M312.32,970.6c9.26-4.57,19.23-3.85,29.1-3.81-2.95,5.69-8.3,3.56-12.81,3.78-5.42,.26-10.85,.04-16.28,.03Z"
              ></path>
              <path
                class="cls-377"
                d="M343.35,966.74c3.42-3.46,7.74-1.33,11.62-1.88-3.42,3.42-7.74,1.3-11.62,1.88Z"
              ></path>
              <path
                class="cls-390"
                d="M294.86,970.64c-8.64,4.26-18.58-.66-27.19,3.84-23.46,.66-46.92,1.32-70.39,1.96-1.97,.05-3.88,.15-5.21,1.89-10.98,.01-21.99-.5-32.92,.2-9.79,.63-18.92,4.23-27.3,9.49-3.22,.66-6.45,1.32-9.67,1.98,1.32-3.37,4.71-4.05,7.38-5.66,8.51-5.13,18.83-5.19,27.52-9.82,5.74-3.2,12.13-2.54,18-1.66,27.67,4.15,55.07-.02,82.55-1.86,16.29-1.09,32.55-2.77,48.82-4.19-2.97,3.97-8.66-.28-11.59,3.82Z"
              ></path>
              <path
                class="cls-376"
                d="M389.91,962.85c15.68-5.9,31.71-10.35,48.51-11.61,.64,1.29,1.28,2.58,1.91,3.87-10.97,5.61-22.18,10.38-34.91,9.69-4.76-3.88-10.37-1.04-15.51-1.95Z"
              ></path>
              <path
                class="cls-327"
                d="M440.33,955.11c-.64-1.29-1.28-2.58-1.91-3.87,4.25-4.68,10.87-5.54,15.49-9.62,2.62-1.93,5.24-3.87,7.86-5.8,2.39-.14,3.69-1.42,3.95-3.78,1.24-.71,2.49-1.43,3.73-2.14,2.54-.01,5.07-.02,7.61-.04,1.34,.03,2.69,.05,4.03,.08-1.18,1.76-4.13,2.92-1.96,5.81-10.77,2.24-19.4,9.72-30.23,12.09-4.69,1.02-2.08,6.01-2.76,9.2-1.94-.64-3.87-1.29-5.81-1.93Z"
              ></path>
              <path
                class="cls-375"
                d="M389.91,962.85c5.14,.91,10.75-1.93,15.51,1.95,0,.64-.02,1.28-.05,1.92-9.66-.34-19.46,1.32-28.94-1.87,4.04-3.72,9.01-1.15,13.47-2Z"
              ></path>
              <path
                class="cls-361"
                d="M587.77,807.91c-5.26,10.36-10.56,20.7-15.75,31.1-1.69,3.39-2.57,7.45-7.48,7.64,1-2.73,4.17-4.41,3.81-7.8-.58-7.22,5.66-11.4,7.8-17.41,3.06-2.53,4.01-5.89,3.84-9.7,1.18-2.96,2.54-5.86,3.5-8.89,3.37-10.59,10.61-19.96,10.11-31.78,4.83-9.78,5.7-20.54,7.77-31.01,7.24-6.07,7.65-14.99,9.72-23.22,1.28-1.3,2.56-2.6,3.84-3.9-.25,8.35-3.97,15.81-6.08,23.68-3.08,11.49-9.8,21.98-9.45,34.42-5.61,11.74-8.45,24.36-11.63,36.86Z"
              ></path>
              <path
                class="cls-438"
                d="M568.35,838.85c.35,3.39-2.81,5.07-3.81,7.8-2.32,7.4-7.98,12.78-11.72,19.31-8.43,4.39-13.23,12.48-19.16,19.29-13.89,15.99-29.47,29.67-48.76,38.8,.65-1.29,1.29-2.58,1.94-3.87,.03-.62,.06-1.24,.07-1.86,22.26-10.1,37.87-27.69,52.39-46.5,3.99-2.48,7.17-5.76,9.67-9.71,4.76-.68,6.13-5.18,8.59-8.16,3.93-4.75,4.51-11.93,10.78-15.11Z"
              ></path>
              <path
                class="cls-505"
                d="M587.77,807.91c3.19-12.51,6.03-25.12,11.63-36.86,1.28-1.28,2.56-2.56,3.85-3.83-.29,10.28-2.8,19.97-7.68,29.04,1.41,6.43-4.55,11.19-3.95,17.43-3.9-.19-3.86-2.99-3.84-5.78Z"
              ></path>
              <path
                class="cls-405"
                d="M486.84,920.19c-.65,1.29-1.29,2.58-1.94,3.87-3.83,.3-6.05,2.76-7.85,5.8-2.54,.01-5.07,.02-7.61,.04,4.52-3.21,9.05-6.42,13.58-9.64,1.27-.02,2.55-.05,3.82-.07Z"
              ></path>
              <path
                class="cls-397"
                d="M157.09,974.53c-8.69,4.63-19.01,4.69-27.52,9.82-2.67,1.61-6.06,2.29-7.38,5.66-5.17,3.23-10.33,6.45-15.5,9.67-.64,0-1.29,.01-1.93,.06-.67-.05-1.34-.09-2.01-.14,.66-1.25,1.32-2.51,1.98-3.76,9.7-5.82,19.4-11.65,29.09-17.47,8.1,.79,15.05-5.37,23.27-3.84Z"
              ></path>
              <path
                class="cls-299"
                d="M104.73,995.84c-.66,1.25-1.32,2.51-1.98,3.76-10.14,7.42-22.07,12.23-31.09,21.29-1.25,.04-2.51,.09-3.76,.13,1.28-1.93,2.55-3.87,3.83-5.8,7.17-5.12,15.43-8.72,21.4-15.48,3.86-1.3,7.73-2.59,11.59-3.89Z"
              ></path>
              <path
                class="cls-527"
                d="M624.62,521.11c-1.94-1.29-3.87-2.58-5.81-3.87-.12-6.7,2.06-14.85-2.98-19.45-6.16-5.63-7.14-12.3-8.68-19.31,.22-8.45-3.13-16.63-1.93-25.16,.65,0,1.3,0,1.95,0,3.24,2.14,6.47-.63,9.71,0,3.59,8.06,4.15,16.71,4.07,25.25-.13,14.33,5.87,28.09,3.67,42.55Z"
              ></path>
              <path
                class="cls-532"
                d="M607.17,453.31c-.65,0-1.3,0-1.95,0-5.09-5.52-2.92-12.84-4.76-19.16-3.93-13.48-8.47-26.63-7.29-41.27,.73-9.07-4.06-16.89-13.13-20.94-1.3-1.3-2.6-2.6-3.91-3.9,.46-10.77-8.39-19.79-5.82-30.96,7.11,10.33,14.22,20.65,21.33,30.98,0,0,0,0,0,0,1.94,3.23,3.88,6.45,5.81,9.68,0,0,0,0,0,0,3.04,12.52,.57,25.91,7.03,38.02,4.01,7.52,3.72,16.15,1.47,24.47-1.22,4.53-1.17,8.89,1.18,13.07Z"
              ></path>
              <path
                class="cls-536"
                d="M533.46,288.62c8.27,3.57,12.81,12.26,21.32,15.51-.09,2.83,1.59,4.93,3.4,6.62,8.01,7.48,14.92,15.92,21.82,24.38-5.97,.13-9.75-2.84-13.04-7.75-2.83-4.23-4.27-10.03-10.23-11.63-4.53-3.88-9.06-7.75-13.59-11.63-6.96-2.86-10.95-7.94-11.63-15.5,.65,0,1.3,0,1.95,0Z"
              ></path>
              <path
                class="cls-254"
                d="M556.74,315.75c5.95,1.6,7.39,7.4,10.23,11.63,3.29,4.91,7.06,7.88,13.04,7.75,5.42,2.14,2.96,8.21,5.83,11.63,.19,3.91-.87,7.96,3.5,10.85,3.68,2.43,1.99,6.84,2.32,10.46-7.11-10.33-14.22-20.65-21.33-30.98-1.94-.66-3.88-1.31-5.82-1.97,1.94-8.26-6.12-12.52-7.76-19.35Z"
              ></path>
              <path
                class="cls-254"
                d="M597.48,377.74c-1.94-3.23-3.88-6.45-5.81-9.68,6.44,.53,5.78,5.31,5.81,9.68Z"
              ></path>
              <path
                class="cls-539"
                d="M533.46,288.62c-.65,0-1.3,0-1.95,0-4.53,.96-9.05-1.89-13.58,0-.65,0-1.29-.01-1.94-.02-3.01-6.76-11.64-6.01-15.53-11.6,2.17-1.29,.17-2.58,0-3.87,10.56,5.1,20.72,11.31,32.97,11.63,0,1.29,.01,2.57,.02,3.86Z"
              ></path>
              <path
                class="cls-533"
                d="M364.71,261.5c.64-.65,1.28-1.3,1.92-1.95,2.38-1.14,4.61-2.77,5.22-5.28,1.17-4.84,.29-10.99,5.78-13.29,8.04-3.37,17.13-4.49,25.25-2.08,5.98,1.78,12.07,3.34,18.06,5.16,5.52,5.08,12.04,6.23,19.41,5.94,11.2-.44,22.69-1.03,30.56,9.74,1.89,2.58,5.36,1.64,8.22,1.76,0,.65,0,1.29,0,1.94-2.58,0-5.17,0-7.75,0-6.78-1.78-14.03-2.17-20.18-5.82-11.18-6.64-24.54-4.3-36.07-9.06-11.44-4.73-27.72-1.83-36.86,7.14-5.37-.03-7.57,7.3-13.56,5.81Z"
              ></path>
              <path
                class="cls-292"
                d="M471.39,263.44c2.58,0,5.17,0,7.75,0,1.21,2.52,2.85,3.5,5.95,3.18,6.15-.65,11.41,1.64,15.4,6.51,.16,1.29,2.16,2.59,0,3.87-2.58,0-5.17,0-7.75,0-5.71-6.71-15.68-6.76-21.33-13.56Z"
              ></path>
              <path
                class="cls-367"
                d="M611.07,749.73c-.65,0-1.29,0-1.94,.01-1.65-7.72,2.96-14.28,4.61-21.27,1.93-8.17,7.11-15.57,10.88-23.3l.05,.04c1.6,12.54-1.83,23.97-7.76,34.84,.06,4.43-6.53,4.87-5.83,9.68Z"
              ></path>
              <path
                class="cls-367"
                d="M624.64,701.35c3.67-2.2,2.73-7.14,5.8-9.7-.29,5.22,1.42,11.28-5.78,13.56,0,0-.05-.04-.05-.04,.01-1.27,.02-2.55,.03-3.82Z"
              ></path>
              <path
                class="cls-258"
                d="M622.68,548.24c.41,9.47,7.41,17,7.23,27.03-.09,4.85-1.57,10.98,2.49,15.6-.83,10.3,1.4,20.43,1.8,30.64,.95,24.53-4.68,48.25-9.58,72.05-2.94,3.52-3.3,9.57-9.61,9.78,9.51-24.28,14-49.15,14.03-75.53,.04-26.56-3.86-52.14-10.1-77.65,.61-.65,1.22-1.3,1.83-1.95,.63,.03,1.27,.04,1.91,.03Z"
              ></path>
              <path
                class="cls-311"
                d="M615.01,703.34c6.31-.21,6.67-6.26,9.61-9.78,0,2.6,.01,5.19,.02,7.79-.01,1.28-.02,2.55-.03,3.82-3.77,7.73-8.95,15.13-10.88,23.3-1.65,6.99-6.26,13.55-4.61,21.27-1.96,5.82-3.91,11.65-5.87,17.47-1.28,1.28-2.57,2.56-3.85,3.83-.35-12.44,6.38-22.93,9.45-34.42,2.11-7.87,5.83-15.34,6.08-23.68,.96-2.59,3.57-5.17,0-7.76,.03-.62,.05-1.23,.08-1.85Z"
              ></path>
              <path
                class="cls-280"
                d="M622.68,548.24c-.64,0-1.27,0-1.91-.03,.53-4.73-1.66-8.64-3.47-12.8-7.41-16.96-14.54-34.04-21.78-51.07-.65-3.88-1.3-7.75-1.95-11.63,1.3,.63,2.6,1.27,3.9,1.9,6.97,15.31,15.51,29.96,19.42,46.55,3.62,8.67,5.69,17.67,5.79,27.09Z"
              ></path>
              <path
                class="cls-480"
                d="M616.89,521.15c-3.91-16.58-12.45-31.24-19.42-46.55,.01-1.93,.03-3.86,.04-5.79,3.21,3.22,6.42,6.44,9.63,9.66,1.55,7.01,2.52,13.69,8.68,19.31,5.04,4.6,2.86,12.75,2.98,19.45-.03,1.6-.37,3.05-1.92,3.91Z"
              ></path>
              <path
                class="cls-357"
                d="M95,414.58c.01-1.3,.03-2.59,.04-3.89,1.93,0,3.87,0,5.8,0-1.65,9.86,3.87,19.51-4.83,30.06-7.85,9.52-13.13,22.28-20.66,32.48-16.69,22.6-25.69,47.52-28.85,74.99-1.83,.89-3.37,2.22-3.6,4.26-1.44,12.87-2.99,25.74-4.08,38.65-2.13,25.14,4.68,48.95,11.09,72.86,3.01,11.23,5.71,22.68,11.7,32.57,4.28,7.08,6.17,14.55,8.2,22.19-1.28,0-2.56,0-3.84,0,.93-10.79-7.42-18.12-10.45-27.54-5.78-17.95-12.21-35.44-15.56-54.3-2.57-14.5-4.87-28.78-5.01-43.43-.08-8.01,3.04-15.8,1.89-23.91,3.07-21.82,10.49-42.58,15.5-63.93,0,0,.02-.02,.02-.02,7.17-18.1,18.27-34.11,28.8-50.17,8.42-12.85,16.19-24.85,13.85-40.87Z"
              ></path>
              <path
                class="cls-312"
                d="M65.96,718.76c1.28,0,2.56,0,3.84,0-1.32,7.58,3.76,14,3.9,21.31,.2,1.57-.17,3.6,.68,4.64,7.21,8.85,6.89,19.37,7.05,29.81,.04,2.56,.25,6.5-2.28,6.75-11.12,1.08-10.75,9.16-11.29,16.9-1.29,0-2.58,0-3.87,.01,0-3.22,0-6.45-.01-9.67,2.87-16.15,5.87-32.42,3.2-48.77-1.15-7.08-.81-14-1.22-20.98Z"
              ></path>
              <path
                class="cls-197"
                d="M52.34,505.63c-5.01,21.35-12.43,42.11-15.5,63.93-4.1,2.94,.22,8.68-3.88,11.61-2.53-21.35,6.49-40.36,12.4-59.97,.86-2.85,1.16-5.57,1.16-8.4,0-4.04,1.29-6.88,5.82-7.18Z"
              ></path>
              <path
                class="cls-333"
                d="M63.99,788.51c0,3.22,0,6.45,.01,9.67-.06,3.81-3.34,4.41-5.82,5.82,0,0-.02-.02-.02-.02-.71-6.15,.23-11.69,5.83-15.47Z"
              ></path>
              <path
                class="cls-370"
                d="M32.95,914.43c-4.46,2.61-2.49,8.41-5.78,11.6-.89-8.99,3.52-16.77,6.28-24.76,5.04-14.56,11.26-28.71,17-43.03,7.3-4.93,7.85-12.98,9.72-20.52,2.93-11.82-.33-24.97,7.7-35.67,2.21-4.69,8.51-4.76,10.78-8.76,6.43-11.34,11.42-22.75,5.34-36.56-2.13-4.84-5.66-9.26-6.45-14.73,0-.65,.01-1.3,.02-1.94,.63,0,1.26,0,1.89,0,.29,5.67,6.2,7.5,8.13,12.59,6.38,16.78,5.66,35.99-14.24,50.96-2.89,2.18-4.83,5.19-4.84,9.03-.02,17.68-6.92,33.48-13.37,49.43-5.8,14.36-14.33,27.55-18.32,42.68-3.07,2.52-3.98,5.9-3.87,9.68h0Z"
              ></path>
              <path
                class="cls-343"
                d="M67.87,802.06c-8.04,10.7-4.77,23.85-7.7,35.67-1.87,7.54-2.43,15.59-9.72,20.52-1.82-8.75,6.91-14.46,6.19-23.45-.81-10.16,.92-20.52,1.54-30.79,2.47-1.41,5.76-2.01,5.82-5.82,1.29,0,2.58,0,3.87-.01,0,1.29,0,2.59,0,3.88Z"
              ></path>
              <path
                class="cls-525"
                d="M19.35,953.2c.17,3.81-.79,7.16-3.86,9.68-.11-3.78,.82-7.15,3.86-9.68Z"
              ></path>
              <path
                class="cls-197"
                d="M95,414.58c2.35,16.02-5.43,28.02-13.85,40.87-10.53,16.06-21.63,32.07-28.8,50.17,.65-6.45,1.3-12.9,1.95-19.35,4.91-2.43,6.37-7.97,8.87-11.89,9.03-14.12,20.45-26.8,26.61-42.76,1.25-3.22,1.02-6.19,1.34-9.3,.65-1.93,1.3-3.87,1.95-5.8,.64-.64,1.28-1.29,1.91-1.93Z"
              ></path>
              <path
                class="cls-256"
                d="M104.72,154.94c.48-3.25-1.29-6.95,1.92-9.67-.19,3.02,.14,6.75,2.52,7.99,12.5,6.52,13.48,19.93,19.09,30.54,5.26,9.94,11.47,19.06,21.05,25.42,.01,3.86,.03,7.73,.04,11.59-6.26-1.49-3.01-12.5-11.64-11.62-12.46,.36-11.69-10.79-15.14-17.91-2.31-4.78-3.33-10.25-4.4-15.53-1.31-6.52-5.55-9.59-11.49-11.11-.65-3.23-1.3-6.47-1.96-9.7Z"
              ></path>
              <path
                class="cls-252"
                d="M149.35,220.81c-.01-3.86-.03-7.73-.04-11.59,0,0,.05-.05,.05-.05,11.08,13.7,10.69,27.92,1.96,42.53-5.6,2.27-2.3,6.29-1.92,9.73-3.81,2.17-6.93,5.7-11.73,5.9-6.59,2.22-11.64,8.31-19.36,7.71,2.63-4.72,8.45-5.61,11.64-9.65,.65-.65,1.3-1.31,1.95-1.96,2.48-1.55,2.33-4.87,5.21-6.56,13.1-7.72,17.56-21.46,12.25-36.05h0Z"
              ></path>
              <path
                class="cls-211"
                d="M149.35,220.81c5.31,14.59,.85,28.33-12.25,36.05-2.88,1.7-2.73,5.01-5.21,6.56-5.47-1.27-4.36-6.91-8.09-10.4,15.64,2.31,27.48-12.37,25.56-32.22Z"
              ></path>
              <path
                class="cls-366"
                d="M118.3,275.05c7.72,.6,12.77-5.49,19.36-7.71-3.67,5.34-7.61,9.55-15.01,10.18-5.44,.47-10.66,3.44-15.98,5.3,0,0,0,0,0,0-2.58,0-5.17,.01-7.75,.02-8.43,1.6-15.41,6.71-23.29,9.64-.18-4.5,4.46-6.09,5.82-9.66,7.7-7.28,18.12-1.63,26.62-5.58,3.08-1.43,6.8-1.49,10.23-2.18Z"
              ></path>
              <path
                class="cls-334"
                d="M100.84,410.69c-1.93,0-3.87,0-5.8,0-4.58-4.59-.03-10.6-2.98-16.12-4.32-8.09-9.04-15.31-16.46-20.69,2.96-3.93-2.57-6.18-1.9-9.66,7.38,3.38,9.71,12.74,17.94,15.13,.49,.09,.98,.22,1.46,.4-.53,7.17,2.45,13.24,6.64,18.61,3.22,4.12,3.83,7.95,1.1,12.35Z"
              ></path>
              <path
                class="cls-340"
                d="M93.1,379.74c-.48-.17-.96-.31-1.46-.4-.12-4.71-3.79-7.16-6.33-10.44-3.36-4.34-8.11-6.99-11.78-11.09-10.64-11.91-11.9-25.44-9.47-40.11,5.49-7.42,9.73-16.06,19.21-19.57,.05,.69,.09,1.39,.13,2.08-.68,.66-1.36,1.31-2.04,1.97-8.66,6.64-15.28,14.06-15.59,26.12-.41,15.93,9.29,25.85,19.34,35.7,8.18,8.01,16.31,15.92,19.55,27.39-3.26-3.86-6.52-7.71-9.77-11.57-.59-.05-1.19-.07-1.78-.07Z"
              ></path>
              <path
                class="cls-269"
                d="M83.26,298.12c-9.48,3.52-13.71,12.16-19.21,19.58-.02-1.29-.04-2.59-.06-3.88,3.58-10.61,10.71-17.69,21.31-21.3,.02,.67,.04,1.33,.06,2-.05,.6-.11,1.21-.16,1.81-.65,.6-1.3,1.2-1.94,1.79Z"
              ></path>
              <path
                class="cls-263"
                d="M85.37,294.51c-.02-.67-.04-1.33-.06-2,3.88-1.95,7.77-3.9,11.65-5.85,3.8,.14,7.19-.76,9.72-3.85,0,0,0,0,0,0,19.44,.34,34.94-8.26,48.46-21.33,.67-1.3,1.33-2.6,2-3.91,.97-.81,2.55-1.45,2.81-2.45,4.87-18.37,5.34-36.6-3.18-54.12-2.18-4.48-7.09-7.51-7.4-13.12,.01-.66,.02-1.32,.04-1.97,1.92,1.3,3.85,2.6,5.77,3.9,8.25,11.68,13.42,24.16,11.77,38.97-.77,6.95-.12,14.05-.12,21.09-7.41,15.47-19.8,25.75-35.37,31.89-7.91,3.12-17,2.74-24.81,6.79-8-1.25-13.57,6.16-21.27,5.96Z"
              ></path>
              <path
                class="cls-269"
                d="M106.67,282.81c-2.52,3.09-5.91,3.99-9.72,3.85,.65-1.28,1.31-2.56,1.96-3.83,2.58,0,5.17-.01,7.75-.02Z"
              ></path>
              <path
                class="cls-198"
                d="M203.67,139.44c4.13,5.48,10.53,8.36,15.36,13.3,4.06,4.14,4.48,7.31,4.04,11.88-3.46-5.99-11.95-6.25-15.08-11.08-9.35-14.47-28.24-19.08-35.35-35.42,0-1.29,0-2.58,0-3.86,7.83,5.33,18.02,7.72,21.31,18.61,1.2,3.97,7.78,2.33,9.72,6.57Z"
              ></path>
              <path
                class="cls-508"
                d="M172.63,114.25c0,1.29,0,2.58,0,3.86-2.59,0-5.17,0-7.76,0-1.29,0-2.58,0-3.87-.01-.09-3.8-3.37-4.4-5.83-5.81-.64-3.22-1.29-6.44-1.93-9.67,3.37-.3,5.06,2.78,7.75,3.86,2.71,4.34,7.65,5.36,11.65,7.77Z"
              ></path>
              <path
                class="cls-237"
                d="M153.24,102.63c.64,3.22,1.29,6.44,1.93,9.67-6.52-9.87-21.58-13.18-21.6-28.08,0-1.87-2.75-2.2-3.04-3.14-2.37-7.76-14.15-7.68-14.16-17.2,1.93-1.26,3.88,2.33,5.81-.02,1.4,2.28,3.68,1.88,5.82,1.93,6.36,3.31,8.7,9.64,11.66,15.5-.21,2.99,.14,6.27,2.93,7.53,6.18,2.78,7.44,8.96,10.64,13.8Z"
              ></path>
              <path
                class="cls-528"
                d="M122.18,63.87c-1.93,2.35-3.88-1.24-5.81,.02-10.87-5.9-15.39-3.48-20.54,7.2-3.96,8.2-1.28,15.95-.26,23.23,1.47,10.56-1.44,23.29,10.07,31.02,1.21,.82,.72,4.17,1.02,6.34-4.21-1.36-4.05-8.17-9.7-7.74-.64,0-1.27-.01-1.91-.02,.19-21.33-5.86-42.48-1.95-63.93,1.09-.58,2.72-.87,3.18-1.77,4.87-9.47,8.49-10.27,17.41-4.58,4.08,2.61,5.76,6.75,8.5,10.22Z"
              ></path>
              <path
                class="cls-289"
                d="M122.18,63.87c-2.74-3.47-4.41-7.61-8.5-10.22-8.92-5.69-12.54-4.89-17.41,4.58-.46,.9-2.09,1.19-3.18,1.77-.65,0-1.3,0-1.95,0-.1-8.74,5.52-15.51,9.2-22.53,3.68-7.02,10.45,1.33,11,2.89,3.5,10,13.96,15.22,16.65,25.45-2.14-.05-4.42,.34-5.82-1.93Z"
              ></path>
              <path
                class="cls-271"
                d="M91.15,59.99c.65,0,1.3,0,1.95,0-3.91,21.45,2.14,42.59,1.95,63.93-1.84-.87-3.62-2.2-3.58-4.21,.3-16.59-7.42-32.45-4.32-49.34,.71-3.85,.71-7.66,4-10.39Z"
              ></path>
              <path
                class="cls-271"
                d="M96.96,123.94c5.64-.43,5.49,6.38,9.7,7.74,.02,2.59,.03,5.17,.05,7.76-.02,.65-.03,1.3-.05,1.96-1.94-.65-3.87-1.31-5.81-1.96-2.11-4.96-4.31-9.9-3.89-15.49Z"
              ></path>
              <path
                class="cls-253"
                d="M106.66,141.4c.02-.65,.03-1.3,.05-1.96,3.67,5.9,10.64,8.92,13.54,15.49,2.03,4.32,4.64,8.46,5.99,12.99,4.61,15.53,18.43,25.83,23.12,41.25,0,0-.05,.05-.05,.05-9.58-6.36-15.79-15.48-21.05-25.42-5.61-10.61-6.6-24.02-19.09-30.54-2.37-1.24-2.71-4.97-2.52-7.99,0-1.29,0-2.58,.01-3.87Z"
              ></path>
              <path
                class="cls-300"
                d="M36.82,904.75c3.99-15.13,12.52-28.32,18.32-42.68,6.45-15.95,13.35-31.75,13.37-49.43,0-3.84,1.94-6.85,4.84-9.03,19.91-14.97,20.62-34.18,14.24-50.96-1.94-5.09-7.84-6.93-8.13-12.59,0,0,.1,.02,.1,.02,1.28,0,2.57-.02,3.85-.03,7.16,7.54,9.72,16.5,9.91,26.85,.16,8.66-2.24,16.94-2.22,25.49-3.6,3.62-4.88,8.91-9.11,12.16-3.66,2.82-9.53,12.19-9.63,16.28-.44,17.03-10.67,31.04-14.16,47.1-3.77,5.2-6.17,10.86-5.87,17.43-5.8,3.23-7.46,9.15-9.73,14.72-3.8,9.32-7.7,18.61-11.56,27.91,.64-4.51,1.28-9.03,1.91-13.54,0,0,0,0,0,0,3.08-2.51,4.02-5.88,3.87-9.68Z"
              ></path>
              <path
                class="cls-454"
                d="M31.03,927.98c3.86-9.3,7.76-18.59,11.56-27.91,2.27-5.57,3.94-11.5,9.73-14.72,1.94-.63,3.87-1.27,5.81-1.9-8.01,16.02-17.19,31.48-23.24,48.43-3.36,4.64-5.66,9.67-5.82,15.5-2.57,5.82-5.13,11.63-7.7,17.45-.02-1.27-.04-2.55-.06-3.82,3.24-11.01,6.48-22.02,9.72-33.03Z"
              ></path>
              <path
                class="cls-407"
                d="M21.31,961.01c.02,1.27,.04,2.55,.06,3.82-.19,3.66,.7,7.75-3.95,9.57-.04-4.85-.57-9.85,3.89-13.4Z"
              ></path>
              <path
                class="cls-162"
                d="M34.89,931.88c6.05-16.96,15.22-32.42,23.24-48.43-.32-6.03,1.8-11.13,5.86-15.51,6.39-4.93,5.68-12.71,7.77-19.36,11.61-15.73,16.88-34.29,23.32-52.32,9.42,3.92-2.12,7.75-.05,11.63-2.37,14.01-7.87,26.77-15.51,38.68-.67,.68-1.33,1.35-2,2.03-3.44,10.01-3.8,21.1-9.88,30.17-6.55,9.76-13.51,19.25-17.12,30.62-.73,2.3-1.77,4.08-3.99,5.08-2.58,5.17-5.17,10.35-7.75,15.52,0,.63-.02,1.27-.04,1.9-.63,0-1.27,.02-1.9,.03-.65,0-1.3-.02-1.95-.02Z"
              ></path>
              <path
                class="cls-126"
                d="M38.75,931.87c.02-.63,.04-1.27,.04-1.9,.64-.02,1.28-.03,1.92-.04,1.92-.65,3.85-1.29,5.77-1.94,.03,.67,.07,1.34,.1,2.01,.24,3.94-1.19,7.41-2.56,11.06-7.59,20.26-15.3,40.51-17.1,62.37-1.21,2-2.41,3.99-3.62,5.99-3.03-21.97,5.84-41.72,11.58-62.05,2.92-4.76,2.85-10.26,3.85-15.5Z"
              ></path>
              <path
                class="cls-457"
                d="M23.31,1009.42c1.21-2,2.41-3.99,3.62-5.98,.1,1.39,.19,2.77,.29,4.16,3.39,7.99-2.46,14.04-4.4,20.91-.45,.2-.93,.29-1.42,.28-2.77-4.98,5.19-8.54,1.81-13.61,.04-1.92,.07-3.84,.11-5.75Z"
              ></path>
              <path
                class="cls-126"
                d="M23.2,1015.17c3.38,5.06-4.58,8.63-1.81,13.61,0,.65-.11,1.28-.33,1.89-1.23,1.91-2.46,3.83-3.69,5.74,.17-7.57-.53-15.37,5.83-21.24Z"
              ></path>
              <path
                class="cls-154"
                d="M38.75,931.87c-1,5.24-.94,10.74-3.85,15.5-.47-5.3,.37-10.43,1.96-15.47,.63-.01,1.27-.02,1.9-.03Z"
              ></path>
              <path
                class="cls-117"
                d="M44.59,1034.65c-.04-.69-.09-1.38-.13-2.08,1.51-2.41,3.31-4.52,5.93-5.81,4.74-.62,5.36-4.17,5.66-7.94,.69-1.22,1.37-2.44,2.06-3.65,1.5-.33,3.15-.32,4-1.97,5.78-3.92,11.55-7.83,17.33-11.75,.05,.72,.09,1.44,.14,2.16,0,6.6-9.25,5.36-9.79,11.5-5.07,.82-9.06,4.25-11,8.13-3.17,6.32-8.33,9.02-14.17,11.42Z"
              ></path>
              <path
                class="cls-167"
                d="M69.77,1015.1c.55-6.14,9.79-4.9,9.79-11.5,5.19,1.03,8.3-4.94,13.46-4.01l.12,.14c-5.97,6.76-14.23,10.36-21.4,15.48-.66-.04-1.31-.07-1.97-.11Z"
              ></path>
              <path
                class="cls-45"
                d="M21.06,1030.67c.22-.61,.33-1.24,.33-1.89,.5,.01,.97-.08,1.43-.28,5.94-4.11,11.87-8.21,17.81-12.32,5.05-7.54,9.56-15.52,17.36-20.76,.49,4.61-3.72,6.28-5.75,9.32-4.16,6.21-11.21,11.07-9.77,20.02-4.5,7.29-10.07,12.86-19.55,12.13-.49-.24-1-.41-1.53-.51-.11-1.9-.21-3.81-.32-5.71Z"
              ></path>
              <path
                class="cls-2"
                d="M22.91,1036.89c9.48,.72,15.05-4.84,19.55-12.13,3.96-4.08,6.25-10.41,13.53-9.99,.7,.13,1.4,.26,2.1,.39-.69,1.22-1.37,2.44-2.05,3.66-1.19,.83-2.39,1.65-3.58,2.47-5.74,4-11.37,8.11-13.83,15.11,0,0-.03-.04-.03-.04-3.23,.09-4.9,2.73-7.26,4.29-4.55,3-7.88,2.54-8.43-3.75Z"
              ></path>
              <path
                class="cls-100"
                d="M38.64,1036.4c2.46-7,8.09-11.11,13.83-15.11-.69,1.82-1.38,3.64-2.08,5.47-2.61,1.29-4.42,3.4-5.93,5.81-1.94,1.28-3.88,2.55-5.82,3.83Z"
              ></path>
              <path
                class="cls-266"
                d="M364.71,261.5c5.99,1.49,8.19-5.85,13.56-5.81,2.57,1.09,3.87,3.03,3.86,5.82-7.46,1.26-11,10.34-19.41,9.7-2.61,.07-4.79-.9-7.15-2.07-10.03-4.93-28.55-2.67-35.54,3.97-.63,0-1.27,.01-1.9,.03-2.82,.41-5.67,.69-8.46,1.25-6.04,1.22-10.14,1.4-8.2-7.29,1.08-4.85,2.45-9.78,3.74-15.2-6.78,.25-14.5,1.24-16.65,5.24-5.91,11.03-15.48,9.4-24.73,10.17-6.15-2.5-12.24-4.16-11.95-13.42,.27-8.73,5.21-11.54,11.93-13.71h.02c-1.94,2.6-3.89,5.18-5.83,7.77,0,0,0,0,0,0-4.85,3.03-2.51,7.95-.72,10.19,2.79,3.5,7.12,6.12,12.7,4.29,8.11-2.67,13.54-9.5,21.15-12.91,2.79-1.25,5.09-3.6,7.61-5.45,1.6-.03,3.04-.37,3.88-1.94,12.78,.89,16.89,4.1,17.28,15.52,.25,7.56,2.79,8.97,9.41,6.27,3.8-1.55,7.81-3.01,12.12-2.41,7.77,0,15.53,0,23.3,0Z"
              ></path>
              <path
                class="cls-224"
                d="M261.87,187.88c4.12,4.74,9.9,5.05,15.51,5.8,8.34-.23,10.06,10.46,18.21,11.02,1.63,.11,.98,3.52-.47,4.91-4.99,4.76-5.17,10.75-4.37,16.87,.73,5.6-2.33,9.71-6.81,10.03-6.94,.49-13.03,4.84-20.12,3.67,0,0-.02-.01-.02-.01,.65-1.28,1.31-2.56,1.96-3.85,4.73-.25,7.87-3.66,11.62-5.85,7.94-2.81,8.01-10.49,9.25-16.66,1.25-6.24-4.99-3.95-8.22-4.88-1.81-.52-2.9-1.71-2.78-3.4,.34-4.59-2.52-6.24-6.21-7.07-5.75-1.3-7.73-5.14-7.55-10.59Z"
              ></path>
              <path
                class="cls-193"
                d="M257.99,247.94c5.27-2.49,11.57-.61,16.65-3.94,2.34-1.53,3.93-.1,4.25,1.92,.38,2.36,2.16,5.13,.11,7.24-3.41,3.52-19.23-.57-21.01-5.22,0,0,0,0,0,0Z"
              ></path>
              <path
                class="cls-209"
                d="M164.87,118.12c2.59,0,5.17,0,7.76,0,7.12,16.34,26.01,20.95,35.35,35.42,3.12,4.83,11.61,5.09,15.08,11.08,3.23,.65,6.47,1.3,9.7,1.95-.18,5.57,2.31,8.86,7.99,9.74,3.45,.54,6.96,1.31,7.53,5.75,2.51,6.38,11.53,7.96,11.56,16.76,0,2.64,7.84,2.91,7.83,8.43-8.13-2.54-11.26-10.22-16.22-15.96-7.85-9.07-20.58-10.62-28.76-19.19-2.91-3.05-5.87-7.07-11.27-5.53-1.29,0-2.58-.02-3.87-.03-2.7-10.64-13.96-13.57-19.51-21.61-6.76-9.79-19.66-14.25-23.17-26.81Z"
              ></path>
              <path
                class="cls-205"
                d="M267.68,207.25c0-5.53-7.82-5.8-7.83-8.43-.03-8.8-9.05-10.39-11.56-16.76,1.29,0,2.58,0,3.87,0,5.2-1.32,6.15,4.42,9.71,5.82-.18,5.45,1.8,9.29,7.55,10.59,3.69,.83,6.55,2.48,6.21,7.07-.13,1.7,.97,2.88,2.78,3.4,3.23,.92,9.47-1.36,8.22,4.88-1.24,6.17-1.31,13.85-9.25,16.66,1.9-9.88-2.73-17.04-9.7-23.23Z"
              ></path>
              <path
                class="cls-195"
                d="M252.16,182.06c-1.29,0-2.58,0-3.87,0-.57-4.44-4.08-5.21-7.53-5.75-5.68-.88-8.17-4.17-7.99-9.74,13.35-3.44,16.75,5.56,19.39,15.49Z"
              ></path>
              <path
                class="cls-349"
                d="M157.09,974.53c-8.22-1.53-15.17,4.63-23.27,3.84,5.38-7.73,14.22-7.21,21.69-7.46,27.04-.9,54.13,.01,81.14-2.24,7.08-.97,14.53,2.17,21.34-1.91,5.31,.46,10.47-.37,15.53-1.94,14.13,1.35,28.11-1.25,42.07-2.38,9.23-.74,19.09-.69,27.75-5.39h0c17.02-.07,34.18,1.02,50.41-5.81l.04-.02c11.45,2.56,21.7-5.43,33.05-3.79-11.76,6.5-25,7.4-37.81,9.23-27.45,3.91-55.04,6.83-82.57,10.16-16.27,1.42-32.52,3.1-48.82,4.19-27.47,1.84-54.88,6-82.55,1.86-5.87-.88-12.25-1.53-18,1.66Z"
              ></path>
              <path
                class="cls-449"
                d="M426.83,947.43c-11.35-1.65-21.59,6.35-33.05,3.79,3.64-4.34,9.88,.51,13.52-3.82,5.83-1.95,11.66-3.9,17.5-5.85,8.07,1.57,14.58-2.71,21.42-5.74,2.66-1.13,4.34-4.16,7.68-3.97,4.86,.03,9-1.4,11.72-5.73,5.16-1.99,10.32-3.98,15.49-5.97,.63,.07,1.27,.11,1.91,.11-4.53,3.21-9.05,6.42-13.58,9.63-1.24,.71-2.49,1.43-3.73,2.14-3.58,.45-7.06,1.18-9.87,3.7-3.92,.13-6.04,2.69-7.79,5.75-.62,.05-1.24,.1-1.86,.14-4.39-.26-8.6,.03-11.65,3.84-2.58,.66-5.15,1.31-7.73,1.97Z"
              ></path>
              <path
                class="cls-301"
                d="M448.07,941.48c1.75-3.06,3.87-5.62,7.79-5.75,1.97,.03,3.95,.05,5.92,.08-2.62,1.93-5.24,3.87-7.86,5.8-1.95-.04-3.9-.09-5.85-.13Z"
              ></path>
              <path
                class="cls-405"
                d="M434.56,945.47c3.04-3.82,7.26-4.1,11.65-3.84-3.11,3.62-7.27,4.06-11.65,3.84Z"
              ></path>
              <path
                class="cls-405"
                d="M461.77,935.81c-1.97-.03-3.95-.05-5.92-.08,2.81-2.52,6.28-3.25,9.87-3.7-.26,2.36-1.56,3.64-3.95,3.78Z"
              ></path>
              <path
                class="cls-444"
                d="M568.35,838.85c-6.26,3.18-6.85,10.37-10.78,15.11-2.46,2.98-3.83,7.48-8.59,8.16-.03-2.43,1.58-3.99,2.84-5.86,11.06-16.26,22.17-32.52,26.21-52.3,.66-.65,1.32-1.31,1.98-1.96,5.65-9.65,6.89-20.95,11.69-30.92,.64,0,1.27-.01,1.91-.02,.5,11.82-6.74,21.18-10.11,31.78-.96,3.03-2.32,5.93-3.5,8.89-3.06,2.53-3.97,5.91-3.84,9.7-2.14,6.01-8.38,10.19-7.8,17.41Z"
              ></path>
              <path
                class="cls-341"
                d="M593.61,771.08c-.64,0-1.27,0-1.91,.02,1.92-10.34,3.84-20.69,5.76-31.03,1.95-5.81,3.89-11.62,5.84-17.43,.65,0,1.31,0,1.96,0,1.33,6.39-2.66,11.61-3.88,17.44-2.06,10.47-2.94,21.23-7.77,31.01Z"
              ></path>
              <path
                class="cls-399"
                d="M601.38,740.07c1.22-5.83,5.21-11.04,3.88-17.44,1.44-2.42,1.98-5.71,5.74-5.88l.11,.09c-2.07,8.23-2.48,17.15-9.72,23.22Z"
              ></path>
              <path
                class="cls-399"
                d="M614.93,705.19c3.57,2.59,.96,5.17,0,7.76-1.28,1.3-2.56,2.6-3.84,3.9,0,0-.11-.09-.11-.09-.05-4.32,.14-8.56,3.94-11.57Z"
              ></path>
              <path
                class="cls-438"
                d="M576.15,821.44c-.13-3.79,.79-7.17,3.84-9.7,.16,3.8-.79,7.17-3.84,9.7Z"
              ></path>
              <path
                class="cls-455"
                d="M539.31,871.83c-14.52,18.81-30.13,36.39-52.39,46.5-.01-1.3-.03-2.59-.04-3.89,2-4.43,6.31-6.47,10.1-8.51,13.88-7.47,24.1-18.92,34.48-30.27,1.3-1.29,2.6-2.58,3.9-3.86,1.32,.01,2.63,.03,3.95,.04Z"
              ></path>
              <path
                class="cls-498"
                d="M539.31,871.83c-1.32-.01-2.63-.03-3.95-.04,0-3.69,2.96-5.47,5.02-7.86,14.86-17.25,26.09-36.61,33.88-57.99,1.26-.66,2.52-1.31,3.77-1.97-4.04,19.78-15.14,36.04-26.21,52.3-1.27,1.86-2.87,3.42-2.84,5.86-2.5,3.95-5.69,7.23-9.67,9.71Z"
              ></path>
              <path
                class="cls-482"
                d="M486.88,914.44c.01,1.3,.02,2.59,.04,3.89-.02,.62-.04,1.24-.07,1.86-1.28,.02-2.55,.04-3.82,.07-.64,0-1.27-.04-1.91-.11,1.26-1.92,2.51-3.83,3.77-5.75,.67,.01,1.33,.02,2,.04Z"
              ></path>
              <path
                class="cls-167"
                d="M236.65,968.67c-27.01,2.25-54.1,1.34-81.14,2.24-7.47,.25-16.3-.27-21.69,7.46-9.7,5.82-19.4,11.65-29.09,17.47-3.86,1.3-7.73,2.59-11.59,3.89,0,0-.12-.14-.11-.14,13.32-13.22,30.91-19.97,46.14-30.3,.95-.65,2.49-.47,3.76-.6,13.03-1.29,25.85-3.48,39.19-2.14,30.57,3.08,60.84-4.32,91.4-3.68,0,.65,0,1.29,0,1.94-5.06,1.57-10.21,2.4-15.53,1.94-7.08,.99-14.53-2.18-21.34,1.91Z"
              ></path>
              <path
                class="cls-515"
                d="M607.15,478.47c-3.21-3.22-6.42-6.44-9.64-9.66-.02-1.3-.04-2.6-.06-3.9,.88-1.89,3.84-2.39,3.12-5.45-3.08-13-5.97-26.04-8.93-39.06-.19-14.9-7.14-28.27-9.7-42.64-.63-1.94-1.26-3.89-1.89-5.83,9.07,4.06,13.86,11.88,13.13,20.94-1.19,14.64,3.36,27.8,7.29,41.27,1.84,6.32-.33,13.64,4.76,19.16-1.21,8.53,2.15,16.71,1.93,25.16Z"
              ></path>
              <path
                class="cls-215"
                d="M516,288.6c.65,0,1.29,.01,1.94,.02,4.89,8.22,13.72,11.04,21.34,15.53,6.91,11.54,16.43,20.95,25.22,30.96,1.94,.66,3.88,1.31,5.82,1.97-2.57,11.17,6.28,20.19,5.82,30.96,0,.66-.02,1.32-.03,1.98-.64-.01-1.27-.02-1.91-.03-.01-3.18-.76-6.01-2.01-9.1-5.31-13.05-15.97-22.7-21.94-35.18-3.55-7.4-9.08-10.89-16.77-11.92l-1.97-5.8c-.12-2-.63-4.48-2.53-4.77-9.11-1.39-12.29-10.11-18.82-14.61,1.94,0,3.88,0,5.82-.01Z"
              ></path>
              <path
                class="cls-523"
                d="M576.11,370.02c0-.66,.02-1.32,.03-1.98,1.3,1.3,2.6,2.6,3.91,3.9,.63,1.94,1.26,3.89,1.9,5.83-1.28,.63-2.57,1.26-3.85,1.9-1.91-2.96-2.15-6.26-1.98-9.65Z"
              ></path>
              <path
                class="cls-516"
                d="M564.5,335.1c-8.79-10.01-18.31-19.42-25.22-30.96,1.29,0,2.59-.01,3.88-.02,4.53,3.88,9.06,7.75,13.59,11.63,1.63,6.83,9.7,11.09,7.76,19.35Z"
              ></path>
              <path
                class="cls-208"
                d="M543.15,304.12c-1.29,0-2.59,.01-3.88,.02-7.62-4.48-16.44-7.31-21.34-15.53,4.53-1.89,9.05,.97,13.58,0,.68,7.56,4.68,12.64,11.63,15.5Z"
              ></path>
              <path
                class="cls-200"
                d="M516,288.6c-1.94,0-3.88,0-5.82,.01-4.36-4.2-10.36-5.12-15.52-7.74-.64-1.29-1.29-2.58-1.93-3.87,2.58,0,5.17,0,7.75,0,3.88,5.59,12.52,4.83,15.53,11.6Z"
              ></path>
              <path
                class="cls-530"
                d="M492.72,277c.64,1.29,1.29,2.58,1.93,3.87-1.47-.53-2.96-.99-4.4-1.59-9.53-3.97-19.05-7.98-28.57-11.97-19.53-4.89-39.1-9.47-57.97-16.83-7.68-3-12.07,1.38-13.8,11.02-1.94,.64-3.87,1.29-5.81,1.93-.65-.64-1.31-1.29-1.96-1.93,0-2.79-1.29-4.73-3.86-5.82,9.14-8.97,25.42-11.86,36.86-7.14,11.53,4.76,24.9,2.42,36.07,9.06,6.15,3.65,13.4,4.05,20.18,5.82,5.65,6.81,15.62,6.85,21.33,13.56Z"
              ></path>
              <path
                class="cls-473"
                d="M614.93,705.19c-3.8,3.01-3.99,7.25-3.94,11.57-3.76,.17-4.29,3.46-5.74,5.88-.65,0-1.31,0-1.96,0,1.94-7.1,3.89-14.2,5.83-21.31,2.97-3.36,6.27-6.56,5.82-11.62,1.94-5.82,3.88-11.64,5.82-17.45,2.99-8.82,3.29-18.09,3.72-27.2,.53-11.18,.04-22.39-1.05-33.61-1.18-12.28,.31-24.75-3.15-36.91-3.95-13.86-7.47-27.84-11.18-41.76,1.28,.65,2.55,1.29,3.83,1.94-.81,6.25,2.49,10.9,6.02,15.46,6.24,25.51,10.13,51.09,10.1,77.65-.04,26.38-4.52,51.24-14.03,75.53-.02,.62-.05,1.23-.08,1.85Z"
              ></path>
              <path
                class="cls-408"
                d="M618.95,550.16c-3.53-4.56-6.83-9.22-6.02-15.46-1.12-3.56-1.65-7.47-3.5-10.59-2.99-5.04-1.61-13.14-9.83-14.65-.08-.63-.14-1.27-.19-1.91,.89-6.21-3.08-10.61-5.8-15.47l-.02-.03c-.49-6.73-3.55-12.3-7.81-17.33l-1.65-1.94c2.04-1.54,1.62-3.8,1.71-5.9,5.51,4.56,4.58,12.68,9.68,17.46,7.24,17.04,14.37,34.11,21.78,51.07,1.82,4.16,4,8.07,3.47,12.8-.61,.65-1.22,1.3-1.83,1.95Z"
              ></path>
              <path
                class="cls-265"
                d="M595.53,484.33c-5.1-4.78-4.17-12.9-9.68-17.46h0c.86-12.72-6.78-24.09-5.83-36.81-.79-3.42,2.35-8.39-3.81-9.71-.01-7.1-.03-14.2-.04-21.29h.94s.94,0,.94,0c-.87,8.47,2.46,15.87,5.88,23.26,.77,6.24,1.06,12.71,2.34,18.69,2.26,10.58,.45,22.21,7.33,31.7,.65,3.88,1.3,7.75,1.95,11.63Z"
              ></path>
              <path
                class="cls-328"
                d="M593.58,472.71c-6.87-9.5-5.07-21.12-7.33-31.7-1.28-5.97-1.58-12.44-2.34-18.69,1.29-.65,2.57-1.3,3.86-1.94v.04c2.29,6.55,3.97,13.39,3.15,20.22-1.1,9.18-.06,17.37,6.54,24.28,.02,1.3,.04,2.6,.06,3.9-.01,1.93-.03,3.86-.04,5.79-1.3-.63-2.6-1.27-3.9-1.9Z"
              ></path>
              <path
                class="cls-353"
                d="M77.57,740.06c0,.65-.01,1.3-.02,1.94-1.28-.64-2.56-1.29-3.85-1.93-.15-7.31-5.23-13.73-3.9-21.31-2.03-7.65-3.91-15.11-8.2-22.19-5.98-9.89-8.69-21.34-11.7-32.57-6.4-23.9-13.22-47.71-11.09-72.86,1.1-12.91,2.64-25.78,4.08-38.65,.23-2.04,1.77-3.37,3.6-4.26,.65,0,1.31,.01,1.96,.02-4.04,6.8-1.74,14.5-2.71,21.72-2.15,16.05-4.23,32.04-1.9,48.63,1.76,12.49,8.32,23.57,8.5,36.21-2.06,4.99-.44,8.76,3.88,11.63,1,7.6,2.66,14.83,6.71,21.65,2.55,4.29,6.23,8.24,6.83,13.6,1.45,13.02,4.21,25.78,7.8,38.38Z"
              ></path>
              <path
                class="cls-344"
                d="M48.46,548.25c-.65,0-1.31-.01-1.96-.02,3.16-27.47,12.16-52.4,28.85-74.99,7.54-10.2,12.81-22.96,20.66-32.48,8.7-10.55,3.18-20.2,4.83-30.06,2.72-4.39,2.12-8.22-1.1-12.35-4.19-5.37-7.17-11.43-6.64-18.61,.6,0,1.19,.02,1.78,.07,6.47,12.07,12.46,24.26,9.84,38.64,.29,10.94,2.21,23.38-6.03,31.25-8.74,8.34-14.5,18.2-21.09,27.77-12.61,18.3-21.51,38.2-26.62,59.85-.86,3.63,1.01,7.93-2.52,10.92Z"
              ></path>
              <path
                class="cls-229"
                d="M73.7,740.07c1.28,.64,2.57,1.29,3.85,1.93,.79,5.47,4.32,9.89,6.45,14.73,6.08,13.81,1.09,25.22-5.34,36.56-2.27,4-8.57,4.07-10.78,8.76,0-1.29,0-2.59,0-3.88,.54-7.74,.17-15.82,11.29-16.9,2.52-.24,2.32-4.19,2.28-6.75-.16-10.44,.16-20.96-7.05-29.81-.85-1.04-.48-3.07-.68-4.64Z"
              ></path>
              <path
                class="cls-383"
                d="M77.57,740.06c-3.59-12.59-6.35-25.35-7.8-38.38-.59-5.35-4.27-9.3-6.83-13.6-4.05-6.82-5.72-14.05-6.71-21.65,5.47,2.74,7.67,10.72,15.51,9.68,2.51,1.85,2.88,4.84,4.15,7.39,3.07,6.19,7.54,10.33,15.24,8.1,11.05,1.11,13.3-1.45,13.62-15.48,3.97-.46,3.87-3.39,3.86-6.3-.02-5.65,0-11.29-.01-16.94l.02-.04c2.85-3.21,2.82-6.43,.02-9.66-.02-.66-.04-1.31-.06-1.97,.01-14.84,.02-29.69,.03-44.53,.63,0,1.27-.02,1.9-.02,.07,5.14,.14,10.28,.21,15.43-1.45,14.33,2.98,28.41,1.77,42.72-1.33,11.12-2.25,22.31-4.07,33.36-2.49,15.15-11.94,18.89-24.96,10.18-2.49-1.67-4.69-3.76-7.8-2.16-2.91,1.51-1.82,4.52-1.97,6.96-.77,12.72,3.35,24.69,5.86,36.9,0,0-.1-.02-.1-.02-.63,0-1.26,.01-1.89,0Z"
              ></path>
              <path
                class="cls-324"
                d="M36.82,904.75c.15,3.8-.79,7.17-3.87,9.68-.11-3.79,.8-7.17,3.87-9.68Z"
              ></path>
              <path
                class="cls-312"
                d="M149.36,209.17c-4.69-15.42-18.51-25.71-23.12-41.25-1.34-4.52-3.95-8.67-5.99-12.99,0-1.3,0-2.59,0-3.89,2.58,1.95,5.16,3.89,7.74,5.84,2.51,11.65,8.5,21.57,15.52,30.97,1.3,2.49,2.17,5.36,3.97,7.42,14.75,16.92,13.02,36.55,9.62,56.49-1.93-.02-3.87-.04-5.8-.07,8.73-14.61,9.12-28.83-1.96-42.53Z"
              ></path>
              <path
                class="cls-269"
                d="M155.13,261.48c-13.52,13.07-29.02,21.67-48.46,21.33,5.32-1.86,10.54-4.83,15.98-5.3,7.4-.64,11.35-4.85,15.01-10.18,4.8-.19,7.92-3.73,11.73-5.9,1.91,.02,3.82,.03,5.74,.05Z"
              ></path>
              <path
                class="cls-285"
                d="M155.13,261.48c-1.91-.01-3.82-.03-5.74-.05-.38-3.45-3.69-7.46,1.92-9.74,1.93,.02,3.87,.04,5.8,.07,0,1.94,.01,3.87,.02,5.81-.67,1.3-1.33,2.6-2,3.91Z"
              ></path>
              <path
                class="cls-417"
                d="M104.65,391.38c-3.24-11.47-11.37-19.38-19.55-27.39-10.05-9.84-19.75-19.76-19.34-35.7,.31-12.06,6.94-19.48,15.59-26.12,.09,.6,.14,1.21,.16,1.82-10.89,10.6-12.13,23.22-7.82,37.02,3.71,8.3,8.76,15.58,15.71,21.55,21.31,18.3,24.87,44.1,28.77,69.52,2.65,17.28,.64,35,3.98,52.28-.9,8.99,2.07,18.25-1.85,27.04,.47-10.55-1.72-20.76-3.94-30.97,.21-20.26-3.8-40.21-4.5-60.45-.21-5.97,2.87-13.63-3.4-18.91-2.38-2.8-2.93-6.32-3.82-9.7Z"
              ></path>
              <path
                class="cls-409"
                d="M104.65,391.38c.9,3.38,1.45,6.9,3.82,9.7,.06,10.31,.12,20.62,.19,30.93,.98,7.94-2.09,15.07-4.57,22.28-1.47,4.27-2.4,8.1,2.6,10.65-.4,4.86,.52,9.36,2.85,13.74,4.46,8.38,8.62,16.93,6.84,26.94-3.45-3.31-2.54-9.52-7.77-11.64-1.06-3.37-1.85-6.85-3.25-10.06-1.38-3.17-3.11-7.61-7.24-6.36-4.09,1.24-4.03,6.11-4.17,9.91-.06,1.51,.48,3.46,1.48,4.52,3.92,4.17,1.01,6-2.33,7.84-.9-12.64-2.34-14.08-13.58-13.57,6.09-3.23,11.46-7.29,11.5-14.87,.02-4.58,2.43-6.75,5.1-10.08,10.02-12.5,13.73-26.97,8.61-42.85,2.62-14.38-3.36-26.57-9.84-38.64,3.26,3.86,6.51,7.71,9.77,11.57Z"
              ></path>
              <path
                class="cls-151"
                d="M81.53,303.99c-.02-.61-.08-1.21-.16-1.82,.68-.66,1.36-1.31,2.04-1.97,3.11-.2,5.76-1.35,7.75-3.82,8.49-4.6,18.41-4.16,27.2-7.73,.64,0,1.27-.01,1.91-.02,8.11-.53,16.99,2.01,23.29-5.79,3.25-3.23,6.5-6.45,9.75-9.68,4.65,.4,7.64-1.91,9.62-5.86h0c1.3,0,2.6,.02,3.9,.03-4.95,9.27-16.58,11.85-21.37,21.28-5.82,2.74-12.08,3.18-18.33,4.27-12.68,2.22-26.79-.77-37.69,8.95-2.64,.72-5.27,1.43-7.91,2.15Z"
              ></path>
              <path
                class="cls-417"
                d="M91.15,296.38c-1.99,2.47-4.64,3.62-7.75,3.82-.04-.69-.09-1.39-.13-2.08,.65-.6,1.3-1.2,1.95-1.79,1.98,.02,3.96,.04,5.93,.06Z"
              ></path>
              <path
                class="cls-461"
                d="M91.15,296.38c-1.98-.02-3.96-.04-5.93-.06,.05-.61,.1-1.21,.16-1.81,7.71,.2,13.27-7.21,21.27-5.96,3.9,.03,7.8,.06,11.7,.09-8.78,3.57-18.71,3.13-27.2,7.73Z"
              ></path>
              <path
                class="cls-460"
                d="M118.34,288.65c-3.9-.03-7.8-.06-11.7-.09,7.8-4.05,16.9-3.67,24.81-6.79,15.57-6.15,27.96-16.42,35.37-31.89,3.16-2.86,1.58-6.64,1.93-10.03,1.79-17.31-2.22-34.31-2.84-51.49-.25-7.01,3.76-6.55,7.17-3.86,12.78,10.1,28.03,15.43,42.23,22.77,0,.65,0,1.3,0,1.95-8.8-1.58-16.38-6.38-26.47-5.22-12.32,1.42-17.96,4.49-18.11,17.06-.11,9.61-.03,19.22-.03,28.83-2.59,5.81-5.18,11.61-7.78,17.42,0,0,0,0,0,0-4.65-.41-7.7,1.8-9.63,5.86-3.25,3.23-6.5,6.45-9.75,9.68-7.88,1.44-15.84,2.62-23.29,5.79-.64,0-1.27,.02-1.91,.02Z"
              ></path>
              <path
                class="cls-410"
                d="M215.31,207.25c-14.2-7.34-29.45-12.67-42.23-22.77-3.41-2.7-7.43-3.15-7.17,3.86,.62,17.19,4.63,34.19,2.84,51.49-.35,3.39,1.23,7.18-1.93,10.03,0-7.03-.66-14.14,.12-21.09,1.65-14.81-3.52-27.29-11.77-38.97,1.83-4.32,1-8.58-.77-12.69,8.8-3.14,14.99,2.91,22.12,4.93,5.19,3.03,11.06,4.44,16.48,7.18,14.25,7.2,26.72,18.59,43.64,19.98,3.98,5.14,12.43,3.12,15.54,9.65-12.98-1.68-23.39-11.5-36.87-11.61Z"
              ></path>
              <path
                class="cls-238"
                d="M157.13,257.58c0-1.94-.01-3.87-.02-5.81,3.4-19.95,5.12-39.57-9.62-56.49-1.8-2.06-2.67-4.93-3.97-7.42,0-1.93,.01-3.86,.02-5.79,.64,0,1.27,0,1.91-.02,.03,2.79,1.32,4.75,3.91,5.84,.3,5.61,5.22,8.64,7.4,13.12,8.52,17.52,8.05,35.75,3.18,54.12-.26,.99-1.84,1.64-2.81,2.45Z"
              ></path>
              <path
                class="cls-433"
                d="M176.51,182.05c-7.13-2.02-13.32-8.07-22.12-4.93,1.77,4.11,2.6,8.37,.77,12.69-1.92-1.3-3.85-2.6-5.77-3.9,.67-6.59-.97-12.94-1.99-19.35,7.61,.16,15.97-2.07,20.34,7.45,1.11,2.43,4.26,2.31,6.83,2.24,.65,1.93,1.29,3.87,1.94,5.8Z"
              ></path>
              <path
                class="cls-298"
                d="M147.4,166.56c1.02,6.41,2.66,12.76,1.99,19.35-.01,.66-.02,1.32-.04,1.97-2.59-1.09-3.87-3.05-3.91-5.84,.72-4.1-1.31-7.74-1.9-11.63,1.28-1.29,2.57-2.57,3.85-3.86Z"
              ></path>
              <path
                class="cls-364"
                d="M120.25,151.05c0,1.3,0,2.59,0,3.89-2.9-6.57-9.87-9.6-13.54-15.49-.02-2.59-.03-5.17-.05-7.76-.3-2.17,.19-5.53-1.02-6.34-11.51-7.73-8.6-20.46-10.07-31.02-1.01-7.28-3.69-15.03,.26-23.23,5.16-10.69,9.67-13.1,20.54-7.2,0,9.52,11.79,9.44,14.16,17.2,.29,.94,3.04,1.27,3.04,3.14,.02,14.9,15.08,18.21,21.6,28.08,2.47,1.42,5.75,2.01,5.83,5.81-1.6,.05-3.05,.38-3.9,1.94-16.77-8.06-26.84-23.82-40.41-35.56-3.36-2.9-7.49-4.36-8.36-1.93-2.24,6.25-11.51,12.69-1.66,20.05-.21,14.55,1.94,28.41,11.36,40.3,1.78,2.25,2.51,5.14,2.23,8.13Z"
              ></path>
              <path
                class="cls-315"
                d="M157.1,120.05c.84-1.56,2.3-1.89,3.9-1.94,1.29,0,2.58,0,3.87,.01,3.51,12.56,16.41,17.02,23.17,26.81,5.54,8.03,16.8,10.97,19.51,21.61-5.89,.81-10.22-2.89-12.8-6.79-5.46-8.26-14.37-10.29-22.12-14.5-1.3-.65-2.59-1.3-3.89-1.95,1.65-3.53,.82-5.98-2.83-7.74-6.43-3.1-9.06-8.53-8.81-15.5Z"
              ></path>
              <path
                class="cls-456"
                d="M91.1,792.38c-.02-8.55,2.38-16.83,2.22-25.49-.19-10.35-2.75-19.31-9.91-26.85-1.89-8.69-4.03-17.35-5.51-26.11-.44-2.61-2.1-8.28,2.45-7.51,5.02,.84,9.29-2.55,14.16-.56,8.14,3.34,11.75-1.64,14.13-8.42,1.35-3.86,.98-8.28,3.84-11.64,.71,4.91-.62,9.62-2.07,14.12-2.56,7.93-5.67,15.61-16.83,11.58-3.04-1.1-5.64,.79-7.72,2.86-6.61,6.61-3.6,12.86,.04,19.88,9.6,18.53,16.29,37.62,5.27,58.15l-.07-.02Z"
              ></path>
              <path
                class="cls-395"
                d="M112.48,685.8c-2.87,3.35-2.49,7.78-3.84,11.64-2.37,6.78-5.99,11.76-14.13,8.42-4.87-2-9.15,1.4-14.16,.56-4.55-.76-2.89,4.91-2.45,7.51,1.49,8.76,3.62,17.41,5.51,26.11-1.28,0-2.57,.02-3.85,.03-2.51-12.21-6.63-24.18-5.86-36.9,.15-2.44-.94-5.45,1.97-6.96,3.11-1.61,5.31,.49,7.8,2.16,13.02,8.7,22.47,4.97,24.96-10.18,1.82-11.04,2.75-22.23,4.07-33.36,0,0,.96-.01,.96-.01h.96c0,2.58,0,5.16,0,7.74-4.08,6.8-.95,14.24-1.92,21.32,0,.64-.01,1.28-.02,1.92Z"
              ></path>
              <path
                class="cls-445"
                d="M58.19,867.91c3.49-16.06,13.72-30.07,14.16-47.1,.11-4.09,5.97-13.46,9.63-16.28,4.23-3.25,5.51-8.54,9.11-12.16,0,0,.07,.02,.07,.01,.25,3.99-.74,8.19-2.99,10.92-10.9,13.24-14.73,29.17-18.41,45.23-4.66,2.53-4.44,7.48-5.78,11.65-2.8,1.92-1.74,6.74-5.8,7.71Z"
              ></path>
              <path
                class="cls-462"
                d="M58.19,867.91c4.06-.97,3-5.79,5.8-7.71,0,2.58,0,5.16,0,7.74-4.05,4.38-6.18,9.48-5.86,15.51-1.94,.63-3.87,1.27-5.81,1.9-.3-6.57,2.09-12.23,5.87-17.43Z"
              ></path>
              <path
                class="cls-462"
                d="M69.77,848.54c3.68-16.07,7.51-31.99,18.41-45.23,2.25-2.73,3.24-6.93,2.99-10.92,11.02-20.53,4.33-39.61-5.27-58.15-3.64-7.02-6.65-13.26-.04-19.88,2.08-2.08,4.68-3.96,7.72-2.86,11.16,4.04,14.27-3.65,16.83-11.58,1.46-4.5,2.78-9.21,2.07-14.12,0-.64,.02-1.28,.02-1.92,4.08-6.8,.95-14.24,1.92-21.32,0-2.58,0-5.16,0-7.74,.34-4.72,.47-9.41,.39-14.17-.18-9.44-2.54-19.19,1.55-28.44,3.26,2.67,1.42,6.4,2.01,9.63-.01,.67-.02,1.34-.03,2.02,.66,28.88-1.98,57.53-5.77,86.11-.85,6.45-4.25,8.6-10.3,8.85-15.09,.62-15.08,.75-10.23,15.26,1.12,3.35,1.98,6.8,3.33,10.05,7.25,17.44,7.46,34.8-.29,52.13-6.44,18.03-11.71,36.58-23.32,52.32-.67,0-1.33-.02-2-.03Z"
              ></path>
              <path
                class="cls-485"
                d="M95.08,796.26c7.75-17.33,7.54-34.69,.29-52.13-1.35-3.25-2.21-6.7-3.33-10.05-4.86-14.52-4.87-14.65,10.23-15.26,6.05-.25,9.44-2.4,10.3-8.85,3.79-28.59,6.44-57.24,5.77-86.11,2.95,2.54,1.84,5.99,1.86,9.08,.06,14.45,.59,28.93-1.83,43.28-.03,13.53-.05,27.06-.08,40.58-.64,.66-1.28,1.31-1.92,1.97-11.13,7.17-20.34,15.18-13.69,30.37,.5,1.15,.35,2.59,.83,3.75,7.27,17.59-2.37,33.95-3.74,50.9-.18,2.26-2.06,4-4.74,4.1-2.07-3.89,9.47-7.72,.05-11.63Z"
              ></path>
              <path
                class="cls-150"
                d="M95.04,807.89c2.68-.1,4.56-1.84,4.74-4.1,1.37-16.95,11-33.32,3.74-50.9-.48-1.17-.33-2.6-.83-3.75-6.66-15.19,2.55-23.21,13.69-30.37-.11,2.84-.34,5.49-1.51,8.33-4.33,10.5-6.44,21.91-3.09,32.64,1.9,6.1,1.54,11.74-.33,16.3-5.86,14.25-9.72,28.73-10.14,44.11-.04,1.31,.31,2.81-1.4,2.94-7.61,.6-7.13,7-8.74,11.91-2.62,2.71-3.05,6.28-3.88,9.7-2.58,.62-5.16,1.24-7.74,1.87,7.64-11.9,13.14-24.67,15.51-38.68Z"
              ></path>
              <path
                class="cls-154"
                d="M46.54,914.45c2.22-1,3.26-2.78,3.99-5.08,3.61-11.36,10.57-20.85,17.12-30.62,6.08-9.06,6.44-20.15,9.88-30.17,1.31,2.58,2.61,5.16,3.92,7.74-3.22,11.2-7.51,21.92-14.97,31.03-1.01,1.24-2.65,2.11-1.94,3.74,.94,2.15,2.81,2.45,4.57,.77,2.14-2.04,2.41-.53,2.66,1.25-10.51,7.1-16.56,18.33-25.21,27.15,0-1.94,0-3.88,0-5.82Z"
              ></path>
              <path
                class="cls-454"
                d="M69.77,848.54c.67,0,1.33,.02,2,.03-2.1,6.65-1.39,14.43-7.77,19.36,0-2.58,0-5.16,0-7.74,1.34-4.18,1.12-9.12,5.78-11.65Z"
              ></path>
              <path
                class="cls-382"
                d="M81.44,856.33c-1.31-2.58-2.61-5.16-3.92-7.74,.67-.67,1.33-1.35,2-2.02,2.58-.62,5.16-1.24,7.74-1.87,1.88,5.78-5.51,6.94-5.82,11.63Z"
              ></path>
              <path
                class="cls-109"
                d="M46.54,914.45c0,1.94,0,3.88,0,5.82-.02,1.28-.04,2.56-.07,3.85-2.57,1.3-4.52,3.21-5.77,5.82-.64,0-1.28,.02-1.92,.04,2.58-5.17,5.17-10.35,7.75-15.52Z"
              ></path>
              <path
                class="cls-50"
                d="M27.22,1007.59c-.1-1.38-.19-2.77-.29-4.16,1.8-21.85,9.51-42.11,17.1-62.37,1.36-3.64,2.8-7.11,2.56-11.06,1.26-.7,2.51-1.39,3.77-2.09,.08,.78,.16,1.56,.25,2.34-3.53,15.02-11.69,28.58-13.86,44.03-3.17,11.1-6.34,22.19-9.51,33.29Z"
              ></path>
              <path
                class="cls-128"
                d="M50.35,927.92c-1.26,.7-2.51,1.39-3.77,2.09-.03-.67-.07-1.34-.1-2.01,0-1.29,0-2.59,0-3.88,.02-1.28,.04-2.56,.07-3.85,8.65-8.82,14.71-20.05,25.21-27.15,.65,0,1.3,.02,1.95,.02-.69,6.12-7.13,9.34-7.81,15.46h0c-3.63,.22-5.55,2.18-5.89,5.75-.64,.64-1.29,1.27-1.93,1.91-6.63,1.2-7.29,6.36-7.74,11.65Z"
              ></path>
              <path
                class="cls-154"
                d="M46.48,924.12c0,1.29,0,2.59,0,3.88-1.92,.65-3.85,1.29-5.77,1.94,1.25-2.6,3.2-4.52,5.77-5.82Z"
              ></path>
              <path
                class="cls-2"
                d="M27.22,1007.59c3.17-11.1,6.34-22.19,9.51-33.29,.05,2.69,.1,5.38,.15,8.07-1.89,9.66-3.77,19.33-5.66,29,.06,2.26,.58,5.26,3.21,4.31,3.6-1.31,2.2-5.22,2.24-8.2,.61-.43,1.22-.87,1.82-1.3,.89,3.3-2.6,7.53,2.13,10.02-5.94,4.11-11.87,8.21-17.81,12.32,1.94-6.87,7.79-12.92,4.4-20.91Z"
              ></path>
              <path
                class="cls-176"
                d="M273.51,962.87c-30.56-.65-60.83,6.75-91.4,3.68-13.34-1.34-26.17,.86-39.19,2.14-1.27,.13-2.81-.05-3.76,.6-15.23,10.33-32.82,17.08-46.14,30.3-5.16-.93-8.27,5.03-13.46,4.01-.05-.72-.09-1.44-.14-2.16,7.83-7.81,19.06-11.55,25.41-21.14,8.05,.07,13.51-6.94,21.23-7.75,7.76-3.22,15.52-6.45,23.28-9.67h0c4.51-.76,9.48,1.76,13.58-1.92,.65-.01,1.3-.02,1.94-.03,18.75,.05,37.32,2.74,56.31,.67,10.75-1.17,20.87-5.13,32.02-4.8,26.73,.8,53.54,.99,80.22-1.77,5.95-.61,12.06-.98,17.66-3.57,3.22-.08,6.45-.17,9.67-.25,15.81,2.33,30.82-5.24,46.55-3.79-3.64,4.32-9.88-.52-13.52,3.82,0,0-.04,.02-.04,.02-6.59,.66-13.46,.37-19.71,2.19-10.14,2.95-20.86-.58-30.71,3.63,0,0,0,0,0,0-23.5-.78-46.31,6.76-69.82,5.82Z"
              ></path>
              <path
                class="cls-69"
                d="M58.1,1015.16c-.7-.13-1.4-.26-2.1-.39,.3-6.47,.33-13.8,8.65-14.74,5.37-.6,8.53-2.75,9.84-7.27,.8-2.76,2.51-3.91,4.54-4.15,7.41-.88,11.76-5.93,15.98-11.14,3.1-3.82,6.81-5.69,11.76-4.79,0,.57-.08,1.13-.22,1.68-8.82,6.74-18.59,12.58-26.15,20.51-5.97,6.26-15.42,9.11-18.3,18.32-.84,1.65-2.5,1.65-4,1.97Z"
              ></path>
              <path
                class="cls-123"
                d="M62.09,1013.19c2.88-9.21,12.34-12.06,18.3-18.32,7.56-7.93,17.33-13.77,26.15-20.51-.57,1.98-1.14,3.96-1.71,5.94-6.35,9.59-17.58,13.33-25.41,21.14-5.78,3.91-11.55,7.83-17.33,11.75Z"
              ></path>
              <path
                class="cls-165"
                d="M50.39,1026.76c.69-1.82,1.38-3.65,2.08-5.47,1.19-.82,2.39-1.65,3.58-2.47-.3,3.77-.91,7.32-5.66,7.94Z"
              ></path>
              <path
                class="cls-36"
                d="M40.62,1016.18c-4.74-2.48-1.24-6.71-2.13-10.02,6.31-26.37,15.73-51.61,27.62-75.95,12.35-18.41,25.63-36.04,42.67-50.5,9.94-4.83,16.27-12.68,19.43-23.18,7.66-14.68,9.56-30.65,9.58-46.79,.17-138.02,.13-276.04,.23-414.06,0-10.05-2.36-19.23-7.89-27.61-.69-2.57-1.39-5.13-2.08-7.7-.92-4.59-4.2-7.3-7.78-9.78-2.79-3.04-4.78-7.1-9.62-7.51-1.24-.75-2.48-1.49-3.72-2.24-1.7-3.49-5.55-3.12-8.33-3.95-8.79-2.62-7.97-9.38-7.19-15.67,.9-7.26,7.03-5.11,11.55-5.02,84.9,1.75,169.8,4.65,254.71,4.92,43.7,.14,82.51,11.94,118.39,35.73,23.07,15.3,42.04,34.87,59.18,56.35,5.77,9.06,11.54,18.13,17.31,27.2-.07,1.51,.03,2.92,1.77,3.51,1.37,2.57,2.74,5.15,4.11,7.72-.2,1.66-.22,3.23,1.77,3.9,3.92,9.19,7.85,18.38,11.77,27.58,0,0-.21,.69-.21,.69l.52,.5c1.23,3.28,.63,7.12,3.09,10.03,1.74,4.35,1.5,9.36,4.46,13.3-.02,5.55,1.53,10.73,3.62,15.79,.73,3.18,1.45,6.36,2.18,9.53,2.02,19.35,4.05,38.7,6.07,58.05-.28,25.99,.73,52.04-2.59,77.91-2.2,17.16-4.91,34.26-7.39,51.39-5.41,21.03-12.05,41.67-19.4,62.1-2.77,5.83-5.55,11.65-8.32,17.48-1.51,2.4-3.46,4.6-3.38,7.69-2.19,3.92-4.37,7.83-6.56,11.75-.36,.74-.72,1.47-1.08,2.2-2.54,4.31-5.08,8.63-7.62,12.95-3.98,5.78-7.96,11.57-11.94,17.35-14.68,16.83-29.7,33.34-46.46,48.19-15.3,12-31.79,21.88-50.28,28.22-10.4,3.6-20.8,7.21-31.2,10.81-3.7,1.38-7.79-1.52-11.39,1.01-21.21,2.56-42.56,.78-63.81,1.97-1.27-.17-2.54-.46-3.82-.48-43.52-.39-87.05-.93-130.57-1.03-17.11-.04-33.96,2.44-50.12,8.48-30.87,7.21-56.11,23.83-77.79,46.41-7.8,5.24-12.31,13.23-17.36,20.76Zm417.29-260.58c2.78-1.91,2.34-4.8,2.28-7.57l-.13,.16c3.45-2.98,4.96-7.04,6.51-11.17,18.6-49.77,22.09-101.46,18.97-153.84-1.14-19.13-3.06-38.3-10.09-56.47-1.88-7.3-3.08-14.83-7.42-21.26-6.56-21.46-17.71-40.44-31.51-57.98-.42-3.72-2.7-6.03-5.85-7.69-5.53-7.97-12.04-15.05-19.42-21.34-6.04-7.12-12.34-13.93-21.3-17.51-13.36-6.76-27.72-9.89-42.47-11.59-29.51-3.39-59.1-2.39-88.67-1.34-8.84,.31-17.14,2.81-22.44,10.91-6.07,5.91-6.8,13.76-6.81,21.37-.09,125.43,0,250.85,.09,376.28,0,9.04,.89,18.02,3.12,26.82,.14,7.96,2.89,14.97,7.78,21.19,2.75,3.71,5.33,7.58,9.56,9.85,1.76,2.92,4.28,4.38,7.75,4.02h-.04c2.32,2.35,5.39,1.91,8.19,1.93,25.48,.13,50.96,.33,76.44,.04,7.61-.08,15.38-.65,22.56-3.9,31.03-8.77,49.73-32.21,67.57-56.67,2.51-.96,3.47-3.06,4.01-5.46,3.59-2.21,4.88-5.85,5.98-9.61l-.09,.13c5.06-4.83,8.03-10.86,9.94-17.48l-.09,.15c3.06-3.43,5.68-7.07,5.56-11.97Z"
              ></path>
              <path
                class="cls-7"
                d="M57.99,995.42c21.68-22.58,46.92-39.2,77.78-46.41,2.86-.09,5.93,.45,8.56-.38,15.58-4.87,31.52-5.78,47.66-5.09,.02,.62,.02,1.25,0,1.87-.57,.13-1.15,.2-1.73,.19-9.51,.24-19.62-2.55-27.63,5.38-2.49,.13-4.98,.27-7.47,.4-3.08,.32-7.42-1.65-7.51,4.11-1.55,2.02-3.85,1.53-5.93,1.73-4.14,.17-8.59-.57-12.36,.71-8.68,2.94-18.24,5.05-22.52,14.83l-.08-.09c-4.94-.9-8.66,.96-11.76,4.79-4.23,5.21-8.57,10.26-15.98,11.14-2.03,.24-3.74,1.39-4.54,4.15-1.31,4.52-4.48,6.67-9.84,7.27-8.32,.94-8.35,8.26-8.65,14.74-7.29-.42-9.57,5.91-13.53,9.99-1.44-8.95,5.61-13.81,9.77-20.02,2.04-3.04,6.24-4.72,5.75-9.32Z"
              ></path>
              <path
                class="cls-212"
                d="M263.82,267.3c9.25-.77,18.83,.86,24.73-10.17,2.14-4,9.86-4.99,16.65-5.24-1.29,5.42-2.65,10.35-3.74,15.2-1.94,8.69,2.16,8.51,8.2,7.29,2.79-.56,5.64-.84,8.46-1.25-1.95,1.93-3.9,3.85-5.85,5.78-4.5,.08-10.17,1.08-12.5-3.09-4.01-7.18-10.15-6.18-16.4-6.65-9.11-.69-18.47,2.23-27.33-1.87,2.59,0,5.18,0,7.77,0Z"
              ></path>
              <path
                class="cls-351"
                d="M320.03,273.1c6.99-6.64,25.51-8.9,35.54-3.97,2.37,1.16,4.54,2.14,7.15,2.07,2.73,3.21,6.46,1.45,9.73,1.95,2.49,4.7,7.47,4.42,11.62,5.79-1.39,2.28-3.68,1.87-5.8,1.94-4.97-2.12-9.92-4.32-15.53-3.9-1.96-4.48-6-3.74-9.71-3.85-11-6.65-22.01-1.85-33.01-.03Z"
              ></path>
              <path
                class="cls-245"
                d="M263.82,267.3c-2.59,0-5.18,0-7.77,0-11.97-10.08-12.23-11.66-4.07-23.98,.7-1.05,1.41-2.1,2.12-3.14,2.56-1.3,5.12-2.59,7.67-3.89,1.33,.01,2.66,.02,3.99,.03-.65,1.28-1.31,2.57-1.96,3.85-6.72,2.17-11.65,4.98-11.93,13.71-.29,9.26,5.79,10.91,11.95,13.42Z"
              ></path>
              <path
                class="cls-194"
                d="M372.45,273.15c-3.27-.5-7,1.26-9.73-1.95,8.41,.65,11.96-8.43,19.41-9.7,.65,.64,1.31,1.29,1.96,1.93q-.1,12.67-11.64,9.72Z"
              ></path>
              <path
                class="cls-317"
                d="M320.03,273.1c11.01-1.82,22.01-6.63,33.01,.03-11.09,.45-22.51-1.94-32.96,3.89-2.43,1.29-4.94,2.22-7.77,1.93l-.03-.04c1.95-1.93,3.9-3.85,5.85-5.78,.63-.01,1.27-.02,1.9-.03Z"
              ></path>
              <path
                class="cls-322"
                d="M265.76,236.33c-1.33-.01-2.66-.02-3.99-.03-.04-.68-.08-1.36-.12-2.04,.12-.58,.22-1.16,.31-1.75,5.57,1.95,8.09-.81,9.92-5.75,1.77-4.76,.24-7.44-3.49-10.54-8.81-7.31-19.61-12.37-25.93-22.53-1.87-1.18-3.66-2.54-5.63-3.53-10.79-5.39-20.17-12.24-25.41-23.58,5.4-1.54,8.36,2.49,11.27,5.53,8.18,8.58,20.91,10.12,28.76,19.19,4.96,5.73,8.09,13.42,16.22,15.96,6.97,6.18,11.6,13.35,9.7,23.23-3.75,2.19-6.89,5.59-11.62,5.85Z"
              ></path>
              <path
                class="cls-337"
                d="M211.43,166.57c5.24,11.34,14.62,18.19,25.41,23.58,1.97,.98,3.76,2.34,5.63,3.53-7.77-.51-14.96-2.77-20.64-8.2-3.09-2.96-6.46-3.7-10.39-3.43-4.12-8.1-12.56-10.8-19.41-15.48-9.85-4.03-13.76-13.45-19.39-21.31,7.75,4.21,16.66,6.24,22.12,14.5,2.58,3.9,6.91,7.61,12.8,6.79,1.29,0,2.58,.02,3.87,.03Z"
              ></path>
              <path
                class="cls-449"
                d="M273.51,962.87c23.52,.94,46.32-6.6,69.82-5.82-8.66,4.7-18.52,4.64-27.75,5.39-13.96,1.12-27.94,3.73-42.07,2.38,0-.65,0-1.29,0-1.94Z"
              ></path>
              <path
                class="cls-449"
                d="M343.33,957.05c9.85-4.21,20.57-.68,30.71-3.63,6.25-1.82,13.12-1.53,19.71-2.19-16.24,6.84-33.39,5.74-50.41,5.81Z"
              ></path>
              <path
                class="cls-449"
                d="M236.65,968.67c6.8-4.09,14.26-.92,21.34-1.91-6.8,4.08-14.25,.94-21.34,1.91Z"
              ></path>
              <path
                class="cls-155"
                d="M484.88,914.4c-1.26,1.92-2.51,3.84-3.77,5.75-5.16,1.99-10.32,3.98-15.49,5.96-5.16-.63-8.3,2.82-11.72,5.73-3.34-.19-5.02,2.84-7.68,3.97-5.33-.54-10.49,.37-15.57,1.86,0-.64,0-1.27-.01-1.91,4.47-3.73,10.8-2.59,15.44-5.9,.64-.48,1.28-.96,1.92-1.44,7.69,1.18,12.29-4.56,17.92-7.97,.53,.01,1.04-.09,1.53-.29,1.31,0,2.61,.02,3.92,.03,8.28-.91,9.67-9.79,15.58-13.44-.68,2.55-1.36,5.1-2.05,7.65Z"
              ></path>
              <path
                class="cls-97"
                d="M430.63,935.77c0,.64,.01,1.27,.01,1.91-1.95,1.29-3.89,2.59-5.84,3.88-5.83,1.95-11.66,3.9-17.5,5.85-15.74-1.45-30.74,6.12-46.56,3.79,.05-.59,.1-1.19,.14-1.79,3.86-.73,8.16,1.28,11.62-1.89,3.88-.72,8.18,1.07,11.67-1.96,.62-.03,1.24-.08,1.86-.15,9.18-.46,18.8,2.22,27.2-3.83,4.34-.97,8.24-2.81,11.64-5.69l.03-.11h5.73Z"
              ></path>
              <path
                class="cls-90"
                d="M424.81,941.56c1.95-1.29,3.89-2.59,5.84-3.88,5.09-1.48,10.24-2.4,15.58-1.86-6.84,3.03-13.34,7.3-21.42,5.74Z"
              ></path>
              <path
                class="cls-90"
                d="M453.9,931.85c3.42-2.91,6.57-6.36,11.72-5.73-2.72,4.33-6.86,5.76-11.72,5.73Z"
              ></path>
              <path
                class="cls-498"
                d="M597.46,740.06c-1.92,10.34-3.84,20.69-5.76,31.03-4.79,9.97-6.04,21.27-11.69,30.92,0-1.28,0-2.56,0-3.84-.45-4.37,1.41-8.06,2.99-11.99,3.68-9.18,8.02-18.3,6.72-28.68,.31-2.67-.83-5.7,1.91-7.78,3.75-2.13,2.79-7.11,5.83-9.67Z"
              ></path>
              <path
                class="cls-346"
                d="M580.01,798.17c0,1.28,0,2.56,0,3.84-.66,.65-1.32,1.31-1.98,1.96-1.26,.66-2.52,1.31-3.77,1.97-.26-3.34,.3-6.27,3.8-7.78,.65,0,1.3,0,1.95,0Z"
              ></path>
              <path
                class="cls-489"
                d="M597.46,740.06c-3.04,2.56-2.08,7.53-5.83,9.67,.63-3.22,1.27-6.44,1.9-9.66-.02-8.88,7.69-15.95,5.91-25.24,8.18-.97,3.43-11.16,9.66-13.52l.03,.02c-1.94,7.1-3.89,14.2-5.83,21.31-1.95,5.81-3.89,11.62-5.84,17.43Z"
              ></path>
              <path
                class="cls-111"
                d="M593.53,740.07c-.63,3.22-1.27,6.44-1.9,9.66-2.74,2.08-1.6,5.11-1.91,7.78-2.72,8.68-4.99,17.53-8.34,25.96-1.92,4.85-3.81,9.43-3.32,14.7-3.5,1.51-4.06,4.44-3.8,7.78-7.78,21.37-19.02,40.74-33.88,57.99-2.06,2.39-5.02,4.18-5.02,7.86-1.3,1.29-2.6,2.58-3.9,3.86-3.46-5.08,3.79-8.56,2-13.4,4.49-2.66,6.99-6.64,7.83-11.73,8.51-11.19,15.72-23.07,19.38-36.81l-.03-.03c3.89-2.1,5.24-5.67,5.73-9.76,2.63-10.18,11.29-17.91,11.79-28.95l1.82-4c3.31-2.39,4.08-5.8,3.89-9.6l.02-.04c3.49-6.67,4.71-13.96,5.76-21.29l.38,.09c1.17-.03,2.34-.05,3.51-.08Z"
              ></path>
              <path
                class="cls-161"
                d="M533.45,862.27c1.79,4.83-5.46,8.32-2,13.39-10.38,11.35-20.6,22.8-34.48,30.27-3.79,2.04-8.1,4.08-10.1,8.51-.67-.01-1.33-.02-2-.04,.68-2.55,1.36-5.1,2.05-7.65,0,0,.06,0,.06,0,6.29-2.47,12.06-5.61,15.31-11.96,.03-.52,.09-1.04,.18-1.55,13.33-7.33,21.56-19.75,30.98-30.98Z"
              ></path>
              <path
                class="cls-307"
                d="M597.46,464.92c-6.6-6.91-7.64-15.1-6.54-24.28,.82-6.83-.86-13.66-3.14-20.22,1.29,0,2.58,0,3.87-.01,2.96,13.03,5.85,26.07,8.93,39.06,.72,3.06-2.24,3.56-3.12,5.45Z"
              ></path>
              <path
                class="cls-479"
                d="M591.64,420.41c-1.29,0-2.58,0-3.87,.01,0,0-.01-.04-.01-.04,1.42-6.67-5.22-11.46-4-18.3,1.12-6.28-1.24-11.92-5.69-16.58,0-1.93-.01-3.86-.02-5.8l.03-.04c1.28-.63,2.57-1.26,3.85-1.9,2.56,14.37,9.52,27.73,9.7,42.64Z"
              ></path>
              <path
                class="cls-321"
                d="M461.68,267.31c9.52,3.99,19.04,8,28.57,11.97,1.44,.6,2.93,1.06,4.4,1.59,5.16,2.61,11.16,3.53,15.52,7.74,6.53,4.5,9.71,13.23,18.82,14.61,1.9,.29,2.41,2.77,2.53,4.77-4.3-.02-6.93-5.03-11.62-3.89-1.9-3.27-4.45-5.89-7.79-7.71-11.36-7.76-24.31-12.19-36.86-17.46-8.42-5.34-18.31-7.26-27.16-11.61,4.53,0,9.05,0,13.58,0Z"
              ></path>
              <path
                class="cls-479"
                d="M533.48,313.79c7.68,1.04,13.22,4.52,16.77,11.92,5.98,12.48,16.63,22.12,21.94,35.18,1.26,3.08,2,5.91,2.01,9.1,0,0-.03,.03-.03,.03-3.96-4.91-6.85-10.8-10.53-15.52-4.96-6.37-4.29-17.26-14.64-19.39,.89-6.57-2.53-10.77-7.94-13.51-3.53-1.79-6.3-4-7.58-7.81Z"
              ></path>
              <path
                class="cls-309"
                d="M533.48,313.79c1.28,3.81,4.05,6.02,7.58,7.81,5.41,2.73,8.83,6.93,7.94,13.51,0,0-.05,.04-.05,.04-4.19-3.88-9.25-7.17-12.37-11.77-4.85-7.15-14.09-10.32-16.73-19.23l.04-.05c4.69-1.14,7.32,3.87,11.62,3.89,.66,1.93,1.31,3.87,1.97,5.8Z"
              ></path>
              <path
                class="cls-479"
                d="M576.11,370.02c-.18,3.39,.07,6.69,1.98,9.65,0,0-.03,.04-.03,.04-6.18-1.28-3.05-6.28-3.88-9.69,0,0,.03-.03,.03-.03,.64,0,1.27,.02,1.91,.03Z"
              ></path>
              <path
                class="cls-365"
                d="M461.68,267.31c-4.53,0-9.05,0-13.58,0-6.08-.21-12.24,.73-18.14-1.83-7.81-3.39-16.03-4.72-24.54-3.99-4.86,.1-10.12-1.16-13.57,3.88-.04-1.59-.37-3.04-1.94-3.87,1.74-9.63,6.12-14.01,13.8-11.02,18.87,7.36,38.44,11.94,57.97,16.83Z"
              ></path>
              <path
                class="cls-325"
                d="M389.9,261.5c1.57,.83,1.9,2.28,1.94,3.87-1.5,5.14,.94,12.54-7.77,13.56-4.15-1.37-9.13-1.08-11.62-5.79q11.54,2.95,11.64-9.71c1.94-.64,3.87-1.29,5.81-1.93Z"
              ></path>
              <path
                class="cls-468"
                d="M609.1,532.76c3.71,13.93,7.24,27.9,11.18,41.76,3.46,12.16,1.97,24.63,3.15,36.91,1.08,11.23,1.58,22.43,1.05,33.61-.44,9.11-.73,18.38-3.72,27.2,0-5.81-.01-11.62-.02-17.43,0-10.34,0-20.67,0-31.01,0-3.87,0-7.75,0-11.62,1.17-11.71-3.02-22.74-4.98-33.96-2.66-15.18-6.49-30.18-8.58-45.49h.96s.96,.02,.96,.02Z"
              ></path>
              <path
                class="cls-495"
                d="M609.1,532.76l-.96-.02s-.96,0-.96,0c0,0,.03-.04,.03-.04,1.04-6.8-2.42-12.09-5.84-17.4-.59-1.95-1.18-3.9-1.78-5.84,8.22,1.51,6.84,9.61,9.83,14.65,1.85,3.12,2.38,7.03,3.5,10.59-1.28-.65-2.55-1.29-3.83-1.94Z"
              ></path>
              <path
                class="cls-489"
                d="M620.74,654.82c0,5.81,.01,11.62,.02,17.43-1.94,5.82-3.88,11.64-5.82,17.45,0,0-.03-.03-.03-.03-.4-12.01,3.67-23.27,5.83-34.86Z"
              ></path>
              <path
                class="cls-489"
                d="M614.95,689.7c.45,5.07-2.85,8.26-5.82,11.62,0,0-.03-.02-.03-.02-2.85-6.27-.15-9.76,5.82-11.63l.03,.03Z"
              ></path>
              <path
                class="cls-428"
                d="M585.84,466.87c-.09,2.1,.33,4.36-1.71,5.9-2.68-8.41-5.35-16.82-8.03-25.23-.28-1.25-.53-2.51-.86-3.74-2.81-10.66-7.63-21-7.27-32.18,.25-7.79-1.02-15.04-3.48-22.25,0-1.93,0-3.86-.01-5.78,3.07,.8,3.4,4.35,5.82,5.8,6.69,14.26-.32,29.96,5.36,44.81,4.02,10.51,4.86,22.34,10.17,32.68h0Z"
              ></path>
              <path
                class="cls-416"
                d="M576.11,447.54c2.68,8.41,5.35,16.82,8.03,25.23,.55,.65,1.1,1.29,1.65,1.94,1.25,6.02,1.19,12.47,5.83,17.35,.04,3.17,.08,6.33,.11,9.5-.09,.8-.17,1.61-.26,2.41-1.22-3.26-2.55-6.48-3.63-9.79-5.13-15.76-10.22-31.53-16.97-46.69,.55-.02,1.09-.08,1.62-.18,1.2,.08,2.4,.15,3.61,.23Z"
              ></path>
              <path
                class="cls-468"
                d="M591.73,501.56c-.04-3.17-.08-6.33-.11-9.5,.66,0,1.32-.01,1.97-.02,0,0,.02,.03,.02,.03-.46,6.05,1.73,11.11,5.8,15.47,.04,.64,.11,1.28,.19,1.91,.59,1.95,1.19,3.9,1.78,5.84,0,2.58,0,5.17-.01,7.75-.65,0-1.29,0-1.94,0-.66-7.85-4.11-14.7-7.69-21.5Z"
              ></path>
              <path
                class="cls-448"
                d="M593.59,492.05c-.66,0-1.32,.01-1.97,.02-4.64-4.88-4.58-11.34-5.83-17.35,4.26,5.03,7.31,10.61,7.81,17.33Z"
              ></path>
              <path
                class="cls-448"
                d="M599.41,507.55c-4.07-4.36-6.26-9.42-5.8-15.47,2.71,4.87,6.68,9.26,5.8,15.47Z"
              ></path>
              <path
                class="cls-408"
                d="M585.83,466.87c-5.31-10.34-6.15-22.17-10.17-32.68-5.68-14.85,1.34-30.55-5.36-44.81,.02-.66,.04-1.31,.06-1.97,5.33,2.2,2.92,8.23,5.78,11.65,.01,7.1,.03,14.2,.04,21.29,2.35,2.81,.76,7.17,3.81,9.71-.95,12.72,6.7,24.09,5.83,36.8Z"
              ></path>
              <path
                class="cls-331"
                d="M576.15,399.07c-2.86-3.42-.45-9.45-5.78-11.65-2.38-12.3-12.83-20.79-15.56-32.92,1.3,0,2.59,0,3.89,0,7.96,9.85,12.68,21.41,17.45,32.94,.63,3.88,1.25,7.75,1.88,11.63h-.94s-.94,0-.94,0Z"
              ></path>
              <path
                class="cls-239"
                d="M578.02,399.06c-.63-3.88-1.25-7.75-1.88-11.63,.64-.65,1.29-1.29,1.93-1.94,4.45,4.66,6.81,10.3,5.69,16.58-1.22,6.85,5.42,11.64,4,18.3-1.29,.65-2.57,1.3-3.86,1.94-3.42-7.38-6.75-14.79-5.88-23.26Z"
              ></path>
              <path
                class="cls-331"
                d="M580,430.07c-3.05-2.54-1.46-6.89-3.81-9.71,6.16,1.32,3.02,6.28,3.81,9.71Z"
              ></path>
              <path
                class="cls-374"
                d="M104.72,418.45c5.13,15.88,1.41,30.35-8.61,42.85-2.67,3.33-5.08,5.49-5.1,10.08-.03,7.58-5.41,11.64-11.5,14.87-3.75,7-13.43,9.85-13.56,19.38-.03,.65-.04,1.29-.05,1.94-2.25,1.4-1.85,3.68-1.93,5.8-5.1,6.37-7.08,14.52-8.48,21.82-6.88,35.83-16.53,71.88-1.21,108.03,0,3.87,0,7.74,0,11.6-.65,0-1.3,0-1.95,0-.17-12.64-6.74-23.72-8.5-36.21-2.33-16.59-.25-32.58,1.9-48.63,.97-7.22-1.33-14.92,2.71-21.72,3.53-2.99,1.67-7.29,2.52-10.92,5.11-21.66,14.01-41.55,26.62-59.85,6.59-9.57,12.35-19.43,21.09-27.77,8.24-7.87,6.32-20.31,6.03-31.25Z"
              ></path>
              <path
                class="cls-240"
                d="M52.35,654.81c.65,0,1.3,0,1.95,0,.96,1.56-.18,7.43,4.15,2.12,1.94-2.38,3.06-5.03,3.88-8.25,1.91-7.58,0-15.69,3.61-22.92,.25,7.58,1.26,15.26,1.28,22.65,.03,9.73,6.19,18.04,4.53,27.71-7.84,1.04-10.03-6.94-15.51-9.68-4.32-2.87-5.94-6.63-3.88-11.63Z"
              ></path>
              <path
                class="cls-320"
                d="M71.74,676.12c1.66-9.66-4.5-17.97-4.53-27.71-.02-7.38-1.02-15.07-1.28-22.65,3.06-12.63,.74-25.58,2.18-38.22,1.5-13.13-.55-26.84,5.57-39.32,3.01-2.45,1.48-5.89,1.98-8.9,.95-5.75,.2-12.13,5.79-16.23-2.93,8.21-1.69,16.73-1.94,25.15-4.12,6.8-.94,14.25-1.92,21.33-4.1,16.33-5.89,32.81-6.29,49.75-.37,15.65-.52,30.76,6.27,45.2-.1,11.34,9.98,17.59,13.56,27.09-7.7,2.23-12.17-1.91-15.24-8.1-1.27-2.55-1.64-5.54-4.15-7.39Z"
              ></path>
              <path
                class="cls-308"
                d="M91.13,691.6c-3.59-9.5-13.66-15.76-13.56-27.09,4.07-.83,6.65,2.11,9.7,3.85,1.3,0,2.59,0,3.89,.01-.19,4.18,.79,7.48,5.82,7.75h0c.92,2.4-3.91,6.34,.54,7.03,4.94,.77,2.71-4.35,3.33-7.03,.84-1.56,2.28-1.9,3.88-1.93,0,.64,.01,1.29,.02,1.93-.31,14.02-2.56,16.58-13.62,15.48Z"
              ></path>
              <path
                class="cls-276"
                d="M110.51,596.68c-.63,0-1.27,.01-1.9,.02,0-6.46-.02-12.92-.03-19.38,.02-14.85,.03-29.71,.05-44.56,2.59-2.71,3.03-6.27,3.86-9.68,1.25,1.27,2.49,2.53,3.74,3.8,.04,3.25,.09,6.5,.13,9.76-3.58,19.86-3.48,40.07-5.85,60.05Z"
              ></path>
              <path
                class="cls-369"
                d="M110.51,596.68c2.37-19.98,2.27-40.19,5.85-60.05,.66,0,1.31,0,1.97,0,.07,3.85,.13,7.7,.19,11.55-1.15,18.12,2.28,36.59-4.13,54.32-3.62,2.29-.22,7.26-3.67,9.62-.07-5.14-.14-10.28-.21-15.43Z"
              ></path>
              <path
                class="cls-275"
                d="M108.59,577.32c0,6.46,.02,12.92,.03,19.38-.01,14.84-.02,29.69-.03,44.53-3.11-1.67-.71-6.08-3.86-7.73,0-6.12,0-12.25,0-18.37,.03-12.73-.72-25.54,3.85-37.81Z"
              ></path>
              <path
                class="cls-456"
                d="M110.72,612.11c3.45-2.36,.06-7.32,3.67-9.62,.65,3.24,1.31,6.48,1.96,9.71-4.09,9.25-1.72,19-1.55,28.44,.09,4.76-.04,9.45-.39,14.17,0,0-.96,0-.96,0,0,0-.96,.01-.96,.01,1.2-14.32-3.22-28.4-1.77-42.72Z"
              ></path>
              <path
                class="cls-308"
                d="M104.73,633.5c3.14,1.65,.74,6.07,3.86,7.73,.02,.66,.04,1.31,.06,1.97,0,3.22-.01,6.44-.02,9.66,0,0-.02,.04-.02,.04-1.56,.83-1.89,2.27-1.95,3.86-1.55-.84-1.88-2.29-1.92-3.88l-1.94-19.37c.65,0,1.3,0,1.94,0Z"
              ></path>
              <path
                class="cls-275"
                d="M106.65,656.75c.06-1.59,.39-3.03,1.95-3.86,0,5.65,0,11.29,.01,16.94,0,2.91,.11,5.84-3.86,6.3-.01-.64-.02-1.29-.02-1.93,3.88-5.46,1.09-11.65,1.92-17.45Z"
              ></path>
              <path
                class="cls-275"
                d="M108.62,652.86c0-3.22,.01-6.44,.02-9.66,2.8,3.23,2.83,6.44-.02,9.66Z"
              ></path>
              <path
                class="cls-310"
                d="M120.25,151.05c.28-2.99-.44-5.88-2.23-8.13-9.42-11.89-11.57-25.74-11.36-40.3-.08-3.31,.47-8.2,3.26-8.18,4.33,.03,11.45,1.85,12.42,4.64,2.64,7.62,9.8,10.84,13.41,17.11-6.19,.63-8.69-5.5-13.65-7.6-6.74-2.85-9.62,.68-9.16,4.96,.99,9.13,1.62,18.91,9.23,25.89,.08,2.13-.33,4.43,1.95,5.82-1.19,4.7,3.84,7.32,3.89,11.61l-.02,.02c-2.58-1.95-5.16-3.89-7.74-5.84Z"
              ></path>
              <path
                class="cls-310"
                d="M143.54,182.06c0,1.93-.01,3.86-.02,5.79-7.03-9.4-13.01-19.32-15.52-30.97,0,0,.02-.02,.02-.02,1.94,1.29,3.87,2.59,5.81,3.88,.91,8.17,6.12,14.37,9.71,21.32Z"
              ></path>
              <path
                class="cls-157"
                d="M122.17,484.36c-3.34-17.28-1.33-35-3.98-52.28-3.9-25.43-7.46-51.22-28.77-69.52-6.95-5.97-12-13.25-15.71-21.55,4.46-.15,6.22,4.21,9.65,5.78,5.04,10.45,15.17,16.76,22.46,25.27,4.94,5.77,4.12,12.02,7.49,16.38,5.63,7.28,6.2,15.04,6.96,23.23,.53,5.65,1.08,11.32,3.88,16.44,0,.64,.01,1.29,0,1.93,.77,5.79-1.87,11.93,1.82,17.41-.02,16.16-.04,32.33-.06,48.49-.59,0-1.19,0-1.78,.02-.67-3.86,1.56-8.22-1.97-11.6Z"
              ></path>
              <path
                class="cls-171"
                d="M83.36,346.78c-3.43-1.57-5.19-5.93-9.65-5.78-4.31-13.8-3.07-26.42,7.82-37.02,2.64-.72,5.27-1.43,7.9-2.15,3.17,1.06,6.95-.71,9.76,2.09-4.13,.88-9.36-1.45-11.91,4.06-.08,.61-.14,1.23-.18,1.84-14.11,7.14-15.3,17.22-3.64,30.93,.61,3.17,4.12,3.52,5.65,5.8-1.92,.08-3.84,.15-5.76,.23Z"
              ></path>
              <path
                class="cls-430"
                d="M118.33,536.62c-.66,0-1.31,0-1.97,0-.04-3.25-.09-6.5-.13-9.76,.05-7.09,.1-14.17,.16-21.26,1.79-10-2.38-18.56-6.84-26.94-2.33-4.39-3.26-8.88-2.85-13.74,1.92-.66,3.84-1.31,5.76-1.97-4.08,7.03-1.18,12.49,3.92,17.47,2.22,10.21,4.41,20.42,3.94,30.97-.39,8.43,.92,16.99-1.99,25.22Z"
              ></path>
              <path
                class="cls-340"
                d="M116.38,480.43c-5.1-4.97-8.01-10.44-3.92-17.46,.1-10.49,.39-21-3.8-30.97-.06-10.31-.12-20.62-.19-30.93,6.26,5.28,3.19,12.94,3.4,18.91,.71,20.24,4.72,40.19,4.5,60.45Z"
              ></path>
              <path
                class="cls-426"
                d="M118.33,536.62c2.91-8.23,1.6-16.79,1.99-25.22,3.92-8.79,.95-18.05,1.85-27.04,3.53,3.38,1.3,7.73,1.97,11.6,0,10.33,0,20.66,0,30.98-4.21,6.46,.17,15.18-5.6,21.23-.06-3.85-.13-7.7-.19-11.55Z"
              ></path>
              <path
                class="cls-259"
                d="M81.45,523.09c-5.59,4.1-4.85,10.48-5.79,16.23-.5,3.01,1.04,6.45-1.98,8.9-1.88-5.13-2.36-10.26,.2-15.3,1.38-2.72,1.52-5.32-.18-7.92,.73-1.85,2.03-3.14,3.86-3.9,6.72-5.97,15.78-10.23,15.53-21.28h0c3.34-1.84,6.25-3.67,2.33-7.84-1-1.06-1.54-3.01-1.48-4.52,.14-3.8,.08-8.67,4.17-9.91,4.13-1.25,5.86,3.18,7.24,6.36,1.4,3.22,2.19,6.7,3.25,10.07-3.53,3.63-8.13,6.38-9.7,11.64-4.51,7.14-10.37,12.92-17.47,17.47Z"
              ></path>
              <path
                class="cls-401"
                d="M65.96,505.63c.12-9.53,9.81-12.38,13.56-19.38,11.24-.51,12.68,.93,13.58,13.57,0,0,0,0,0,0-2.36,2.23-4.48,4.79-7.76,5.8,.28-4.69-1.6-8.18-6.23-9.36-4.83-1.23-6.75,1.88-7.89,6.03-.67,2.41-2.87,3.21-5.25,3.34Z"
              ></path>
              <path
                class="cls-437"
                d="M98.92,505.62c1.57-5.26,6.17-8,9.7-11.64,5.23,2.12,4.32,8.33,7.77,11.64-.05,7.09-.1,14.17-.16,21.26-1.25-1.27-2.49-2.53-3.74-3.8-1.63-2.84-2.24-5.91-1.93-9.13,.92-9.51-4.02-10.78-11.65-8.32Z"
              ></path>
              <path
                class="cls-459"
                d="M108.66,432c4.19,9.96,3.9,20.48,3.8,30.97-1.92,.65-3.84,1.31-5.76,1.96-5-2.55-4.07-6.37-2.6-10.65,2.48-7.21,5.55-14.35,4.57-22.28Z"
              ></path>
              <path
                class="cls-134"
                d="M145.45,288.61c4.78-9.44,16.42-12.01,21.37-21.28,0,0,.01-.01,.01-.01,6.39-3.2,9.24-8.6,9.69-15.5,2.91-4.15,1.79-8.95,2.44-13.5,.92-6.41,2.43-14.88,10.61-14.37,8.59,.54,17.17,.13,25.73,.75,5.53,5.26,5.18,11.19,1.96,17.44-.01-1.61,.08-3.23-.05-4.84-.84-10.22-8.76-6.3-14.1-6.63-6.86-.42-5.47,5.06-4.94,8.95,1.65,12.21,1.79,12.19,17.13,12.19,1.04,8-1.1,14.91-6.36,21.14-5.88,6.96-11.31,14.3-16.94,21.47-3.87,0-7.75,0-11.62,.01,0-.64,0-1.29,0-1.93,.65,0,1.29,0,1.94,0,5.83,.35,10.66-.82,11.64-7.74,3.98-2.11,5.12-6.5,7.76-9.69,2.47-7.36-.72-12.43-7.64-13.63-7-1.22-15.85-5.23-19.52,5.88-.65,.65-1.3,1.29-1.94,1.94-3.83,.53-4.9,4.16-7.14,6.08-5.98,5.14-7.81,17.56-20.03,13.29Zm46.57-49.33c0-2.25,.1-4.5-.03-6.74-.1-1.79,.6-4.4-1.91-4.79-2.97-.46-3.28,2.21-3.87,4.4-1.16,4.32-2.8,8.53-3.63,12.9-.78,4.11,2.38,5.82,5.72,6.23,3.84,.47,3.62-2.72,3.7-5.27,.08-2.24,.02-4.49,.02-6.74Z"
              ></path>
              <path
                class="cls-99"
                d="M145.45,288.61c12.22,4.28,14.05-8.15,20.03-13.29,2.24-1.92,3.31-5.55,7.14-6.08-.31,.56-.7,1.09-.9,1.68-1.91,5.46-.52,12.75-9.92,13.58-2.73,.24-1.77,4.57,1.59,6.31,5.49,2.83,11.32,1.22,16.99,1.68,0,.64,0,1.29,0,1.93-1.51,.36-3.66,.22-4.4,1.18-1.42,1.84,.68,2.76,2.04,3.32,4.46,1.84,8.92,3.77,13.95,3.17,.6,.47,1.19,.94,1.79,1.41-6.94,.13-13.88,.27-20.83,.4-16.75-3.48-33.69-1.01-50.53-1.53-5.24-.16-10.88-1.83-15.85,1.61-2.46-.02-4.91-.04-7.37-.06-2.8-2.8-6.58-1.03-9.76-2.09,10.91-9.72,25.02-6.73,37.69-8.95,6.25-1.1,12.51-1.54,18.33-4.27Z"
              ></path>
              <path
                class="cls-164"
                d="M162.92,267.29c2.59-5.81,5.18-11.61,7.78-17.42,3.99-5.92,.48-13.34,3.88-19.37,.65,.65,1.3,1.29,1.95,1.94,0,2.58-.01,5.16-.02,7.74-2.59,9.27-4.65,18.73-9.67,27.14,0,0-.01,.01-.01,.01-1.3-.01-2.6-.02-3.9-.04Z"
              ></path>
              <path
                class="cls-461"
                d="M120.25,288.63c7.45-3.17,15.4-4.35,23.29-5.79-6.3,7.8-15.18,5.26-23.29,5.79Z"
              ></path>
              <path
                class="cls-164"
                d="M153.29,273.15c1.92-4.06,4.97-6.27,9.63-5.86-1.99,3.95-4.98,6.26-9.63,5.86Z"
              ></path>
              <path
                class="cls-487"
                d="M174.57,230.5c-3.4,6.04,.12,13.46-3.88,19.37,0-9.61-.08-19.22,.03-28.83,.14-12.57,5.78-15.64,18.11-17.06,10.09-1.17,17.67,3.64,26.47,5.22,8.87,3.47,17.74,6.96,26.62,10.41,4.12,1.6,9.77,2.21,9.78,7.8,0,6.17-6.46,4.99-10.22,6.79-.8,.39-1.91,.14-2.88,.18,1.81-6.66,2.01-9.36-6.74-13.78-9.85-4.97-22.49-2.61-30.23-12.17-1.66-2.05-5.34-2.08-7.67,.73-.64,0-1.29,.01-1.93,.01-12.93-4.82-21.78,3.64-17.46,21.3h0Z"
              ></path>
              <path
                class="cls-473"
                d="M238.6,234.39c.97-.04,2.08,.21,2.88-.18,3.76-1.81,10.23-.62,10.22-6.79,0-5.6-5.65-6.2-9.78-7.8-8.88-3.45-17.75-6.94-26.62-10.41,0-.65,0-1.3,0-1.95,13.48,.11,23.89,9.93,36.87,11.61,9.03,7.7,9.03,8.17-.01,15.62-4.43,2.12-9.84,1.94-13.56,5.72-7.18,2.33-11.94,14.67-9.72,25.18-8.12-9.64-2.46-27.75,9.7-31,0,0,.02,.02,.02,.02Z"
              ></path>
              <path
                class="cls-396"
                d="M176.51,182.05c-.65-1.93-1.29-3.87-1.94-5.8,2.58-.29,5.16,4.65,7.74,0,1.72,3.1,3.83,5.67,7.77,5.82,1.75,3.23,4.53,4.58,7.96,6.04,13.5,5.79,26.16,13.28,38.63,21.05l-.04,.05c-16.92-1.39-29.39-12.78-43.64-19.98-5.42-2.74-11.29-4.15-16.48-7.18Z"
              ></path>
              <path
                class="cls-396"
                d="M252.16,234.48c9.04-7.45,9.05-7.92,.01-15.62-3.12-6.53-11.56-4.51-15.54-9.65,0,0,.04-.05,.04-.05,2.58,0,5.16,.02,7.74,.03,8.34,5.38,21.28,6.59,19.38,21.28-.61,.68-1.22,1.36-1.82,2.03-.09,.59-.19,1.17-.31,1.75-3.15,.71-6.3,1.42-9.46,2.13-.02-.64-.03-1.27-.03-1.91Z"
              ></path>
              <path
                class="cls-329"
                d="M143.54,182.06c-3.59-6.95-8.81-13.15-9.71-21.32-1.63-6.16-5.85-10.71-9.69-15.49-2.28-1.39-1.87-3.69-1.95-5.82-.1-1.92-.04-3.87-.33-5.76-.49-3.21-3.88-7.13,.93-9.18,3.93-1.68,8.44-.92,11.75,2.18,2.06,1.93,3.44,4.6,5.12,6.94-3.81,.08-4.41,3.34-5.81,5.82-1.89,11.93,4.77,21.19,9.71,30.99,.59,3.88,2.62,7.53,1.9,11.63-.64,.01-1.27,.02-1.91,.02Z"
              ></path>
              <path
                class="cls-424"
                d="M143.55,170.42c-4.95-9.8-11.6-19.05-9.71-30.99,2.8,.17,6.61-.98,8,1.81,4.95,9.9,18.17,10.67,22.65,21.49,1.53,3.69,7.36,5.66,11.33,8.27,2.36,1.55,5.37,2.22,6.5,5.25-2.58,4.64-5.16-.29-7.74,0-2.57,.07-5.72,.19-6.83-2.24-4.37-9.52-12.73-7.29-20.34-7.45-1.28,1.29-2.57,2.57-3.85,3.86Z"
              ></path>
              <path
                class="cls-348"
                d="M135.76,116.18c-3.61-6.27-10.77-9.49-13.41-17.11-.96-2.78-8.09-4.6-12.42-4.64-2.79-.02-3.34,4.87-3.26,8.18-9.85-7.36-.58-13.81,1.66-20.05,.87-2.43,5-.97,8.36,1.93,13.58,11.73,23.65,27.49,40.41,35.56-.25,6.97,2.37,12.41,8.81,15.5,3.65,1.76,4.48,4.21,2.83,7.74-5.95-2.98-8.77-11.59-17.45-9.67-6.26-4.85-12.48-9.74-15.54-17.45Z"
              ></path>
              <path
                class="cls-277"
                d="M151.3,133.63c8.67-1.92,11.49,6.7,17.45,9.67,1.3,.65,2.59,1.3,3.89,1.95,5.63,7.86,9.54,17.28,19.39,21.31,0,1.29,0,2.58,0,3.87-4.84,.47-6.92-3.03-10.02-5.91-6.64-6.18-10.14-15.45-19.08-19.26h0c-3.87-3.88-7.74-7.76-11.62-11.64Z"
              ></path>
              <path
                class="cls-456"
                d="M114.42,662.56c-.97,7.08,2.16,14.52-1.92,21.32,.97-7.08-2.17-14.52,1.92-21.32Z"
              ></path>
              <path
                class="cls-425"
                d="M124.13,526.94c0-10.33,0-20.66,0-30.98,.59-.01,1.19-.02,1.78-.02,.06,31,.13,62,.19,93,0,0-.01,.03-.01,.03-3.55,12.22-2.63,24.48-.29,36.74,1.05,12.37-1.33,24.58-1.78,36.89-3.56,4.1-1.07,9.04-1.9,13.52-1.25,.03-2.51,.06-3.76,.09,2.42-14.35,1.89-28.83,1.83-43.28-.01-3.09,1.09-6.54-1.86-9.08,.01-.67,.02-1.34,.03-2.01,1.41-1.06,1.45-2.66,1.94-4.19,3.05-9.59-2.41-19.66,1.88-29.22,2.13-4.75,2.03-9.97,1.99-15.15-.12-15.44-.05-30.89-.05-46.33Z"
              ></path>
              <path
                class="cls-255"
                d="M124.13,526.94c0,15.44-.07,30.89,.05,46.33,.04,5.18,.14,10.41-1.99,15.15-4.29,9.56,1.17,19.63-1.88,29.22-.49,1.53-.53,3.13-1.94,4.19-.59-3.23,1.25-6.96-2.01-9.63-.65-3.24-1.31-6.48-1.96-9.71,6.4-17.72,2.98-36.19,4.13-54.32,5.78-6.05,1.4-14.77,5.61-21.23Z"
              ></path>
              <path
                class="cls-79"
                d="M91.14,835c1.61-4.91,1.13-11.31,8.74-11.91,1.71-.13,1.36-1.63,1.4-2.94,.42-15.38,4.29-29.86,10.14-44.11,1.87-4.56,2.24-10.2,.33-16.3-3.35-10.73-1.23-22.14,3.09-32.64,1.17-2.84,1.4-5.48,1.51-8.33,.64-.66,1.28-1.31,1.92-1.97,0,0,.05,.05,.05,.05-1.3,21.95-2.6,43.9-3.9,65.85h0c-3.24,2.72-1.47,6.42-1.94,9.69h0c-5.57,7.21-3.92,16.55-6.78,24.72-2.38,6.8-4.66,14.78-4.79,24.14-.36-9.32-5.29-7.34-9.77-6.24Z"
              ></path>
              <path
                class="cls-79"
                d="M118.37,676.21c1.25-.03,2.51-.06,3.76-.09-2.32,13.49-1.87,27.1-1.9,40.69-.63,0-1.26,0-1.89,.03,0,0-.05-.05-.05-.05,.03-13.53,.05-27.06,.08-40.58Z"
              ></path>
              <path
                class="cls-103"
                d="M91.14,835c4.49-1.11,9.41-3.09,9.77,6.24,.13-9.35,2.41-17.33,4.79-24.14,2.86-8.18,1.21-17.51,6.78-24.72,1.57,9.83,4.37,19.87-.53,29.37-4.1,7.94-5.33,16.2-5.3,24.87-5.4,3.87-2.54,10.82-5.8,15.49-3.23,4.53-6.46,9.07-9.68,13.6-3.5,1.13-6.37-5.98-9.04-1.91-3.81,5.81-10.22,10.93-8.44,19.32l.02,.02c-.65,0-1.3-.02-1.95-.02-.24-1.78-.51-3.29-2.66-1.25-1.76,1.68-3.63,1.39-4.57-.77-.71-1.62,.92-2.5,1.94-3.74,7.46-9.11,11.76-19.83,14.97-31.03,.31-4.69,7.7-5.85,5.82-11.63,.83-3.42,1.26-7,3.88-9.7Z"
              ></path>
              <path
                class="cls-13"
                d="M36.88,982.37c-.05-2.69-.1-5.38-.15-8.07,2.17-15.45,10.33-29.01,13.86-44.03,1.19-.17,2.38-.34,3.57-.51,.03,.7,.06,1.4,.09,2.1-.66,1.38-1.55,2.69-1.94,4.14-4.2,15.78-12.06,30.33-15.43,46.38Z"
              ></path>
              <path
                class="cls-38"
                d="M54.16,929.75c-1.19,.17-2.38,.34-3.57,.51-.08-.78-.16-1.56-.24-2.34,.45-5.3,1.11-10.45,7.74-11.65,.04,1.34,.08,2.68,.13,4.02-1.35,3.15-2.7,6.31-4.05,9.46Z"
              ></path>
              <path
                class="cls-38"
                d="M91.17,875.71c3.23-4.53,6.46-9.07,9.68-13.6,1.31,.04,2.63,.08,3.95,.12-.65,1.93-1.3,3.86-1.95,5.8-6.08,8.09-9.07,19.2-21.08,21.49-2.51,.45-3.82,2.15-4.17,4.48-1.08,7.16-5.46,11.6-11.69,14.6,.67-6.13,7.12-9.34,7.81-15.46,0,0-.02-.02-.02-.02,5.83-5.8,11.65-11.61,17.48-17.41Z"
              ></path>
              <path
                class="cls-18"
                d="M65.91,908.61c6.23-3,10.62-7.44,11.69-14.6,.35-2.33,1.66-4.03,4.17-4.49,2.25,3.73-.33,6.59-1.51,9.87-3.36,9.4-13.37,12.82-18.2,20.81l-.06,.04-3.79,.05c-.04-1.34-.08-2.68-.13-4.02,.64-.64,1.29-1.27,1.93-1.91,3.93,.08,5.69-2.03,5.89-5.75h0Z"
              ></path>
              <path
                class="cls-38"
                d="M65.91,908.61c-.2,3.72-1.96,5.84-5.89,5.75,.34-3.57,2.26-5.54,5.89-5.75Z"
              ></path>
              <path
                class="cls-144"
                d="M36.88,982.37c3.37-16.05,11.23-30.6,15.43-46.38,.39-1.45,1.28-2.76,1.94-4.14,6.1-1.53,4.62-8.11,7.75-11.61,0,0,.06-.04,.06-.04,12.29-1.09,2.29,6.83,4.05,10-11.89,24.34-21.31,49.58-27.62,75.95-.61,.44-1.22,.87-1.82,1.31-2.38,.52-.73,6.65-5.45,3.9,1.89-9.66,3.77-19.33,5.66-29Z"
              ></path>
              <path
                class="cls-45"
                d="M31.22,1011.37c4.72,2.75,3.08-3.38,5.45-3.9-.04,2.98,1.36,6.9-2.24,8.21-2.63,.96-3.15-2.05-3.21-4.31Z"
              ></path>
              <path
                class="cls-61"
                d="M351.08,951.45c-5.6,2.59-11.71,2.96-17.66,3.57-26.68,2.76-53.49,2.57-80.22,1.77-11.15-.33-21.27,3.62-32.02,4.8-19,2.08-37.56-.61-56.31-.67-.02-1.33-.04-2.65-.07-3.98,7.09-4.31,15.16-5.42,23.06-5.45,54.41-.22,108.81-.07,163.22-.04Z"
              ></path>
              <path
                class="cls-170"
                d="M351.08,951.45c-54.41-.03-108.82-.18-163.22,.04-7.9,.03-15.97,1.15-23.06,5.46-7.69-.08-15.36-.11-21.39,5.85-3.24,.48-6.91-1.03-9.61,2.03-4.68-.31-8.89,3.02-13.69,1.76,1.6-3.44,4.82-3.32,7.92-3.9,4.87-.92,9.89-1.76,13.7-5.45,2.09-.2,4.38,.29,5.93-1.73,.56-.05,1.12-.14,1.67-.27,5.55-.04,10.78-1.4,15.73-3.85,8.7,1.04,16.09-5.88,24.92-4.08,14.93,0,29.86,.02,44.79,.02,.6,.07,1.21,.14,1.81,.19,1.11,.56,2.23,1.59,3.35,1.6,25.61,.11,51.23,.13,76.84,.05,1.12,0,2.24-1.02,3.36-1.57,8.36,0,16.72,0,25.08-.01,4.88,3.35,10.38,.96,15.54,1.69l.13,.14c-.04,.6-.09,1.19-.14,1.79-3.22,.08-6.45,.17-9.67,.25Z"
              ></path>
              <path
                class="cls-81"
                d="M120.11,966.58c4.8,1.26,9.01-2.07,13.69-1.76-2.58,2.58-5.16,5.15-7.73,7.73-7.72,.82-13.18,7.82-21.23,7.75,.57-1.98,1.14-3.96,1.72-5.94,.14-.55,.22-1.11,.22-1.68,0,0,.08,.09,.08,.09s.92,0,.92,0l.91-.15c3.08-.38,7.3,1.28,7.54-4.2,1.3-.62,2.59-1.23,3.89-1.85Z"
              ></path>
              <path
                class="cls-61"
                d="M126.07,972.55c2.58-2.58,5.16-5.15,7.73-7.73,2.7-3.05,6.36-1.55,9.61-2.02,1.98,.03,3.95,.05,5.93,.08-7.76,3.22-15.52,6.45-23.28,9.67Z"
              ></path>
              <path
                class="cls-81"
                d="M149.34,962.87c-1.98-.03-3.95-.05-5.93-.08,6.03-5.96,13.7-5.94,21.39-5.85,.02,1.32,.04,2.65,.07,3.98-.65,.01-1.3,.02-1.94,.03-4.51,.72-9.49-1.79-13.58,1.92h0Z"
              ></path>
              <path
                class="cls-61"
                d="M149.35,962.87c4.09-3.71,9.06-1.2,13.58-1.92-4.09,3.68-9.07,1.17-13.58,1.92Z"
              ></path>
              <path
                class="cls-6"
                d="M130.12,368.07c5.53,8.38,7.9,17.56,7.89,27.61-.1,138.02-.06,276.04-.23,414.06-.02,16.14-1.92,32.11-9.58,46.79,.2-1.88,.32-3.78,.61-5.66,2.38-15.65,6.66-30.64,4.79-46.9,.06-47.18-3.62-84.55-3.61-131.73,0-3,6.75-16.7,1.94-17.42,0-4.16,.29-8.36-.08-12.49-.89-10.05,2.3-20.36-1.89-30.19-.73-4.56,1.43-9.51-1.87-13.72-1.37-4.69,2.65-8.26,2.44-12.89-2.15-47.91,2.3-95.77,1.21-143.68,.04-14.48,.29-28.97,0-43.44-.1-4.94,1.95-10.31-1.82-14.85-.65-2.58-1.31-5.17-1.96-7.75,0-2.58,0-5.16,0-7.74,.71,0,1.43,0,2.14,0Z"
              ></path>
              <path
                class="cls-120"
                d="M535.25,413.2c-17.15-21.49-36.11-41.05-59.19-56.35-35.89-23.79-74.7-35.6-118.39-35.73-84.91-.26-169.81-3.17-254.71-4.92-4.52-.09-10.65-2.24-11.55,5.02-.78,6.29-1.6,13.05,7.19,15.67,2.77,.83,6.63,.46,8.33,3.95-2.67,.03-5.34,.06-8.01,.08-.99-.79-1.86-2.01-2.98-2.31-11.35-3-9.14-12.3-7.69-19.45,1.51-7.48,9.24-5.42,14.77-5.33,21.56,.35,43.08-.01,64.67,1.51,32.43,2.28,65.01,.59,97.57,1.68,37.64,1.26,75.35,3.68,113.05,2.44,21.88-.72,41.58,6.56,61.37,14.26,9.59,3.73,17.74,10.45,27.85,13.02h-.02c1.48,3.51,4.45,4.08,7.8,3.89,1.96,.63,3.91,1.26,5.87,1.89,8.65,2.15,14.58,8.47,21.18,13.77,.65,.62,1.3,1.25,1.95,1.87,3.24,3.21,4.67,8.24,9.73,9.61,2.7,.14,4.78,1.24,5.91,3.81-.33,3.97-.13,7.96,3.56,10.3,6.27,3.98,10.11,10.44,15.85,14.91,.62,1.33,1.25,2.65,1.87,3.98,.81,7.68-3.65,2.45-5.98,2.43Z"
              ></path>
              <path
                class="cls-21"
                d="M232.79,823.38c-2.24-8.8-3.11-17.78-3.12-26.82-.09-125.43-.18-250.85-.09-376.28,0-7.6,.74-15.46,6.8-21.37,.73,.09,1.46,.18,2.18,.27-5.12,8.43-5.77,17.85-5.77,27.32-.04,123.18-.04,246.35,.02,369.53,0,6.59-1.79,15.43,1.66,19.29,6.06,6.78,4.55,13.04,3.95,20.04-3.16-3.39-1.87-8.86-5.63-11.96Z"
              ></path>
              <path
                class="cls-24"
                d="M238.56,399.18c-.73-.09-1.46-.18-2.18-.27,5.3-8.11,13.6-10.6,22.44-10.92,29.57-1.05,59.16-2.05,88.67,1.34,14.75,1.69,29.11,4.83,42.47,11.59,6.47,6.6,12.66,13.55,21.3,17.51,7.37,6.3,13.88,13.38,19.42,21.34,.4,3.74,2.57,6.13,5.85,7.69,13.79,17.54,24.95,36.52,31.51,57.98-6.07-.28-2.72-8.82-8.34-9.49-1.78-5.96-7.59-7.92-11.6-11.67-6.63-6.12-6.91-16.72-15.29-21.61,1.87-12.51-10.55-15.3-15.71-23.04l-2.07-7.52c-1.3-3.68-3.09-6.72-7.81-5.83-3.38-6.74-10.51-9.49-15.92-13.75-9.28-7.3-18.96-15.59-32.5-13.4-1.24-.07-2.48-.15-3.73-.22-1.97-1.24-3.94-2.48-5.91-3.72,2.49-.46,5.3,.85,8.42-1.49-18.7-2.94-36.54-4.23-54.55-4.53-13.26-.22-26.29,2.54-39.44,1.96-9.6-.43-17.74,2.09-25.04,8.03Z"
              ></path>
              <path
                class="cls-9"
                d="M459.7,495.96c5.62,.67,2.27,9.21,8.34,9.49,4.34,6.44,5.54,13.97,7.42,21.26-.52,3.89,.32,7.56,1.15,11.39,4.59,21.34,7.83,42.9,8.12,64.76,.4,30.55-2.76,60.84-8.05,90.89-2.25,12.75-6.02,25.15-13.11,36.92v-11.92c.07-2.55,.14-5.1,.2-7.65,9.69-9.87,10.16-22.27,9.62-34.95,3.66-4.56,1.28-9.98,2.07-14.95,4.66-29.39,4.83-58.96,1.25-88.4-1.08-8.91-1.18-18.73-7.37-26.49-.57-4.53,1.77-9.45-1.81-13.59h0c-.45-3.26,1.31-6.97-1.99-9.63l-1.87-2.01-3.96-25.13Z"
              ></path>
              <path
                class="cls-66"
                d="M135.53,803.87c1.87,16.26-4.33,31.36-6.71,47.01-.28,1.87-.41,3.77-.61,5.66-3.16,10.5-9.49,18.35-19.43,23.17-2.1,.35-4.21,.7-8.44,1.41,10.63-12.64,23.05-23.02,17.85-40.4,7.88-22.56,9.73-45.97,9.84-69.63,3.39-3.35,1.19-7.71,2.06-11.51,.59-.06,1.19-.11,1.78-.15,0,12.34,2.25,23.05,2.35,35.39,.03,2.91-.62,7.25,1.3,9.06Z"
              ></path>
              <path
                class="cls-141"
                d="M575.37,494.34c-2.46-2.9-1.86-6.75-3.09-10.03,1.27-1.29,2.54-2.58,3.81-3.86,.09,2.74,1.32,4.72,3.89,5.81,2.59,7.14,5.18,14.27,7.77,21.41,.44,3.23-1.25,6.88,1.91,9.56,.12,.62,.16,1.25,.12,1.89-.33,6.19,.47,12.12,3.83,17.5,2.13,3.62,1.7,7.66,1.96,11.59,.65,14.88,1.3,29.76,1.96,44.63-.03,3.23-.05,6.45-.08,9.68-3.54,3.79-1.41,8.44-1.9,12.68-1.06,9.26,1.96,18.8-1.88,27.88,0-10.54,.38-21.1-.13-31.61-.33-6.81,2.19-13.97-1.85-20.45-2.02-19.35-4.05-38.7-6.07-58.05-.23-3.29,1.91-7.12-2.18-9.54-2.09-5.06-3.65-10.25-3.62-15.79,.02-4.94,1.47-10.35-4.46-13.31Z"
              ></path>
              <path
                class="cls-54"
                d="M550.62,807.58c-.08-3.09,1.87-5.29,3.38-7.69,6.67-3.98,7.7-10.63,8.32-17.48,7.35-20.42,13.99-41.07,19.4-62.09,4.81-5.47,2.86-13.08,6.03-19.07,.64,.06,1.27,.12,1.91,.17,.04,6.38,.07,12.76,.11,19.14-.09,3.84-.43,7.55-1.64,11.31-4.64,14.34-8.92,28.8-13.34,43.22-.2,1.25-.4,2.49-.6,3.74-10.55,4.35-11.99,13.31-11.71,23.13l-.03,.04c-7.32,.42-5.78,9.65-11.56,11.6-.09-2-.17-4.01-.26-6.01Z"
              ></path>
              <path
                class="cls-122"
                d="M432.6,799.84c-17.84,24.46-36.54,47.9-67.58,56.67-1.38-.19-2.77-.38-4.15-.57,21.21-6.08,37.96-18.31,50.38-36.5,.65-1.91,1.29-3.83,1.94-5.74,4.14-4.33,5.1-9.86,5.89-15.46,.54-.05,1.08-.13,1.61-.24,6.1-2.01,12.21-4.03,13.78-11.47h0c5.8-7.54,12.59-14.63,11.61-25.27-.06-1.95-.11-3.9-.17-5.84,.57-1.37,1.13-2.74,1.7-4.1,4.42-1.07,4.9-7.58,10.24-7.4,1.67,.94,1.89,2.63,2.23,4.27,0,0,.13-.16,.13-.16-3.23,1.49-3.92,4.43-4.33,7.53,0,4.34-4.32,7.43-3.51,12.01,0,0,.09-.15,.09-.15-4.82,4.97-10.03,9.72-9.94,17.48,0,0,.09-.13,.09-.13-4.51,1.63-5.25,6.47-8.12,9.49-2.1,1.37-1.92,3.49-1.87,5.58Z"
              ></path>
              <path
                class="cls-40"
                d="M118.19,840.72c5.2,17.38-7.22,27.76-17.85,40.4,4.23-.71,6.33-1.06,8.44-1.41-17.04,14.46-30.31,32.09-42.67,50.5-1.76-3.17,8.24-11.09-4.05-10,4.84-7.99,14.84-11.41,18.2-20.81,1.17-3.29,3.75-6.15,1.51-9.87,12.01-2.29,15-13.4,21.08-21.49,9.69-6.48,12.21-16.53,13.55-27.17,.6-.04,1.19-.08,1.78-.14Z"
              ></path>
              <path
                class="cls-76"
                d="M460.07,748.19c-.34-1.63-.55-3.33-2.23-4.27,1.9-8.39,3.81-16.78,5.71-25.17,0,3.97,0,7.94,0,11.92,7.1-11.77,10.87-24.18,13.11-36.92,5.29-30.05,8.45-60.34,8.05-90.89-.29-21.86-3.52-43.43-8.12-64.76-.82-3.83-1.67-7.5-1.15-11.39,7.03,18.17,8.95,37.35,10.09,56.47,3.11,52.38-.37,104.07-18.97,153.84-1.54,4.13-3.06,8.18-6.51,11.17Z"
              ></path>
              <path
                class="cls-55"
                d="M236.59,947.51c-.61-.05-1.21-.12-1.81-.19-.06-.48-.09-.96-.11-1.44l.1-.73c28.43,.08,56.86,.16,85.29,.24h42.32c0-.57-.02-1.13-.02-1.7h-42.23l-.13-.18c.05-.5,.15-1,.29-1.48,21.25-1.2,42.6,.58,63.81-1.97,3.61,2.72,7.72,1.09,11.62,1.34v.23c-2.34,3.55-7.37,.19-9.68,3.79-.62,.07-1.24,.12-1.86,.15-4.65,.33-9.54-1.45-13.87,1.6-3.11,.16-6.22,.33-9.33,.49-5.26-.02-10.51-.04-15.77-.06-8.36,0-16.72,0-25.08,0-27.85-.03-55.7-.05-83.55-.08Z"
              ></path>
              <path
                class="cls-21"
                d="M250.13,854.43c-4.23-2.27-6.81-6.14-9.56-9.85-.09-1.85-.18-3.7-.28-5.55,5.31-8.53,6.46-17.7,4.17-27.38,.61,.1,1.22,.15,1.84,.17,1.35,5.77,2.69,11.53,4.04,17.3-.79,4.58,2.21,7.95,3.74,11.8-.28,6.14,6.26,4.82,8.89,7.17-.6,3.06-7.11,2.7-3.03,6.67,2.24,2.18,6.33,3.32,8.01-.04,1.23-2.46,1.1-5.05,4.62-3.46,3.52,1.59,.71,4.43,.95,6.68l-15.69,.51s.04,.01,.04,.01c-1.68-3.08-4.44-4.07-7.75-4.02Z"
              ></path>
              <path
                class="cls-93"
                d="M476.97,900.01c16.75-14.85,31.77-31.36,46.46-48.19,.74,.87,1.48,1.75,2.23,2.62-7.44,10.75-19.11,18.77-21.26,32.93-.69,.58-1.38,1.15-2.07,1.73-8.74,5.31-19.14,8.63-23.23,19.47-.66-.04-1.31-.09-1.97-.13-.05-2.81-.11-5.61-.16-8.42Z"
              ></path>
              <path
                class="cls-132"
                d="M320.29,942.03c-.14,.49-.24,.98-.29,1.48-28.38,.07-56.76,.14-85.14,.2-14.29-.06-28.57-.11-42.86-.17-16.14-.69-32.09,.22-47.66,5.09-2.64,.82-5.7,.29-8.56,.38,16.17-6.05,33.02-8.52,50.13-8.49,43.53,.09,87.05,.64,130.57,1.03,1.27,.01,2.55,.31,3.82,.48Z"
              ></path>
              <path
                class="cls-484"
                d="M476.97,900.01c.05,2.81,.11,5.61,.16,8.42-1.92,2.03-3.85,4.06-5.77,6.09-5.05-.53-7.67,3.93-11.63,5.64-4.85,1.43-9.02,3.82-11.74,8.27-.64,.48-1.28,.96-1.92,1.44-5.9-.28-11.74,.03-17.37,2.05-1.52-.77-1.88-2.16-2.01-3.69,18.49-6.33,34.98-16.22,50.28-28.22Z"
              ></path>
              <path
                class="cls-466"
                d="M587.75,701.24c-3.16,6-1.22,13.6-6.03,19.07,2.48-17.13,5.18-34.23,7.39-51.39,3.32-25.87,2.31-51.92,2.59-77.91,4.04,6.49,1.53,13.64,1.85,20.46,.51,10.51,.13,21.07,.13,31.61-1.98,19.39-3.95,38.77-5.93,58.16Z"
              ></path>
              <path
                class="cls-178"
                d="M576.1,480.44c-1.27,1.29-2.54,2.58-3.81,3.86,0,0-.52-.5-.52-.5,0,0,.21-.69,.21-.69-.06-10.84-3.86-20.08-11.77-27.58-1.98-.67-1.97-2.25-1.77-3.9,.47-3.55,.17-6.7-4.11-7.73-1.75-.59-1.85-2.01-1.77-3.51-.55-2.81-1.1-5.63-1.65-8.44,5.85,2.84,6.66,9.9,11.47,13.62,.68,.7,1.37,1.39,2.05,2.09,.24,5.38,2.35,9.49,7.77,11.34l.16,.22c.31,5.97-1.85,12.49,3.8,17.29l.02,.04c-.03,1.29-.05,2.59-.08,3.88Z"
              ></path>
              <path
                class="cls-355"
                d="M257.84,858.43c5.23-.17,10.46-.34,15.69-.51,1.31,.03,2.63,.06,3.94,.09,8.99,0,17.98-.01,26.97-.02,5.22-.02,10.43-.03,15.65-.05,13.67,.95,27.28,.51,40.78-2,1.38,.19,2.77,.38,4.15,.57-7.18,3.25-14.95,3.81-22.56,3.9-25.48,.28-50.96,.08-76.44-.04-2.8-.01-5.88,.42-8.19-1.94Z"
              ></path>
              <path
                class="cls-44"
                d="M98.91,340.93c2.67-.03,5.34-.06,8.01-.08,1.24,.75,2.48,1.49,3.72,2.24,2.35,3.87,5.74,6.73,9.21,9.51,2.72,2.6,4.37,6.33,8.19,7.78,.69,2.57,1.39,5.13,2.08,7.7-.71,0-1.43,0-2.14,0-1.29,0-2.58,0-3.87,0-7-7.24-10.13-17.74-19.48-23-1.91-1.38-3.81-2.75-5.72-4.13,0,0,0-.02,0-.02Z"
              ></path>
              <path
                class="cls-46"
                d="M550.88,813.59c5.78-1.95,4.24-11.17,11.56-11.6-3.21,5.8-6.43,11.6-9.64,17.41-7.1,4.62-7.92,13.05-11.91,19.56-.57-.04-1.14-.04-1.71,0,.05-2,.09-4.01,.14-6.01,1.52-3.71,4.58-6.93,3.67-11.42,.36-.74,.72-1.47,1.09-2.21,3.94,.06,4.32-4.09,6.81-5.74Z"
              ></path>
              <path
                class="cls-95"
                d="M550.91,431.96c.55,2.81,1.1,5.63,1.65,8.44-5.77-9.07-11.54-18.14-17.31-27.2,2.33,.02,6.79,5.25,5.98-2.43,3.24,3.85,6.47,7.7,9.71,11.55-5.28,3.2-2.24,6.42-.03,9.64Z"
              ></path>
              <path
                class="cls-131"
                d="M426.69,928.23c.13,1.52,.49,2.92,2.01,3.69-1.27,1.29-2.53,2.58-3.8,3.87,0,0-.03,.11-.03,.11-6.69-.83-11.96,2.84-17.54,5.53-3.88,.07-7.75,.13-11.63,.2,0,0,0-.23,0-.23-.08-.78-.15-1.57-.23-2.36,10.4-3.6,20.8-7.21,31.2-10.81Z"
              ></path>
              <path
                class="cls-80"
                d="M539.31,832.96c-.05,2-.09,4.01-.14,6.01-1.21,1.98-2.42,3.95-3.62,5.93-4.22,2.23-3.46,9.61-9.9,9.54-.74-.87-1.48-1.75-2.22-2.62,3.98-5.78,7.96-11.57,11.94-17.34,1.31-.5,2.63-1.01,3.95-1.52Z"
              ></path>
              <path
                class="cls-51"
                d="M560.2,455.54c7.91,7.49,11.72,16.74,11.77,27.58-3.92-9.19-7.85-18.38-11.77-27.58Z"
              ></path>
              <path
                class="cls-232"
                d="M411.27,418.44c-8.65-3.96-14.83-10.91-21.3-17.51,8.96,3.58,15.26,10.39,21.3,17.51Z"
              ></path>
              <path
                class="cls-380"
                d="M240.29,839.02c.09,1.85,.18,3.7,.28,5.55-4.89-6.22-7.64-13.23-7.78-21.19,3.77,3.1,2.47,8.58,5.63,11.96,.62,1.22,1.25,2.45,1.87,3.68Z"
              ></path>
              <path
                class="cls-92"
                d="M442.5,784.9c-.08-7.75,5.13-12.5,9.94-17.48-1.91,6.62-4.88,12.64-9.94,17.48Z"
              ></path>
              <path
                class="cls-446"
                d="M562.33,782.41c-.62,6.85-1.66,13.5-8.32,17.48,2.77-5.83,5.55-11.65,8.32-17.48Z"
              ></path>
              <path
                class="cls-419"
                d="M539.31,832.96c-1.32,.51-2.64,1.02-3.95,1.52,2.55-4.32,5.08-8.64,7.62-12.95,.91,4.49-2.15,7.71-3.67,11.43Z"
              ></path>
              <path
                class="cls-3"
                d="M119.85,352.59c-3.48-2.78-6.86-5.64-9.21-9.51,4.84,.42,6.84,4.47,9.62,7.51-.14,.67-.27,1.33-.41,2Z"
              ></path>
              <path
                class="cls-431"
                d="M550.88,813.59c-2.49,1.65-2.87,5.8-6.81,5.74,2.18-3.92,4.37-7.83,6.55-11.75,.09,2,.17,4.01,.26,6.01Z"
              ></path>
              <path
                class="cls-284"
                d="M119.85,352.59c.14-.67,.27-1.33,.41-2,3.58,2.48,6.86,5.19,7.78,9.78-3.82-1.45-5.47-5.18-8.19-7.78Z"
              ></path>
              <path
                class="cls-92"
                d="M434.46,794.27c2.87-3.02,3.62-7.86,8.12-9.49-1.1,3.76-2.39,7.4-5.98,9.61-.71-.04-1.43-.08-2.14-.12Z"
              ></path>
              <path
                class="cls-92"
                d="M452.35,767.57c-.81-4.58,3.51-7.67,3.51-12.01,.68,.01,1.37,.03,2.05,.04,.12,4.91-2.5,8.54-5.56,11.97Z"
              ></path>
              <path
                class="cls-178"
                d="M575.37,494.34c5.93,2.95,4.47,8.37,4.46,13.31-2.96-3.95-2.72-8.96-4.46-13.31Z"
              ></path>
              <path
                class="cls-74"
                d="M395.49,939.04c.08,.79,.15,1.57,.23,2.36-3.9-.25-8.01,1.38-11.62-1.34,3.6-2.53,7.69,.36,11.39-1.01Z"
              ></path>
              <path
                class="cls-196"
                d="M436.53,447.47c-3.27-1.56-5.45-3.96-5.85-7.69,3.14,1.66,5.42,3.97,5.85,7.69Z"
              ></path>
              <path
                class="cls-76"
                d="M457.92,755.6c-.68-.01-1.37-.03-2.05-.04,.42-3.1,1.11-6.04,4.33-7.53,.05,2.77,.5,5.65-2.28,7.57Z"
              ></path>
              <path
                class="cls-355"
                d="M250.13,854.43c3.31-.05,6.07,.94,7.75,4.02-3.47,.37-5.99-1.1-7.75-4.02Z"
              ></path>
              <path
                class="cls-51"
                d="M554.32,443.92c4.29,1.03,4.58,4.18,4.11,7.73-1.37-2.58-2.74-5.15-4.11-7.73Z"
              ></path>
              <path
                class="cls-178"
                d="M583.45,523.43c4.1,2.41,1.95,6.25,2.18,9.54-.73-3.18-1.45-6.36-2.18-9.54Z"
              ></path>
              <path
                class="cls-121"
                d="M434.46,794.27c.71,.04,1.43,.08,2.14,.12-.55,2.4-1.5,4.5-4.01,5.46-.05-2.08-.23-4.21,1.87-5.58Z"
              ></path>
              <path
                class="cls-4"
                d="M120.11,966.58c-1.3,.62-2.59,1.23-3.89,1.85-3.28,.03-6.28,.56-7.54,4.2l-.91,.15s-.92,0-.92,0c4.29-9.78,13.85-11.89,22.52-14.83,3.76-1.28,8.22-.53,12.36-.71-3.81,3.69-8.82,4.53-13.7,5.45-3.1,.58-6.32,.46-7.92,3.9Z"
              ></path>
              <path
                class="cls-142"
                d="M234.67,945.89c.01,.48,.05,.96,.11,1.44-14.93,0-29.86-.02-44.78-.02,.08-.57,.17-1.14,.28-1.7,.59,0,1.16-.05,1.73-.19,14.22,.16,28.44,.32,42.66,.47Z"
              ></path>
              <path
                class="cls-27"
                d="M190.27,945.6c-.11,.56-.21,1.13-.28,1.7-8.82-1.81-16.22,5.11-24.92,4.07-.81-.13-1.62-.26-2.43-.39,8.01-7.93,18.12-5.14,27.63-5.38Z"
              ></path>
              <path
                class="cls-130"
                d="M234.67,945.89c-14.22-.16-28.44-.32-42.66-.47,.01-.62,0-1.25,0-1.87,14.29,.06,28.57,.11,42.86,.17-.07,.48-.1,.96-.09,1.44l-.1,.73Z"
              ></path>
              <path
                class="cls-4"
                d="M162.64,950.98c.81,.13,1.62,.26,2.43,.39-4.96,2.45-10.18,3.81-15.73,3.85,1.94-1.28,3.89-2.56,5.83-3.84,2.49-.13,4.98-.27,7.47-.4Z"
              ></path>
              <path
                class="cls-27"
                d="M155.17,951.39c-1.94,1.28-3.89,2.56-5.83,3.84-.55,.13-1.11,.22-1.67,.27,.09-5.76,4.43-3.79,7.51-4.11Z"
              ></path>
              <path
                class="cls-317"
                d="M254.1,240.18c-.71,1.05-1.42,2.09-2.12,3.14-8.17,12.32-7.9,13.9,4.07,23.98,8.86,4.1,18.22,1.18,27.33,1.87,6.25,.47,12.39-.53,16.4,6.65,2.33,4.16,8,3.17,12.5,3.09,0,0,.03,.04,.03,.04-7.83,.92-14.61,8.09-23.29,3.86-3.58-8.31-11.98-8.97-18.5-8.64-14.77,.75-26.98-8.8-28.04-24.27,3.74-3.39,5.42-9.26,11.62-9.71Z"
              ></path>
              <path
                class="cls-273"
                d="M475.25,278.93c12.55,5.27,25.49,9.7,36.86,17.46,0,1.29,0,2.57,0,3.86-3.76-1.64-7.15-4.41-11.64-3.85-1.29-.66-2.59-1.31-3.88-1.97-16.31-6.81-32.28-14.72-50.44-15.49-3.85,.03-7.62-1.04-11.33-1.32-11.84-.87-22.64,2.39-31.34,11.01-6.26,3.64-12.12,3.68-18.58-.33-7.02-4.36-14.73-7.59-22.15-11.31,5.61-.42,10.56,1.77,15.53,3.9,15.46,7.87,18.64,6.73,27.14-9.7,7.86-1.34,14.89-6.1,23.85-2.5,14.65,5.89,30.76,6.28,45.98,10.25Zm-54.69-3.72c-.96-.76-1.55-1.59-2.19-1.64-.75-.06-2.08,.39-2.25,.91-.46,1.45,.63,2.22,1.95,2.15,.71-.04,1.38-.75,2.49-1.42Z"
              ></path>
              <path
                class="cls-388"
                d="M362.75,276.98c7.41,3.72,15.13,6.95,22.15,11.31,6.47,4.02,12.32,3.97,18.58,.33,0,.64,0,1.28,.01,1.93-.65,.65-1.3,1.3-1.95,1.95-3,1.84-6.31,2.12-9.72,1.93-9.29-1.73-17.17-6.8-25.48-10.83-15.06-7.3-30.42-8.81-46.26-2.77,0-1.27,0-2.55,0-3.82,10.45-5.83,21.87-3.44,32.96-3.89,3.7,.11,7.74-.63,9.71,3.85Z"
              ></path>
              <path
                class="cls-474"
                d="M405.42,271.18c-8.5,16.43-11.68,17.57-27.14,9.7,2.13-.08,4.42,.34,5.8-1.94,8.71-1.02,6.27-8.42,7.77-13.56,3.45-5.03,8.71-3.77,13.57-3.88,0,3.23,0,6.46,0,9.68Z"
              ></path>
              <path
                class="cls-248"
                d="M254.1,240.18c-6.21,.46-7.88,6.32-11.62,9.71-.65,.64-1.3,1.28-1.95,1.92-.65,0-1.3,0-1.94,0-1.24-10.23,8.15-11.1,13.62-15.42,3.15-.71,6.3-1.42,9.46-2.13,.04,.68,.08,1.36,.12,2.04-2.56,1.3-5.12,2.59-7.67,3.89Z"
              ></path>
              <path
                class="cls-272"
                d="M320.08,277.02c0,1.27,0,2.55,0,3.82,0,0-.06,.08-.06,.08-5.2,.26-9.5,2.48-14.08,4.97-8.74,4.76-17.75,10.08-28.56,6.59,0-1.93,0-3.86-.01-5.8,2.02-6.87,7.22-4.18,11.63-3.88,8.68,4.23,15.47-2.94,23.29-3.86,2.82,.29,5.34-.64,7.77-1.93Z"
              ></path>
              <path
                class="cls-242"
                d="M261.96,232.5c.61-.68,1.22-1.36,1.82-2.03,7.18-3.82,7.95-7.81,1.78-12.34-7.15-5.25-14.44-10.5-22.28-14.58-9.5-4.94-16.77-13.85-27.98-15.68-1.29-1.94-2.59-3.87-3.88-5.81v-.02c3.94-.27,7.31,.47,10.4,3.43,5.68,5.43,12.87,7.68,20.64,8.2,6.32,10.16,17.12,15.23,25.93,22.53,3.73,3.1,5.26,5.77,3.49,10.54-1.84,4.95-4.36,7.7-9.92,5.75Z"
              ></path>
              <path
                class="cls-242"
                d="M192.02,170.44c0-1.29,0-2.58,0-3.87,6.86,4.68,15.29,7.38,19.41,15.48,0,0-.01,.02-.01,.02-8.39-.68-15.65-3.23-19.4-11.63Z"
              ></path>
              <path
                class="cls-41"
                d="M479.09,908.57c4.09-10.84,14.49-14.16,23.23-19.47,.05,1.38,.1,2.77,.15,4.15-.09,.51-.15,1.03-.18,1.55-5.65,3.28-13.77,3.41-15.31,11.96,0,0-.06-.01-.06,0-5.91,3.65-7.3,12.52-15.58,13.44,1.81-4.38,7.78-6,7.74-11.62Z"
              ></path>
              <path
                class="cls-65"
                d="M447.99,928.43c2.72-4.44,6.89-6.84,11.74-8.27,2.06,.1,4.12,.2,6.18,.29-5.64,3.42-10.24,9.16-17.92,7.97Z"
              ></path>
              <path
                class="cls-74"
                d="M424.9,935.78c1.27-1.29,2.53-2.58,3.8-3.87,5.63-2.02,11.47-2.33,17.37-2.05-4.63,3.31-10.97,2.17-15.44,5.9-1.91,0-3.82,0-5.73,.01Z"
              ></path>
              <path
                class="cls-65"
                d="M479.09,908.57c.04,5.62-5.93,7.24-7.74,11.62-1.31,0-2.61-.02-3.92-.03,1.31-1.88,2.62-3.76,3.92-5.64,1.92-2.03,3.85-4.06,5.77-6.09,.66,.04,1.31,.09,1.97,.13Z"
              ></path>
              <path
                class="cls-131"
                d="M471.36,914.52c-1.31,1.88-2.62,3.76-3.92,5.64-.49,.21-1,.3-1.53,.29-2.06-.1-4.12-.19-6.18-.29,3.96-1.71,6.58-6.17,11.63-5.64Z"
              ></path>
              <path
                class="cls-142"
                d="M395.71,941.62c3.88-.07,7.75-.13,11.63-.2,1.97,.05,3.93,.11,5.9,.16-8.39,6.05-18.02,3.37-27.2,3.83,2.31-3.59,7.35-.23,9.67-3.79Z"
              ></path>
              <path
                class="cls-55"
                d="M413.23,941.58c-1.97-.05-3.93-.1-5.9-.16,5.58-2.69,10.85-6.36,17.54-5.53-3.4,2.88-7.31,4.72-11.64,5.69Z"
              ></path>
              <path
                class="cls-142"
                d="M370.31,947.16c4.33-3.05,9.22-1.27,13.87-1.6-3.49,3.03-7.79,1.24-11.67,1.96-.73-.12-1.46-.24-2.2-.36Z"
              ></path>
              <path
                class="cls-170"
                d="M370.31,947.16c.73,.12,1.46,.24,2.2,.36-3.46,3.17-7.76,1.16-11.62,1.89,0,0-.13-.14-.13-.14,.04-.55,.12-1.09,.23-1.62,3.11-.16,6.22-.33,9.33-.49Z"
              ></path>
              <path
                class="cls-489"
                d="M578.06,798.17c-.49-5.27,1.4-9.86,3.32-14.7,3.34-8.43,5.62-17.28,8.34-25.96,1.31,10.38-3.04,19.5-6.72,28.68-1.58,3.93-3.44,7.63-2.99,11.99-.65,0-1.3,0-1.95,0Z"
              ></path>
              <path
                class="cls-177"
                d="M591.73,501.56c3.58,6.8,7.03,13.65,7.69,21.5-1.89,6.85,4.75,11.08,5.45,16.73,2.4,19.35,7.53,38.41,6.27,58.19-.51,8.03-.94,16.26,.2,24.16,2.77,19.17,7.46,37.39-1.93,57.13-4.98,10.47-8.31,23.22-9.97,35.56,1.78,9.29-5.93,16.36-5.91,25.24-1.17,.03-2.34,.05-3.51,.08,.66-13.11,7.72-25.29,5.56-38.8,.6-1.09,1.6-2.14,1.73-3.29,3.5-29.91,5.22-59.94,5.95-90.04,.18-7.35,.85-14.7,1.29-22,.63-10.59-.09-21.53-3.18-31.99-3.3-16.68-6.6-33.37-9.9-50.05,.09-.8,.17-1.61,.26-2.41Z"
              ></path>
              <path
                class="cls-85"
                d="M599.44,714.82c1.66-12.34,4.99-25.08,9.97-35.56,9.39-19.74,4.7-37.95,1.93-57.13-1.14-7.91-.71-16.13-.2-24.16,1.26-19.78-3.87-38.84-6.27-58.19-.7-5.65-7.34-9.88-5.45-16.73,.65,0,1.29,0,1.94,0,0,0,0,0,0,0-.19,3.32,.35,6.28,3.86,7.77,.67,.63,1.33,1.25,2,1.88,0,0-.03,.04-.03,.04,2.09,15.32,5.92,30.31,8.58,45.49,1.96,11.22,6.15,22.25,4.98,33.96-2.93,3.87-2.93,7.75,0,11.62,0,10.34,0,20.67,0,31.01-2.15,11.58-6.22,22.85-5.83,34.86-5.97,1.86-8.67,5.36-5.82,11.63-6.23,2.37-1.47,12.55-9.66,13.52Z"
              ></path>
              <path
                class="cls-146"
                d="M595.58,701.34c2.16,13.51-4.91,25.7-5.56,38.8,0,0-.38-.09-.38-.09-4.97,6.27-5.71,13.68-5.76,21.29,0,0-.02,.04-.02,.04-3.03,2.5-3.88,5.88-3.89,9.6-.61,1.33-1.21,2.67-1.82,4-1.12,.03-2.24,.06-3.36,.1,4.42-14.41,8.7-28.87,13.34-43.22,1.22-3.76,1.55-7.48,1.64-11.31,3.82-7.44,1.34-15.35,1.75-23.05,1.96-14.9,3.92-29.8,5.87-44.7,1.62,16.26-3.11,32.29-1.82,48.54Z"
              ></path>
              <path
                class="cls-107"
                d="M502.47,893.25c-.05-1.38-.1-2.76-.15-4.15,.69-.58,1.38-1.15,2.07-1.73,4.1-.43,4.21-4.15,5.83-6.76,5.99-9.65,12.27-19.11,22.88-24.49,4.5,.71,4.67-4.79,8.09-5.62l.09,.03c-.84,5.09-3.34,9.07-7.83,11.73-9.42,11.23-17.65,23.65-30.98,30.98Z"
              ></path>
              <path
                class="cls-159"
                d="M560.66,813.73c-3.66,13.74-10.87,25.61-19.38,36.81,0,0-.09-.03-.09-.03,.22-12.22,9.63-20.43,13.58-31.02,1.38-2.51,3.18-4.59,5.89-5.75Z"
              ></path>
              <path
                class="cls-136"
                d="M560.66,813.73c-2.71,1.15-4.51,3.23-5.89,5.75-.66-.03-1.32-.06-1.98-.08,3.22-5.8,6.43-11.6,9.64-17.41,0,0,.03-.04,.03-.04,3.23-8.05,9.56-14.53,11.71-23.13,.2-1.25,.4-2.49,.6-3.74,1.12-.03,2.24-.06,3.37-.1-.5,11.05-9.17,18.77-11.79,28.95-3.77,2.17-5.06,5.78-5.73,9.76l.03,.03Z"
              ></path>
              <path
                class="cls-136"
                d="M583.88,761.34c.04-7.6,.79-15.01,5.76-21.29-1.05,7.33-2.27,14.62-5.76,21.29Z"
              ></path>
              <path
                class="cls-101"
                d="M560.63,813.7c.67-3.98,1.96-7.59,5.73-9.76-.49,4.09-1.84,7.66-5.73,9.76Z"
              ></path>
              <path
                class="cls-136"
                d="M579.97,770.98c0-3.72,.86-7.1,3.89-9.6,.19,3.8-.58,7.22-3.89,9.6Z"
              ></path>
              <path
                class="cls-43"
                d="M486.99,906.76c1.53-8.54,9.65-8.67,15.31-11.96-3.25,6.35-9.02,9.48-15.31,11.96Z"
              ></path>
              <path
                class="cls-309"
                d="M578.08,385.5c-.64,.65-1.29,1.29-1.93,1.94-4.77-11.54-9.5-23.09-17.45-32.94-.76-6.71-5.99-10.64-9.71-15.5,0-1.28-.02-2.57-.03-3.85,0,0,.05-.04,.05-.04,10.35,2.13,9.68,13.02,14.64,19.39,3.68,4.72,6.57,10.61,10.53,15.52,.84,3.41-2.29,8.41,3.88,9.69,0,1.93,.01,3.86,.02,5.8Z"
              ></path>
              <path
                class="cls-345"
                d="M405.42,271.18c0-3.23,0-6.46,0-9.68,8.52-.73,16.73,.6,24.54,3.99,5.9,2.56,12.06,1.62,18.14,1.83,8.85,4.35,18.73,6.27,27.16,11.61-15.22-3.97-31.34-4.36-45.98-10.25-8.96-3.6-15.99,1.16-23.85,2.5Z"
              ></path>
              <path
                class="cls-309"
                d="M512.11,300.25c0-1.29,0-2.57,0-3.86,3.34,1.82,5.89,4.44,7.79,7.71,0,0-.04,.05-.04,.04-3.31,.15-6.28-.38-7.74-3.89Z"
              ></path>
              <path
                class="cls-362"
                d="M512.11,300.25c1.47,3.51,4.43,4.04,7.74,3.89,2.63,8.9,11.88,12.08,16.73,19.23,3.12,4.6,8.18,7.89,12.37,11.77,0,1.28,.02,2.57,.03,3.85,0,1.94,0,3.88,0,5.82-3.56-4.43-7.2-8.79-10.65-13.29-10.21-13.33-22.67-23.93-37.8-31.31-.03-.62-.06-1.25-.09-1.87,.01-.65,.03-1.29,.04-1.94,4.49-.55,7.88,2.21,11.64,3.85Z"
              ></path>
              <path
                class="cls-489"
                d="M620.75,623.81c-2.93-3.87-2.94-7.75,0-11.62,0,3.87,0,7.75,0,11.62Z"
              ></path>
              <path
                class="cls-448"
                d="M607.22,532.7c-.67-.63-1.33-1.25-2-1.88,.21-3.33-.33-6.29-3.86-7.77,0,0,0,0,0,0,0-2.58,0-5.17,.01-7.75,3.42,5.31,6.89,10.6,5.84,17.4Z"
              ></path>
              <path
                class="cls-447"
                d="M576.11,447.54c-1.2-.08-2.4-.15-3.61-.23-.2-3.48-1.46-6.51-2.83-9.77-3.87-9.2-8.21-18.12-12.96-26.87,0-6.39,.25-12.79-.11-19.16-.16-2.88-.38-7.97-4.67-6.47-4.81,1.68-6.13-1.67-8.76-3.4,2.33-.3,5.27,.69,6.41-3.39-9.27-.21-7.73-7.57-5.65-11.51,2.59-4.91,5.82,2.27,9.41,2.12,1.09-.04,2.27,2,3.41,3.09h0c2.36,5.91-2.72,15.13,7.76,17.44,2.45,7.22,3.72,14.46,3.48,22.25-.36,11.19,4.46,21.53,7.27,32.18,.33,1.24,.57,2.49,.86,3.74Z"
              ></path>
              <path
                class="cls-392"
                d="M500.52,300.21c15.14,7.38,27.59,17.98,37.8,31.31,3.45,4.51,7.09,8.87,10.65,13.29,1.95,3.23,2.7,7.17,5.84,9.69,2.73,12.13,13.18,20.62,15.56,32.92-.02,.66-.04,1.31-.06,1.97-2.42-1.45-2.75-5-5.82-5.8-3.86-3.04-4.85-7.98-7.75-11.65,0,0,0,0,0,0-1.44-9.27-8.03-16.27-12.33-23.89-8.17-14.46-20.81-25.98-34.23-36.18-4.61-.55-7.18-3.14-7.78-7.73-.65-1.28-1.3-2.57-1.96-3.85l.07-.08Z"
              ></path>
              <path
                class="cls-427"
                d="M556.74,371.93c2.9,3.67,3.88,8.62,7.75,11.65,0,1.93,0,3.86,.01,5.78-10.48-2.31-5.4-11.52-7.76-17.44Z"
              ></path>
              <path
                class="cls-19"
                d="M591.47,503.97c3.3,16.68,6.6,33.37,9.9,50.05-.05,17.39,.63,34.82-.41,52.15-.69,11.68,.08,23.62-3.43,35.07-.03-12.91-.05-25.81-.08-38.72,.03-3.23,.05-6.45,.08-9.68,3.23-15.05,3.21-29.95-1.96-44.63-.26-3.93,.16-7.98-1.96-11.59,.29-6.18-.94-12.02-3.83-17.5,.05-.63,0-1.26-.12-1.89-.37-3.24,1.11-6.85-1.91-9.56-2.59-7.14-5.18-14.27-7.77-21.41,.28-3.84-.81-7.14-3.81-9.68,0,0-.02-.04-.02-.04-.07-6.02-1.36-11.78-3.79-17.29,0,0-.16-.22-.16-.22-.65-5.1-4.91-7.74-7.77-11.34-.68-.7-1.37-1.39-2.05-2.09-1.46-8.91-7.93-15.36-11.45-23.26-3.24-3.85-6.47-7.7-9.71-11.55-.62-1.33-1.25-2.65-1.87-3.98,.43-6.53-4.91-9.41-8.66-13.11-3.63-3.58-7.61-6.74-9-11.95,.09-.76,.19-1.52,.28-2.28,7.43,5.59,11.22,14.68,19.11,19.84,.57,1.45,.89,3.07,1.73,4.33,9.63,14.45,19.92,28.47,28.05,43.87,6.75,15.17,11.84,30.94,16.97,46.69,1.08,3.31,2.41,6.53,3.63,9.79Z"
              ></path>
              <path
                class="cls-415"
                d="M570.87,447.49c-8.14-15.4-18.43-29.42-28.05-43.87-.84-1.27-1.17-2.88-1.73-4.34,.03-1.37,.06-2.73,.09-4.1,7.61,2.73,8.1,12.57,15.52,15.49,4.75,8.75,9.09,17.67,12.96,26.87,1.37,3.27,2.63,6.29,2.83,9.77-.54,.09-1.08,.15-1.62,.17Z"
              ></path>
              <path
                class="cls-330"
                d="M554.81,354.5c-3.14-2.51-3.89-6.46-5.84-9.69,0-1.94,0-3.88,0-5.82,3.73,4.86,8.95,8.79,9.71,15.5-1.29,0-2.59,0-3.89,0Z"
              ></path>
              <path
                class="cls-423"
                d="M54.3,643.21c-15.32-36.15-5.67-72.2,1.21-108.03,1.4-7.3,3.38-15.44,8.48-21.82,0,1.3,0,2.59,.01,3.89-.21,3.77,.46,7.52-2.14,11.04-4.32,5.85-5.3,12.86-5.63,19.96-.64,1.41-1.81,2.81-1.82,4.23-.13,13.85-1.51,27.91,.37,41.51,1.64,11.86-.78,24.47,5.34,35.67,.4,5.52,5.03,12.85-5.82,13.55Z"
              ></path>
              <path
                class="cls-389"
                d="M56.23,548.25c.33-7.09,1.31-14.11,5.63-19.96,2.6-3.52,1.93-7.27,2.14-11.04,3.22-2.72,1.48-6.42,1.91-9.69,0-.65,.02-1.29,.05-1.94,2.38-.13,4.59-.92,5.25-3.34,1.14-4.15,3.06-7.26,7.89-6.03,4.63,1.18,6.52,4.67,6.23,9.36h0c-10.01-1.06-9.04,5.17-7.75,11.62h0c-3.11,1.72-5.67,3.83-5.81,7.76-1.81,9.32-3.94,18.5-4.54,28.13-.33,5.24,.56,11.53-3.21,16.43,.04-4.12-.88-8.54,.3-12.31,2.61-8.33-1.58-9.41-8.07-9Z"
              ></path>
              <path
                class="cls-381"
                d="M64,569.56c3.77-4.9,2.88-11.19,3.21-16.43,.6-9.63,2.73-18.81,4.54-28.13,.65,0,1.3,0,1.94,0,1.7,2.6,1.56,5.2,.18,7.92-2.56,5.04-2.08,10.17-.2,15.3-6.11,12.48-4.07,26.2-5.57,39.32-1.44,12.64,.89,25.59-2.18,38.22-3.61,7.23-1.7,15.34-3.61,22.92-.81,3.22-1.93,5.87-3.88,8.25-4.34,5.31-3.19-.56-4.15-2.12,0-3.87,0-7.74,0-11.6,10.85-.7,6.22-8.03,5.82-13.55,2.61-19.95,4.81-39.92,3.89-60.1Z"
              ></path>
              <path
                class="cls-401"
                d="M65.91,507.56c-.43,3.27,1.3,6.97-1.91,9.69,0-1.3,0-2.59-.01-3.89,.07-2.12-.32-4.4,1.93-5.8Z"
              ></path>
              <path
                class="cls-326"
                d="M87.27,668.36c-3.05-1.74-5.62-4.68-9.7-3.85-6.79-14.44-6.64-29.55-6.27-45.2,.4-16.94,2.19-33.42,6.29-49.75,1.93-.64,3.87-1.29,5.8-1.93,0,.64,0,1.29,0,1.93-.65,10.68-.65,21.45-2.14,32.01-1.3,9.25,2.88,18.41,0,27.39-2.9,9.07-2.17,17.53,2.13,25.85-1.65,5.35,3.33,8.82,3.88,13.55Z"
              ></path>
              <path
                class="cls-233"
                d="M98.92,505.62c7.63-2.45,12.57-1.19,11.65,8.32-.31,3.23,.3,6.3,1.93,9.13-.82,3.41-1.26,6.97-3.86,9.68-.65-1.94-1.31-3.88-1.96-5.82-.33-2.01-.97-6.4-2.4-4.8-4.58,5.11-11.63,3.94-16.62,8.47-5.67,5.14-5.19,11.92-8.14,17.62,.24-8.41-1-16.94,1.94-25.15,7.1-4.55,12.96-10.33,17.47-17.47Z"
              ></path>
              <path
                class="cls-342"
                d="M79.51,548.23c2.95-5.7,2.47-12.48,8.14-17.62,4.99-4.53,12.04-3.36,16.62-8.47,1.43-1.59,2.07,2.79,2.4,4.8-5.4,1.16-4.46,6.11-5.82,9.68-6.6-.17-10.18,2.85-14.25,8.53-5.5,7.67-1.9,15.11-3.21,22.49-1.93,.64-3.87,1.29-5.8,1.93,.98-7.08-2.19-14.53,1.92-21.33Z"
              ></path>
              <path
                class="cls-326"
                d="M102.78,633.51c.65,6.46,1.3,12.91,1.94,19.37-1.96,7.96-6.69,14.99-7.75,23.25-5.03-.27-6.01-3.57-5.82-7.75,3.39-7.03,10.56-12.35,9.69-21.31-.64-4.52-1.29-9.05-1.93-13.57h3.87Z"
              ></path>
              <path
                class="cls-319"
                d="M100.85,647.07c.87,8.96-6.3,14.28-9.69,21.31-1.3,0-2.59,0-3.89-.01-.55-4.73-5.52-8.19-3.88-13.55,2.14-.41,3.59-4.1,5.77-2.42,7.67,5.93,8.82-1.38,11.68-5.33Z"
              ></path>
              <path
                class="cls-504"
                d="M96.97,676.12c1.07-8.25,5.8-15.29,7.75-23.25,.04,1.59,.37,3.03,1.92,3.88-.83,5.79,1.95,11.99-1.93,17.45-1.6,.03-3.04,.37-3.88,1.93h-3.87Z"
              ></path>
              <path
                class="cls-326"
                d="M96.97,676.12h3.87c-.62,2.68,1.6,7.8-3.33,7.03-4.45-.69,.38-4.63-.54-7.03Z"
              ></path>
              <path
                class="cls-504"
                d="M102.78,633.51c-1.29,0-2.58,0-3.87,0,0,0,0,0,0,0,.8-17.82-.98-35.58,3.21-53.48,2.7-11.53,5.9-23.57,4.65-35.94-.42-4.12-.15-7.95-5.92-7.47,1.36-3.57,.43-8.53,5.82-9.68,.65,1.94,1.31,3.88,1.96,5.82-.02,14.85-.03,29.71-.05,44.56-4.58,12.27-3.82,25.08-3.85,37.81-.02,6.12,0,12.25,0,18.37-.65,0-1.3,0-1.94,0Z"
              ></path>
              <path
                class="cls-246"
                d="M151.3,133.63c3.87,3.88,7.74,7.75,11.62,11.63-7.52,.77-15.03,1.87-17.98-8.07-.47-1.58-3.46-2.4-5.29-3.58-1.68-2.34-3.06-5.01-5.12-6.94-3.31-3.1-7.82-3.86-11.75-2.18-4.8,2.05-1.42,5.97-.93,9.18,.29,1.89,.23,3.84,.33,5.76-7.61-6.98-8.24-16.77-9.23-25.89-.46-4.28,2.42-7.82,9.16-4.96,4.96,2.1,7.45,8.24,13.65,7.6,3.05,7.7,9.27,12.59,15.54,17.45Z"
              ></path>
              <path
                class="cls-246"
                d="M124.13,145.25c3.84,4.78,8.06,9.33,9.69,15.49-1.94-1.29-3.87-2.59-5.81-3.88-.05-4.29-5.08-6.91-3.89-11.61Z"
              ></path>
              <path
                class="cls-110"
                d="M83.36,346.78c1.92-.08,3.84-.15,5.76-.23,.66,.09,1.32,.17,1.98,.26,4.9,2.6,9.31,6.47,15.41,6.02,.75,1.1,1.5,2.2,2.25,3.31,2.7,9.7,11.51,16.4,13.46,26.29,2.96,15.07,1.46,30.44,1.94,45.68-2.8-5.13-3.34-10.79-3.88-16.44-.77-8.19-1.33-15.95-6.96-23.23-3.38-4.36-2.55-10.61-7.49-16.38-7.29-8.52-17.41-14.82-22.46-25.27Z"
              ></path>
              <path
                class="cls-175"
                d="M124.15,428.11c-.48-15.24,1.03-30.61-1.94-45.68-1.95-9.89-10.76-16.6-13.46-26.29,2.89,.28,4.03,2.62,5.84,4.46,14.61,14.78,12.57,34.04,12.88,51.88,.94,55.12,.48,110.26,.46,165.39,0,3.71,1.24,7.8-1.82,11.08-.06-31-.13-62-.19-93,.02-16.16,.04-32.33,.06-48.49-.66-5.8,1.86-11.93-1.82-17.41,0-.64,0-1.29,0-1.93Z"
              ></path>
              <path
                class="cls-110"
                d="M124.15,430.04c3.68,5.48,1.17,11.61,1.82,17.41-3.7-5.48-1.06-11.62-1.82-17.41Z"
              ></path>
              <path
                class="cls-172"
                d="M99.18,303.93c2.46,.02,4.91,.04,7.37,.06,22.13-.03,44.26-.05,66.39-.08,6.94-.13,13.88-.27,20.83-.4,14.3,.24,28.61,.49,42.91,.73,3.01,2.84,6.75,1.5,10.17,1.67,30.96,1.49,61.83-2.03,92.76-1.93,17.04,.75,34.38-1.15,50.73,5.7-1.54,.16-3.08,.31-4.61,.47-1.86,0-3.72,.02-5.58,.03-23.02,2.35-45.7-6.32-69.13-.92-11.88,2.74-24.9,.54-37.4,.58-15.63-4.15-31.8-2.4-47.59-3.14-38.22-1.79-76.58-.75-114.88-.65-7.97,.02-16.1-.89-23.87,1.94,2.55-5.51,7.78-3.18,11.91-4.06Z"
              ></path>
              <path
                class="cls-15"
                d="M126.11,588.94c3.05-3.28,1.82-7.37,1.82-11.08,.03-55.13,.48-110.27-.46-165.39-.3-17.83,1.74-37.1-12.88-51.88-1.82-1.84-2.95-4.17-5.84-4.46-.75-1.1-1.5-2.21-2.25-3.31-2.95-7.6-9.49-6-15.41-6.02-.66-.09-1.32-.17-1.98-.26-1.54-2.27-5.04-2.63-5.66-5.8,1.92,.03,3.84,.07,5.76,.1,.6,.15,1.2,.21,1.81,.2,3.72,4.08,8.75,3.75,13.6,4.02,9.35,5.25,12.48,15.76,19.48,23,1.29,2.58,2.59,5.17,3.88,7.75,.65,2.58,1.31,5.17,1.96,7.75,.05,11.88-.13,23.76,.22,35.63,.22,7.56-1.91,15.32,1.59,22.66,1.09,47.91-3.37,95.77-1.21,143.68,.21,4.63-3.81,8.21-2.44,12.9-.07,5.31-.15,10.62-.22,15.93-.55-.14-1.11-.27-1.68-.37-.04-8.34-.08-16.68-.11-25.02v-.03Z"
              ></path>
              <path
                class="cls-31"
                d="M87.27,307.99c7.78-2.83,15.9-1.92,23.87-1.94,38.3-.1,76.66-1.14,114.88,.65,15.79,.74,31.96-1.01,47.59,3.14-42.87-.8-85.73,.96-128.65-1.16-18.33-.91-37.14,.84-55.72,1.45-.71-.1-1.43-.19-2.14-.29,.04-.62,.1-1.23,.18-1.84Z"
              ></path>
              <path
                class="cls-44"
                d="M87.1,309.83c.71,.1,1.43,.19,2.14,.28-12.39,10.24-11.48,20.49-.03,30.74-1.92-.03-3.84-.07-5.76-.1-11.66-13.71-10.48-23.79,3.64-30.93Z"
              ></path>
              <path
                class="cls-409"
                d="M85.33,505.62c3.28-1.01,5.4-3.57,7.76-5.8,.25,11.04-8.82,15.3-15.53,21.28,0-1.28,0-2.56,0-3.85,0,0,0-.01,0-.01,2.85-3.69,3.45-8.89,7.75-11.61h0Z"
              ></path>
              <path
                class="cls-401"
                d="M77.56,517.25c0,1.28,0,2.56,0,3.85-1.84,.76-3.13,2.05-3.86,3.9-.65,0-1.3,0-1.94,0,.14-3.92,2.7-6.04,5.81-7.74Z"
              ></path>
              <path
                class="cls-71"
                d="M192,294.42c5.63-7.17,11.06-14.51,16.94-21.47,5.26-6.23,7.4-13.14,6.36-21.14,1.85-2.98,2.13-6.28,1.96-9.67,3.22-6.25,3.57-12.17-1.96-17.44,0,0,.02-.02,.02-.02,1.94,0,3.89,0,5.83,0,2.92,1.08,9.18,1.52,6.12,5.48-4.69,6.07-4.28,13.11-6.81,19.46-2.4,6.04-2.68,12.46,2.61,17.7,1.92,4.88,6.28,7.79,9.45,11.66,5.48,6.69-1.03,9.66-4.51,13.17-2.61,2.63-5.68,3.87-8.77-.43-7.61-10.59-14.5-9.61-21.38,2.71-1.94,0-3.87,0-5.81,.01l-.04-.03Z"
              ></path>
              <path
                class="cls-96"
                d="M180.39,292.5c-5.67-.46-11.5,1.15-16.99-1.68-3.37-1.74-4.32-6.07-1.59-6.31,9.4-.83,8.01-8.12,9.92-13.58,.21-.59,.6-1.12,.9-1.68,.65-.65,1.3-1.29,1.94-1.94,3.53,0,7.09,.27,10.59-.05,7.15-.66,13.47,.07,16.57,7.81-2.64,3.19-3.78,7.58-7.76,9.69-4.58,1.53-10.02,1.77-11.64,7.74-.65,0-1.29,0-1.94,0Z"
              ></path>
              <path
                class="cls-73"
                d="M217.26,242.13c.18,3.39-.11,6.69-1.96,9.67-15.34,0-15.48,.02-17.13-12.19-.53-3.89-1.92-9.37,4.94-8.95,5.34,.33,13.26-3.59,14.1,6.63,.13,1.6,.04,3.22,.05,4.84Z"
              ></path>
              <path
                class="cls-71"
                d="M176.5,240.18c0-2.58,.01-5.16,.02-7.74q9.48-17.36,29-12.62c1.55,.38,3.09,.82,4.67,1.03,2.48,.32,4.09,1.67,5.13,3.84,0,0-.02,.02-.02,.02-8.56-.62-17.13-.21-25.73-.75-8.18-.52-9.7,7.96-10.61,14.37-.65,4.55,.46,9.35-2.44,13.5,0-3.88,0-7.76-.01-11.64Z"
              ></path>
              <path
                class="cls-99"
                d="M201.73,275.06c-3.1-7.74-9.43-8.46-16.57-7.81-3.5,.32-7.06,.06-10.59,.05,3.67-11.11,12.53-7.1,19.52-5.88,6.92,1.2,10.11,6.28,7.64,13.63Z"
              ></path>
              <path
                class="cls-179"
                d="M192.02,239.28c0,2.25,.06,4.49-.02,6.74-.09,2.55,.14,5.74-3.7,5.27-3.34-.41-6.5-2.12-5.72-6.23,.83-4.37,2.47-8.58,3.63-12.9,.59-2.19,.9-4.87,3.87-4.4,2.51,.39,1.81,3,1.91,4.79,.13,2.24,.03,4.49,.03,6.74Z"
              ></path>
              <path
                class="cls-119"
                d="M191.97,302.1c-5.03,.6-9.49-1.33-13.95-3.17-1.37-.57-3.47-1.48-2.04-3.32,.74-.96,2.89-.82,4.4-1.18,3.87,0,7.75,0,11.62-.01,0,0,.03,.03,.03,.03,0,1.29,0,2.58,0,3.87-.02,1.26-.04,2.53-.06,3.79Z"
              ></path>
              <path
                class="cls-151"
                d="M176.5,240.18c0,3.88,0,7.76,.01,11.64-.45,6.9-3.3,12.3-9.69,15.5,5.02-8.41,7.08-17.87,9.67-27.14Z"
              ></path>
              <path
                class="cls-99"
                d="M182.33,292.49c1.62-5.97,7.06-6.22,11.64-7.74-.98,6.92-5.81,8.09-11.64,7.74Z"
              ></path>
              <path
                class="cls-463"
                d="M191.97,302.1c.02-1.26,.04-2.53,.06-3.79,1.29,0,2.58,0,3.87,0,4.53,.97,9.06,3.4,13.59,0,11.74-1.32,23.18,2.8,34.9,1.88,7.85-.33,15.62,.29,23.31,1.88,2.65,.38,5.64-.65,7.76,1.89-12.93,.09-25.86,.18-38.79,.27-14.3-.24-28.6-.48-42.91-.73-.6-.47-1.2-.94-1.79-1.41Z"
              ></path>
              <path
                class="cls-171"
                d="M172.94,303.91c-22.13,.03-44.26,.05-66.39,.08,4.97-3.45,10.61-1.78,15.85-1.61,16.84,.53,33.79-1.95,50.53,1.53Z"
              ></path>
              <path
                class="cls-151"
                d="M215.31,224.68c-1.04-2.17-2.65-3.51-5.13-3.84-1.57-.21-3.12-.65-4.67-1.03q-19.52-4.73-29,12.62c-.65-.65-1.3-1.29-1.95-1.94,0,0,0,0,0,0-.61-3.32,3.65-5.11,2.52-8.8-2.12-6.9,2.76-8.94,7.97-10.38,2.35-.65,5.21,.44,6.98-2.13,.64,0,1.29,0,1.93-.01,5.59,3.83,11.3,7.16,18.21,8.47,3.72,.7,8.84,1.11,8.96,7.03-1.94,0-3.89,0-5.83,0Z"
              ></path>
              <path
                class="cls-164"
                d="M221.14,224.68c-.12-5.93-5.25-6.33-8.96-7.03-6.92-1.3-12.62-4.63-18.21-8.47,2.33-2.81,6.01-2.78,7.67-.73,7.74,9.56,20.38,7.2,30.23,12.17,8.75,4.42,8.55,7.11,6.74,13.78,0,0-.02-.02-.02-.02-4.15-3.85-7.3-3.75-10.35,1.65-5.58,9.89-7.4,20.21-5.17,31.3-5.3-5.24-5.02-11.66-2.61-17.7,2.53-6.35,2.12-13.39,6.81-19.46,3.06-3.97-3.2-4.4-6.12-5.48Z"
              ></path>
              <path
                class="cls-164"
                d="M192.03,209.19c-1.77,2.56-4.63,1.48-6.98,2.13-5.21,1.43-10.08,3.48-7.97,10.38,1.14,3.7-3.13,5.48-2.52,8.8-4.32-17.66,4.54-26.12,17.46-21.3Z"
              ></path>
              <path
                class="cls-467"
                d="M223.06,267.32c-2.22-11.08-.41-21.41,5.17-31.3,3.05-5.4,6.2-5.5,10.35-1.65-12.16,3.26-17.83,21.36-9.7,31,2.59,3.88,5.17,7.75,7.76,11.63,2.63,7.2,3.4,14.21-2.92,20.36,3.85,1.97,8.04-.56,10.67,2.83-11.72,.92-23.16-3.19-34.9-1.88-1.04-2.85,2.94-6.5-.68-8.59-3.56-2.07-4.2,2.66-6.45,3.84-1.3,.68-2.99,.62-4.5,.89l-.02-.02c6.88-12.32,13.78-13.29,21.38-2.71,3.09,4.3,6.16,3.06,8.77,.43,3.48-3.51,10-6.48,4.51-13.17-3.17-3.87-7.52-6.78-9.45-11.66Z"
              ></path>
              <path
                class="cls-258"
                d="M252.19,236.39c-5.47,4.32-14.86,5.19-13.62,15.42-3.65,9.03,.53,17.28,7.76,23.38,6.86,5.79,15.59,10.21,19.43,19.21-.01,.64-.02,1.28-.03,1.92-10.84-4.58-17.35-14.52-25.89-21.84-4.77-4.09-12.45-10.37-8.23-18.61,2.64-5.15,3.42-11.04,6.99-15.68,3.73-3.78,9.13-3.6,13.56-5.72,0,.64,.01,1.27,.03,1.91Z"
              ></path>
              <path
                class="cls-411"
                d="M238.6,240.2c-3.57,4.64-4.35,10.53-6.99,15.68-4.22,8.24,3.46,14.52,8.23,18.61,8.54,7.32,15.05,17.25,25.89,21.84,1.59,.11,3.07,.43,3.95,1.97-.68,.64-1.37,1.28-2.05,1.92-8.63-3.13-17.36-6.21-22.62-14.47-2.24-3.52-4.66-6.71-8.38-8.74-2.59-3.88-5.17-7.75-7.76-11.63-2.22-10.51,2.54-22.85,9.72-25.18Z"
              ></path>
              <path
                class="cls-373"
                d="M139.64,133.62c1.83,1.17,4.82,2,5.29,3.58,2.95,9.93,10.46,8.84,17.98,8.07,0,0,0,0,0,0,.23,2.22-.34,5.7,.83,6.44,7.78,4.92,8.4,16.31,18.81,19.26,4.69,1.33,9.39,5.54,11.39,11.09-1.29,0-2.58,0-3.87,.01-3.94-.14-6.05-2.72-7.77-5.82-1.13-3.04-4.15-3.71-6.5-5.25-3.97-2.6-9.8-4.58-11.33-8.27-4.48-10.82-17.7-11.59-22.65-21.49-1.39-2.79-5.2-1.64-8-1.81,1.4-2.47,2-5.74,5.81-5.82Z"
              ></path>
              <path
                class="cls-400"
                d="M190.09,182.06c1.29,0,2.58,0,3.87-.01,5.99-1.48,8.21,5.82,13.57,5.83,12.29,7.1,24.59,14.2,36.88,21.3-2.58,0-5.16-.02-7.74-.03-12.47-7.77-25.12-15.26-38.63-21.05-3.42-1.47-6.21-2.82-7.96-6.04Z"
              ></path>
              <path
                class="cls-384"
                d="M244.41,209.18c-12.29-7.1-24.59-14.2-36.88-21.3,2.59,0,5.18,0,7.77-.01,11.21,1.83,18.47,10.73,27.98,15.68,7.84,4.08,15.13,9.33,22.28,14.58,6.18,4.53,5.4,8.53-1.78,12.34,1.9-14.69-11.03-15.9-19.38-21.28Z"
              ></path>
              <path
                class="cls-385"
                d="M215.3,187.87c-2.59,0-5.18,0-7.77,.01-5.36,0-7.57-7.3-13.57-5.83-2.01-5.54-6.7-9.76-11.39-11.09-10.41-2.95-11.03-14.34-18.81-19.26-1.17-.74-.6-4.23-.83-6.44,8.94,3.82,12.44,13.08,19.08,19.26,3.1,2.89,5.18,6.38,10.02,5.91,3.75,8.4,11.01,10.94,19.4,11.63,1.29,1.94,2.59,3.87,3.88,5.81Z"
              ></path>
              <path
                class="cls-500"
                d="M106.66,846.62c-.03-8.67,1.2-16.94,5.3-24.87,4.9-9.5,2.1-19.54,.53-29.37,0,0,0,0,0,0,3.23-2.71,1.47-6.42,1.94-9.68,0,0,0,0,0,0,2.71-3,3.47-6.75,3.82-10.55,1.7-18.4,3.02-36.82,1.97-55.32,.04-13.59-.41-27.21,1.9-40.69,.83-4.48-1.66-9.42,1.9-13.52-.54,37.52,.04,75.02-1.13,112.57-.77,24.79-7.84,47.74-12.25,71.48-.54,.09-1.09,.17-1.64,.23-.78-.09-1.57-.17-2.35-.26Z"
              ></path>
              <path
                class="cls-77"
                d="M110.65,846.65c4.41-23.74,11.48-46.69,12.25-71.48,1.17-37.55,.59-75.05,1.13-112.57,.45-12.3,2.82-24.51,1.78-36.88,.14-3.91,.27-7.82,.4-11.72,.56,.11,1.12,.23,1.68,.37,.05,3.15,.09,6.3,.14,9.45,.03,8.39,.05,16.79,.08,25.18-.1,3.12-.19,6.24-.28,9.36-3.33,7-1.26,14.41-1.69,21.63,.9,16.15-1.89,32.43,1.83,48.47,0,0,0,.02,0,.02-.01,10.28-.02,20.57-.04,30.85h-.02c-2.64,2.19-1.75,5.25-2.06,8.04-2.49,21.98-.13,44.66-9.55,65.63-4.78,3.35,2.02,11.48-5.65,13.64Z"
              ></path>
              <path
                class="cls-175"
                d="M126.21,614c-.13,3.91-.27,7.82-.4,11.72-2.34-12.27-3.26-24.52,.29-36.75,.04,8.34,.08,16.68,.11,25.02Z"
              ></path>
              <path
                class="cls-103"
                d="M120.23,716.82c1.05,18.5-.27,36.92-1.97,55.32-.35,3.81-1.12,7.55-3.82,10.55,1.3-21.95,2.6-43.9,3.9-65.85,.63-.02,1.26-.03,1.89-.02Z"
              ></path>
              <path
                class="cls-103"
                d="M114.43,782.7c-.47,3.26,1.29,6.97-1.94,9.68,.47-3.26-1.3-6.97,1.94-9.68Z"
              ></path>
              <path
                class="cls-82"
                d="M91.17,875.71c-5.83,5.8-11.65,11.61-17.48,17.41-1.78-8.39,4.63-13.51,8.44-19.32,2.67-4.07,5.54,3.04,9.04,1.91Z"
              ></path>
              <path
                class="cls-105"
                d="M106.66,846.62c.78,.09,1.57,.17,2.35,.26-.73,5.3,.61,11.16-4.21,15.35-1.32-.04-2.63-.08-3.95-.12,3.26-4.67,.4-11.62,5.8-15.49Z"
              ></path>
              <path
                class="cls-40"
                d="M62,920.24c-3.13,3.51-1.65,10.08-7.75,11.61-.03-.7-.06-1.4-.09-2.1,1.35-3.16,2.7-6.31,4.05-9.46,1.26-.02,2.53-.03,3.79-.05Z"
              ></path>
              <path
                class="cls-56"
                d="M104.8,862.23c4.82-4.18,3.47-10.05,4.21-15.35,.55-.06,1.09-.14,1.64-.23,7.66-2.16,.86-10.29,5.65-13.64,.04,2.61,.07,5.23,.11,7.84-1.34,10.64-3.86,20.69-13.55,27.17,.65-1.93,1.3-3.86,1.95-5.8Z"
              ></path>
              <path
                class="cls-142"
                d="M236.59,947.51c27.85,.02,55.7,.05,83.55,.08-1.12,.55-2.24,1.57-3.36,1.57-25.61,.07-51.23,.06-76.84-.05-1.12,0-2.23-1.04-3.35-1.6Z"
              ></path>
              <path
                class="cls-142"
                d="M360.98,947.65c-.11,.54-.18,1.08-.23,1.62-5.16-.73-10.67,1.66-15.54-1.69,5.26,.02,10.51,.04,15.77,.07Z"
              ></path>
              <path
                class="cls-75"
                d="M108.68,972.62c1.27-3.64,4.27-4.17,7.54-4.2-.24,5.47-4.46,3.82-7.54,4.2Z"
              ></path>
              <path
                class="cls-30"
                d="M133.25,660.78c-3.28,24.46,4.14,128.64,.84,147.21-.67,.02-5.47-79.52-6.13-79.5,0,0,0-.02,0-.02-.03-16.16-.05-32.33-.08-48.49,.08-6.4,.17-12.8,.25-19.2,3.05-3.56,1.34-7.83,1.78-11.79l-.03-25.16c.03-3.89,.06-7.78,.09-11.68,4.19,9.83,1,20.14,1.89,30.19,.37,4.13,1.38,14.27,1.39,18.43Z"
              ></path>
              <path
                class="cls-3"
                d="M131.77,441.86c-3.51-7.34-1.37-15.1-1.59-22.66-.35-11.87-.17-23.75-.22-35.63,3.77,4.54,1.72,9.91,1.82,14.85,.28,14.47,.03,28.96,0,43.44Z"
              ></path>
              <path
                class="cls-138"
                d="M129.98,612.15c-.03,3.89-.06,7.78-.09,11.67-.62,0-1.24-.01-1.86,0-.05-3.15-.09-6.3-.14-9.45,.07-5.31,.15-10.62,.22-15.93,3.29,4.21,1.14,9.16,1.87,13.72Z"
              ></path>
              <path
                class="cls-3"
                d="M127.99,375.82c-1.29-2.58-2.59-5.17-3.88-7.75,1.29,0,2.58,0,3.87,0,0,2.58,0,5.16,0,7.74Z"
              ></path>
              <path
                class="cls-33"
                d="M89.22,340.86c-11.45-10.26-12.36-20.51,.03-30.74,18.59-.61,37.39-2.35,55.72-1.45,42.92,2.12,85.78,.36,128.65,1.16,12.5-.04,25.52,2.16,37.4-.58,23.42-5.41,46.11,3.26,69.13,.92,5.97,9.58,15.45,4.31,23.4,5.52,3.21,.11,6.42,.22,9.62,.33,3.65,4.63,8.75,3.68,13.64,3.53,.53,.16,1.07,.24,1.63,.24,5.34,3.68,10.78,7.04,17.74,5.55,2.34,2.27,4.34,5,7.78,5.82,1.84,7.53,12.51,7.38,13.56,15.58-10.11-2.57-18.26-9.29-27.85-13.02-19.79-7.7-39.49-14.98-61.37-14.26-37.7,1.25-75.41-1.17-113.05-2.44-32.55-1.09-65.14,.6-97.57-1.68-21.59-1.52-43.12-1.16-64.67-1.51-5.54-.09-13.26-2.14-14.77,5.33-1.45,7.16-3.66,16.45,7.69,19.45,1.12,.3,1.99,1.52,2.98,2.31,0,0,0,.02,0,.02-2.63,.04-5.25,.07-7.88,.11-.61,.02-1.22-.05-1.81-.2Z"
              ></path>
              <path
                class="cls-14"
                d="M467.52,346.74c-1.06-8.2-11.73-8.06-13.56-15.58,1.94,.64,3.88,1.28,5.82,1.92,5.53,4.92,13.2,7.09,17.48,13.61,1.3,1.94,2.61,3.89,3.91,5.83-1.96-.63-3.91-1.26-5.87-1.89-1.99-2.52-4.71-3.56-7.8-3.9h.02Z"
              ></path>
              <path
                class="cls-137"
                d="M481.16,352.52c-1.3-1.94-2.61-3.89-3.91-5.83,5.64-.59,9.26,3.64,13.77,5.76,3.83,3.22,8.93,4.94,11.51,9.65-.07,1.4-.13,2.8-.2,4.2-6.59-5.3-12.53-11.62-21.18-13.77Z"
              ></path>
              <path
                class="cls-145"
                d="M521.7,381.73c1.39,5.21,5.37,8.36,9,11.95,3.75,3.7,9.09,6.58,8.66,13.11-5.75-4.47-9.58-10.93-15.85-14.91-3.69-2.34-3.9-6.33-3.56-10.3,.59,.03,1.17,.08,1.76,.15Z"
              ></path>
              <path
                class="cls-17"
                d="M521.7,381.73c-.59-.07-1.17-.11-1.76-.15-1.14-2.56-3.22-3.67-5.91-3.81,.01-4.45-4.1-6.23-6.1-9.37,.23-.25,.46-.5,.7-.74,6.02,2.15,9.44,7.25,13.36,11.77-.09,.76-.19,1.52-.28,2.28Z"
              ></path>
              <path
                class="cls-29"
                d="M507.92,368.41c2.01,3.14,6.12,4.91,6.1,9.37-5.06-1.37-6.49-6.4-9.73-9.61,1.21,.08,2.42,.16,3.63,.24Z"
              ></path>
              <path
                class="cls-17"
                d="M507.92,368.41c-1.21-.08-2.42-.16-3.63-.24-.65-.62-1.3-1.25-1.96-1.87,.06-1.4,.13-2.8,.19-4.2,3.36,.41,5.28,2.38,6.09,5.57-.24,.24-.47,.49-.7,.74Z"
              ></path>
              <path
                class="cls-33"
                d="M467.5,346.73c3.08,.34,5.81,1.39,7.8,3.9-3.35,.19-6.31-.38-7.8-3.9Z"
              ></path>
              <path
                class="cls-12"
                d="M240.29,839.02c-.62-1.23-1.25-2.45-1.87-3.68,.6-7,2.11-13.25-3.95-20.03-3.45-3.86-1.65-12.69-1.66-19.29-.07-123.18-.06-246.35-.02-369.53,0-9.47,.64-18.89,5.77-27.32,7.3-5.94,15.44-8.46,25.03-8.03,13.15,.59,26.18-2.17,39.44-1.96,18.01,.29,35.85,1.59,54.55,4.53-3.12,2.34-5.94,1.03-8.42,1.49-26.49,0-52.97-.14-79.46,.02-15.84,.09-25.21,8.04-27.02,23.02-1.15,9.56-2.1,19.22-2.13,28.84-.18,68.59-.12,137.17-.1,205.76,.01,38.07,.1,76.13,.15,114.2,.89,8.41-2.28,17.1,1.78,25.29,.47,6.46-.49,13.07,2.07,19.31,2.29,9.69,1.14,18.85-4.17,27.38Z"
              ></path>
              <path
                class="cls-16"
                d="M244.47,811.64c-2.56-6.24-1.6-12.85-2.07-19.31-.66-8.42,1.72-17.06-1.78-25.29-.05-38.07-.14-76.13-.15-114.2-.02-68.59-.08-137.17,.1-205.76,.03-9.62,.97-19.28,2.13-28.84,1.81-14.98,11.18-22.93,27.02-23.02,26.49-.16,52.97-.03,79.46-.02,1.97,1.24,3.94,2.48,5.91,3.72-11.67,.09-23.34,.17-35,.26-16.65,.05-33.31-.12-49.95,.22-14.15,.29-21.79,7.45-23.7,21.33-.69,5.05-1.33,10.11-2,15.16-3.21,3.22-1.88,7.33-1.88,11.02-.11,62.33,.06,124.66-.19,186.99-.07,17.25,1.47,34.41,.37,51.77-1.4,22.12-.26,44.41-.14,66.63,.02,3.14-.82,6.5,1.61,9.25,.7,16.75,1.41,33.5,2.11,50.26-.62-.01-1.23-.07-1.84-.17Z"
              ></path>
              <path
                class="cls-169"
                d="M320.08,399.18c11.67-.09,23.34-.17,35-.26,1.24,.07,2.48,.15,3.73,.22,14.64,4.88,27.62,12.55,38.88,23.11,.99,2.6,2.92,3.89,5.66,4.04,.76,1.81,1.51,3.62,2.27,5.43-.07,.74-.13,1.48-.19,2.22-5.6-2.58-10.29-6.33-14.3-11-4.61-5.37-10.06-9.65-16.68-12.32-1.77-3.53-5.33-4.29-8.56-5.69-14.8-6.38-30.41-3.19-45.68-4.02-.05-.57-.09-1.15-.12-1.72Z"
              ></path>
              <path
                class="cls-70"
                d="M397.69,422.26c-11.26-10.56-24.24-18.22-38.88-23.11,13.54-2.19,23.21,6.1,32.5,13.4,5.41,4.26,12.54,7.02,15.92,13.75,.45,4.82,3.8,5.76,7.81,5.83,.69,2.51,1.38,5.01,2.07,7.52-.07,.75-.13,1.5-.2,2.24-3.77-3.39-7.53-6.78-11.3-10.17-.76-1.81-1.51-3.62-2.27-5.43,0-3.98-2.84-4-5.66-4.03Z"
              ></path>
              <path
                class="cls-25"
                d="M459.7,495.96c1.32,8.38,2.64,16.75,3.96,25.13-.72,.04-1.45,.07-2.17,.11-1.22-1.98-2.44-3.95-3.66-5.93,.55-9.78-4.06-17.65-9.38-25.26-.12-1.9-.23-3.81-.35-5.71,4.01,3.75,9.82,5.71,11.6,11.67Z"
              ></path>
              <path
                class="cls-124"
                d="M448.1,484.3c.12,1.9,.23,3.81,.35,5.71-.71,.04-1.42,.08-2.12,.11-5.75-6.37-10.05-13.65-13.7-21.36-.67-1.89-1.35-3.78-2.02-5.67,.74-.13,1.48-.27,2.22-.4,8.38,4.88,8.66,15.49,15.29,21.61Z"
              ></path>
              <path
                class="cls-1"
                d="M432.82,462.69c-.74,.13-1.48,.27-2.22,.4l-.02-.06c-.88-9.41-10.97-12.89-13.67-21.13,.07-.75,.13-1.5,.2-2.24,5.15,7.74,17.57,10.53,15.71,23.04Z"
              ></path>
              <path
                class="cls-67"
                d="M415.04,432.13c-4.01-.07-7.36-1.01-7.81-5.83,4.72-.89,6.51,2.15,7.81,5.83Z"
              ></path>
              <path
                class="cls-68"
                d="M461.49,521.2c.72-.04,1.45-.07,2.17-.11,.62,.67,1.25,1.34,1.87,2.01,.48,3.25-1.21,6.94,1.99,9.63,0,0,0,0,0,0,.62,4.53-1.6,9.43,1.81,13.59,6.2,7.76,6.29,17.58,7.37,26.49,3.58,29.44,3.41,59.01-1.25,88.4-.79,4.98,1.6,10.39-2.07,14.95-.69-.03-1.38-.06-2.07-.09,.29-5.43,.58-10.84,1.14-16.28,2.63-25.53,4.08-51.06,1.51-76.79-2.11-21.09-9.33-41.01-12.47-61.8Z"
              ></path>
              <path
                class="cls-140"
                d="M463.56,718.76c-1.91,8.39-3.81,16.78-5.71,25.17-5.33-.19-5.81,6.32-10.23,7.4,.12-2.47,.24-4.95,.37-7.42,.11-1.16,.22-2.32,.34-3.48,4.71-2.26,7.03-6.06,7.49-11.21,.39-4.4,.66-8.89,3.77-12.49,3.44-1.5,1.01-5.99,3.95-7.74,.08,.71,.15,1.42,.23,2.13-.07,2.55-.14,5.1-.2,7.65Z"
              ></path>
              <path
                class="cls-11"
                d="M463.76,711.11c-.08-.71-.15-1.42-.23-2.13,1.95-5.14,3.9-10.27,5.84-15.41,3.97-5.46,1.21-11.68,1.96-17.5h-.02c.69,.03,1.38,.06,2.07,.09,.54,12.68,.08,25.08-9.62,34.95Z"
              ></path>
              <path
                class="cls-25"
                d="M469.33,546.33c-3.41-4.16-1.18-9.06-1.81-13.59,3.58,4.13,1.24,9.05,1.81,13.59Z"
              ></path>
              <path
                class="cls-25"
                d="M467.52,532.74c-3.2-2.69-1.51-6.38-1.99-9.63,3.3,2.67,1.54,6.38,1.99,9.63Z"
              ></path>
              <path
                class="cls-138"
                d="M116.41,840.85c-.04-2.61-.07-5.23-.11-7.84,9.41-20.97,7.06-43.65,9.55-65.63,.32-2.79-.58-5.85,2.06-8.03,.04,3.91,.09,7.82,.13,11.73-.11,23.66-1.96,47.07-9.84,69.63-.6,.06-1.19,.1-1.79,.14Z"
              ></path>
              <path
                class="cls-30"
                d="M130,740.01c3.72,6.17,1.03,12.97,1.87,19.42-.6,.04-1.19,.1-1.78,.15,0,0-.23-.22-.23-.22,.05-6.45,.09-12.9,.14-19.35Z"
              ></path>
              <path
                class="cls-30"
                d="M128.03,771.08c-.04-3.91-.08-7.82-.13-11.73,0,0,.02-.01,.02-.01,.65,0,1.29,0,1.94,.01,0,0,.22,.22,.23,.22-.87,3.8,1.34,8.16-2.06,11.51Z"
              ></path>
              <path
                class="cls-168"
                d="M597.46,602.53c.03,12.91,.05,25.81,.08,38.72-.05,3.85-.09,7.7-.14,11.56-1.96,14.9-3.92,29.8-5.87,44.7-1.53,.87-1.76,2.36-1.86,3.91-.64-.06-1.27-.11-1.91-.17,1.98-19.39,3.95-38.77,5.93-58.16,3.85-9.08,.82-18.62,1.88-27.88,.49-4.24-1.64-8.89,1.9-12.68Z"
              ></path>
              <path
                class="cls-168"
                d="M595.58,548.21c5.17,14.68,5.18,29.59,1.96,44.63-.65-14.88-1.3-29.76-1.96-44.63Z"
              ></path>
              <path
                class="cls-178"
                d="M589.79,519.11c2.9,5.48,4.12,11.33,3.83,17.5-3.37-5.38-4.16-11.32-3.83-17.5Z"
              ></path>
              <path
                class="cls-51"
                d="M576.17,476.57c3,2.55,4.1,5.85,3.81,9.68-2.57-1.08-3.8-3.06-3.89-5.81,.02-1.29,.05-2.59,.08-3.88Z"
              ></path>
              <path
                class="cls-178"
                d="M587.76,507.66c3.02,2.71,1.55,6.32,1.91,9.56-3.16-2.68-1.48-6.34-1.91-9.56Z"
              ></path>
              <path
                class="cls-46"
                d="M574.18,778.82c-2.15,8.6-8.48,15.08-11.71,23.13-.28-9.82,1.16-18.78,11.71-23.13Z"
              ></path>
              <path
                class="cls-466"
                d="M589.66,701.42c.1-1.55,.33-3.04,1.86-3.91-.41,7.7,2.06,15.62-1.76,23.05-.04-6.38-.07-12.76-.11-19.14Z"
              ></path>
              <path
                class="cls-8"
                d="M360.87,855.94c-13.5,2.51-27.11,2.94-40.78,2,.7-4.14,3.95-3.52,6.78-3.54,5.16-.05,10.42,.58,15.47-.16,7.23-1.06,15.46-.09,20.41-7.55,12.34-.06,16.85-11.58,25.33-17.28,6.98,.35,7.4-6.93,11.53-9.9,3.88-.02,7.75-.05,11.63-.07-12.41,18.19-29.16,30.42-50.38,36.5Z"
              ></path>
              <path
                class="cls-53"
                d="M420.69,798.01c-.53,.11-1.07,.19-1.61,.24-2.89,2.52-4.63,6.99-9.74,5.78,.63-.73,1.27-1.45,1.9-2.18,5.1-10.05,17.77-13.63,21.39-24.94,6.17-6.08,7.03-15.44,13.28-21.47,.06,1.95,.11,3.9,.17,5.84-5.01,7.9-9.95,15.83-11.61,25.26,0,0,0,0,0,0-4.38,4.08-11.72,4.61-13.78,11.47Z"
              ></path>
              <path
                class="cls-5"
                d="M409.34,804.02c5.12,1.22,6.85-3.26,9.74-5.78-.79,5.6-1.75,11.13-5.89,15.46-7.97-6.1-9.12,3.7-13.57,5.81-4.12,2.97-4.55,10.24-11.53,9.9-.68-.07-1.35-.13-2.03-.19,1.27-1.31,2.54-2.61,3.81-3.92,4.48-6.4,12.04-10.09,15.44-17.45,.44-2.22,1.51-3.79,4.03-3.82Z"
              ></path>
              <path
                class="cls-48"
                d="M445.91,755.42c-6.25,6.03-7.12,15.39-13.28,21.47-.1-1.56-.37-3.05-1.89-3.93,2.17-2.37,4.74-4.45,5.6-7.77,1.98-4.52,3.96-9.03,5.94-13.55,2.83-1.9,1.76-6.66,5.71-7.75-.12,2.47-.24,4.95-.37,7.42-.57,1.37-1.14,2.73-1.7,4.1Z"
              ></path>
              <path
                class="cls-121"
                d="M434.47,786.53c1.66-9.43,6.6-17.37,11.61-25.26,.98,10.64-5.81,17.73-11.61,25.26Z"
              ></path>
              <path
                class="cls-10"
                d="M399.61,819.51c4.45-2.11,5.6-11.91,13.57-5.81-.65,1.91-1.29,3.83-1.94,5.74-3.88,.02-7.75,.04-11.63,.07Z"
              ></path>
              <path
                class="cls-121"
                d="M420.69,798.01c2.06-6.86,9.41-7.38,13.78-11.47-1.57,7.44-7.68,9.46-13.78,11.47Z"
              ></path>
              <path
                class="cls-148"
                d="M234.77,945.15c-.01-.48,.01-.97,.09-1.44,28.38-.07,56.76-.13,85.14-.2,0,0,.13,.18,.13,.18-.04,.56-.06,1.13-.07,1.7-28.43-.08-56.86-.16-85.29-.24Z"
              ></path>
              <path
                class="cls-64"
                d="M320.06,945.39c0-.57,.03-1.13,.07-1.7,14.08,0,28.15,0,42.23,0,0,.57,.02,1.13,.02,1.7h-42.32Z"
              ></path>
              <path
                class="cls-32"
                d="M362.75,846.68c-4.95,7.45-13.17,6.48-20.41,7.55-5.06,.74-10.31,.11-15.47,.16-2.83,.03-6.08-.6-6.78,3.54-5.22,.01-10.43,.03-15.65,.05-8.99-2.64-17.98-2.68-26.97,.02-1.31-.03-2.63-.06-3.94-.09-.24-2.25,2.57-5.09-.95-6.68-3.52-1.59-3.39,.99-4.62,3.46-1.68,3.36-5.78,2.22-8.01,.04-4.07-3.97,2.43-3.61,3.03-6.67-2.63-2.35-9.17-1.03-8.89-7.17,.64,0,1.28-.02,1.92-.04,5.31,3.54,12.3,1.81,17.54,5.56,3,3.29,6.21,2.85,9.52,.53,1.99-.02,3.99-.03,5.98-.05,7.71,1.82,15.39,3.72,23.12,5.42,4.74,1.04,8.12-.8,9.86-5.42,1.29-.17,2.57-.34,3.86-.51,7.7,.02,15.4,.05,23.1,.07,4.59,.08,9.18,.15,13.77,.23Z"
              ></path>
              <path
                class="cls-47"
                d="M246.3,811.8c-.7-16.75-1.41-33.5-2.11-50.26l.52-.44c.49,.19,1,.32,1.52,.38,.81,7.09-1.72,14.47,1.9,21.31,1.06,8.37-1.87,17.05,2.02,25.19,.04,8.84,4.05,16.75,5.89,25.16-.61,.6-1.22,1.19-1.83,1.79-1.28-1.95-2.57-3.9-3.85-5.84-1.35-5.77-2.69-11.53-4.04-17.3Z"
              ></path>
              <path
                class="cls-52"
                d="M250.34,829.1c1.28,1.95,2.57,3.9,3.85,5.84,.6,1.97,1.2,3.94,1.8,5.91-.64,.02-1.28,.04-1.92,.04-1.53-3.84-4.53-7.22-3.74-11.79Z"
              ></path>
              <path
                class="cls-60"
                d="M533.1,856.12c-10.61,5.38-16.89,14.84-22.88,24.49-1.62,2.61-1.73,6.33-5.83,6.76,2.15-14.16,13.82-22.18,21.26-32.93,6.44,.07,5.69-7.31,9.9-9.54,.04,.66,.09,1.33,.14,1.99-.86,3.08-1.73,6.16-2.59,9.24Z"
              ></path>
              <path
                class="cls-51"
                d="M550.93,422.32c3.51,7.9,9.98,14.35,11.45,23.26-4.81-3.71-5.63-10.78-11.47-13.62-2.21-3.22-5.25-6.44,.03-9.64Z"
              ></path>
              <path
                class="cls-51"
                d="M572.35,459.23c2.43,5.51,3.72,11.27,3.79,17.29-5.64-4.81-3.48-11.32-3.79-17.29Z"
              ></path>
              <path
                class="cls-51"
                d="M564.43,447.67c2.86,3.6,7.12,6.24,7.77,11.34-5.42-1.85-7.52-5.96-7.77-11.34Z"
              ></path>
              <path
                class="cls-21"
                d="M277.47,858c8.99-2.7,17.98-2.66,26.97-.02-8.99,0-17.98,.01-26.97,.02Z"
              ></path>
              <path
                class="cls-3"
                d="M91.03,341.06c2.63-.04,5.25-.07,7.88-.11,1.91,1.37,3.81,2.75,5.72,4.13-4.85-.27-9.88,.06-13.6-4.02Z"
              ></path>
              <path
                class="cls-101"
                d="M533.1,856.12c.86-3.08,1.73-6.16,2.59-9.24,4.23-1.01,5.09-4.22,5.2-7.93,3.99-6.51,4.81-14.94,11.91-19.56,.66,.03,1.32,.06,1.97,.08-3.95,10.59-13.36,18.8-13.58,31.02-3.42,.83-3.6,6.33-8.09,5.62Z"
              ></path>
              <path
                class="cls-419"
                d="M540.89,838.96c-.11,3.7-.97,6.92-5.2,7.93-.04-.66-.09-1.33-.13-1.99,1.21-1.98,2.42-3.95,3.63-5.93,.57-.04,1.14-.05,1.71,0Z"
              ></path>
              <path
                class="cls-338"
                d="M289.02,282.81c-4.41-.3-9.62-2.99-11.63,3.88-1.26-.17-3.49-.07-3.64-.57-2.16-7.44-8.82-5.8-13.97-7.97-11.91-5.01-22.14-10.86-19.26-26.33,.65-.64,1.3-1.28,1.95-1.92,1.06,15.47,13.27,25.03,28.04,24.27,6.52-.33,14.92,.33,18.5,8.64Z"
              ></path>
              <path
                class="cls-372"
                d="M403.49,290.55c0-.64,0-1.28-.01-1.93,8.7-8.62,19.51-11.88,31.34-11.01,3.71,.27,7.48,1.34,11.33,1.32-8.32,7.95,1.54,11.86,3.89,17.45-2.8,5.07-2.96,9.36,3.09,12.37,2.06,1.03,3.47,2.93,.79,5.07-1.94-.65-3.87-1.29-5.81-1.94,0-.64-.01-1.28-.02-1.92-3.95-8.3-6.4-18.47-19.37-15.57-7.27-8.7-16.2-6.57-25.22-3.85Z"
              ></path>
              <path
                class="cls-371"
                d="M450.04,296.38c-2.35-5.58-12.21-9.49-3.89-17.45,18.17,.77,34.13,8.68,50.44,15.49-6.36-.73-12.77-1.21-19.08-2.25-13.85-2.28-13.83-2.39-13.9,11.93-3.35-4.64-4.15-13.76-13.58-7.73Z"
              ></path>
              <path
                class="cls-440"
                d="M463.62,304.11c.07-14.33,.05-14.21,13.9-11.93,6.31,1.04,12.72,1.52,19.08,2.25,1.29,.66,2.59,1.31,3.88,1.97-.01,.65-.03,1.29-.04,1.94-2.85-.2-5.73-.25-8.56-.62-5.56-.73-11.66-7.22-16.52-.63-4.91,6.66,2.05,12.22,4.24,18.15,.32,.88,.97,1.63,1.47,2.44-.65,0-1.29,.01-1.94,.02-1.29-.66-2.59-1.32-3.88-1.98-3.17-4.57-3.85-11.63-11.62-11.61h0Z"
              ></path>
              <path
                class="cls-372"
                d="M420.56,275.22c-1.11,.66-1.78,1.38-2.49,1.42-1.32,.07-2.42-.7-1.95-2.15,.17-.52,1.49-.97,2.25-.91,.65,.05,1.23,.88,2.19,1.64Z"
              ></path>
              <path
                class="cls-428"
                d="M448.09,309.97c.01,.64,.02,1.28,.02,1.92-.01,1.29-.02,2.58-.03,3.87-14.22-6.28-27.33-16.82-44.55-11.71-5.84-1.91-11.68-3.83-17.51-5.74-11.64-5.16-22.37-12.38-34.91-15.52-8.74-4-16.01-2.65-21.34,5.83-2.88-1.4-6.19-3.34-8.43,.23-2.83,4.5-6.94,3.51-10.93,3.66-.23-6.71,6.05-8.04,9.63-11.6,0,0,.06-.08,.06-.08,15.84-6.04,31.19-4.53,46.26,2.77,8.31,4.03,16.18,9.1,25.48,10.83,4.95,6.56,11.5,3.88,17.58,2.81,10.77-1.91,20.99-2.39,29.05,6.99,2.49,2.9,5.38,5.58,9.63,5.74Z"
              ></path>
              <path
                class="cls-436"
                d="M448.09,309.97c-4.26-.15-7.14-2.84-9.63-5.74-8.06-9.38-18.28-8.9-29.05-6.99-6.09,1.08-12.63,3.75-17.58-2.81,3.4,.19,6.72-.09,9.72-1.93,9.06,.63,18.12,1.27,27.17,1.9,12.98-2.9,15.42,7.26,19.37,15.57Z"
              ></path>
              <path
                class="cls-439"
                d="M428.71,294.4c-9.06-.63-18.12-1.27-27.17-1.9,.65-.65,1.3-1.3,1.95-1.95,9.02-2.72,17.95-4.85,25.22,3.85Z"
              ></path>
              <path
                class="cls-247"
                d="M240.52,251.82c-2.87,15.47,7.36,21.32,19.26,26.33,5.15,2.17,11.81,.53,13.97,7.97,.14,.5,2.38,.39,3.64,.57,0,1.93,0,3.86,.01,5.8-3.88,.65-7.53,2.66-11.63,1.92-3.84-9-12.56-13.42-19.43-19.21-7.23-6.1-11.41-14.35-7.76-23.38,.65,0,1.3,0,1.94,0Z"
              ></path>
              <path
                class="cls-435"
                d="M265.77,294.4c4.1,.73,7.76-1.27,11.63-1.92,10.81,3.49,19.82-1.83,28.56-6.59,4.58-2.5,8.88-4.71,14.08-4.97-3.59,3.56-9.86,4.89-9.63,11.6-3.27,1.9-7.17,2.73-9.75,5.79-10.32,1.23-20.64,2.92-30.96,0-.88-1.53-2.36-1.86-3.95-1.96,0-.64,.02-1.28,.03-1.92Z"
              ></path>
              <path
                class="cls-125"
                d="M597.4,652.8c.05-3.85,.09-7.7,.14-11.56,3.52-11.44,2.74-23.39,3.43-35.07,1.03-17.33,.35-34.76,.41-52.15,3.08,10.46,3.81,21.4,3.18,31.99-.44,7.29-1.11,14.65-1.29,22-.73,30.1-2.45,60.13-5.95,90.04-.13,1.15-1.14,2.19-1.73,3.29-1.29-16.25,3.44-32.28,1.82-48.54Z"
              ></path>
              <path
                class="cls-468"
                d="M601.36,523.06c3.53,1.48,4.07,4.44,3.86,7.77-3.51-1.49-4.05-4.45-3.86-7.77Z"
              ></path>
              <path
                class="cls-392"
                d="M481.07,317.69c-.5-.81-1.15-1.57-1.47-2.44-2.19-5.93-9.15-11.49-4.24-18.15,4.86-6.59,10.95-.11,16.52,.63,2.83,.37,5.7,.42,8.56,.62,.03,.62,.06,1.25,.09,1.87,0,0-.07,.08-.07,.08-4.49-.01-8.99-.15-13.48,0-2.7,.09-6.28-1.16-7.42,2.61-1.08,3.59-.55,7.06,3.43,8.95,2.14,3.98,6.55,5.13,9.75,7.78,3.96,5.91,12.26,4.24,16.49,8.92,6.5,7.2,12.56,14.91,16.47,23.99,0,2.81,1.34,4.72,3.86,5.86,2.37,6.53,9.75,11.05,7.79,19.33-1.29,0-2.58,0-3.87,0-.28-5.65-8.41-2.67-8.24-6.02,.51-10.31-7.51-9.21-13.27-11.35-9.65-7.12-19.3-14.23-28.95-21.35,2.55-.65,5.09-1.3,7.64-1.95,.17,1.57,.47,3.06,2.05,3.88,6.2,6.42,14.12,10.47,21.33,15.51,1.36,2.3,2.93,4.75,5.88,2.43,2.32-1.83,2.64-4.28-.01-6.42-9.32-15.63-24.41-24.84-38.84-34.78Z"
              ></path>
              <path
                class="cls-427"
                d="M525.69,352.55c-3.91-9.07-9.97-16.78-16.47-23.99-4.23-4.68-12.53-3.01-16.49-8.92,6.81-.35,15.95,4.5,17.45-7.77,13.42,10.19,26.07,21.72,34.23,36.18,4.3,7.62,10.89,14.62,12.33,23.89-1.14-1.09-2.32-3.13-3.41-3.09-3.59,.15-6.83-7.03-9.41-2.12-2.08,3.95-3.62,11.3,5.65,11.51-1.14,4.09-4.07,3.09-6.41,3.39-4.01,1.96,.7,8.95-5.57,9.61-1.39-2.55-2.79-5.09-4.18-7.64,3.92-.21,8.12-.23,3.93-5.86,1.96-8.27-5.42-12.8-7.79-19.33,5.35-.93,3.77-5.06,3.69-8.32-.05-2.32-1.82-3.25-3.98-3.14-3.71,.2-3.43,3.06-3.58,5.6Z"
              ></path>
              <path
                class="cls-418"
                d="M537.59,391.25c6.26-.66,1.56-7.65,5.57-9.61,2.63,1.74,3.96,5.08,8.76,3.4,4.28-1.49,4.51,3.6,4.67,6.47,.36,6.37,.11,12.77,.11,19.16-7.42-2.92-7.91-12.76-15.52-15.49-1.78-.78-3.14-1.94-3.59-3.93Z"
              ></path>
              <path
                class="cls-412"
                d="M510.18,311.87c-1.49,12.27-10.63,7.42-17.45,7.77-3.2-2.65-7.6-3.8-9.74-7.78,4.06-8.63,11.88-7.82,19.42-7.72,.59,4.58,3.17,7.18,7.78,7.73Z"
              ></path>
              <path
                class="cls-458"
                d="M502.4,304.14c-7.54-.11-15.36-.91-19.42,7.72-3.98-1.89-4.51-5.36-3.43-8.95,1.13-3.77,4.72-2.52,7.42-2.61,4.49-.16,8.98-.02,13.48,0,.65,1.29,1.3,2.57,1.96,3.85Z"
              ></path>
              <path
                class="cls-465"
                d="M537.59,391.25c.45,1.99,1.81,3.16,3.59,3.93-.03,1.37-.06,2.73-.09,4.1-7.89-5.15-11.68-14.24-19.11-19.83-3.93-4.52-7.34-9.62-13.36-11.78-.8-3.19-2.73-5.17-6.08-5.57-2.59-4.71-7.68-6.43-11.52-9.65-4.68-8.94-13.82-12.27-21.69-17.2,1.33-.63,2.67-1.26,4-1.9,3.23,1.89,6.46,3.78,9.7,5.67,9.65,7.12,19.3,14.23,28.96,21.35,4.51,8.98,11.7,15.49,19.64,21.31,.6,.64,1.19,1.28,1.79,1.93,1.39,2.55,2.79,5.09,4.18,7.64Z"
              ></path>
              <path
                class="cls-422"
                d="M64,569.56c.92,20.18-1.28,40.15-3.89,60.1-6.11-11.19-3.69-23.8-5.34-35.67-1.88-13.6-.5-27.65-.37-41.51,.01-1.42,1.19-2.82,1.82-4.23,6.49-.42,10.68,.67,8.07,9-1.18,3.77-.27,8.19-.3,12.31Z"
              ></path>
              <path
                class="cls-401"
                d="M85.32,505.63c-4.3,2.73-4.9,7.92-7.75,11.61-1.29-6.45-2.26-12.69,7.75-11.61Z"
              ></path>
              <path
                class="cls-350"
                d="M100.85,647.07c-2.87,3.96-4.01,11.26-11.68,5.33-2.18-1.69-3.63,2.01-5.77,2.42-4.31-8.32-5.03-16.78-2.13-25.85,2.87-8.98-1.31-18.13,0-27.39,1.49-10.56,1.49-21.33,2.14-32.01,4.99-5.14,6.81-11.64,7.7-18.45,.37-2.8-.51-6.37,2.64-7.6,3.91-1.53,5.37,2.16,7.11,4.73-6.17-.81-6.1,4.35-7.47,7.96-3.13,8.21-1.07,17.12-3.23,25.39-.73,2.81-4.72,5.47-1.47,8.23,3.28,2.78,5.45-1.91,8.29-2.82-3.72,13.63-1.33,27.53-1.8,41.31-.09,2.48,1.57,4.12,3.74,5.19,0,0,0,0,0,0,.64,4.52,1.29,9.05,1.93,13.57Z"
              ></path>
              <path
                class="cls-319"
                d="M100.85,548.25c-1.74-2.57-3.19-6.26-7.11-4.73-3.15,1.23-2.27,4.8-2.64,7.6-.9,6.81-2.71,13.31-7.7,18.45,0-.64,0-1.29,0-1.93,1.31-7.37-2.29-14.82,3.21-22.49,4.07-5.67,7.64-8.69,14.25-8.53,5.77-.48,5.5,3.35,5.92,7.47,1.25,12.37-1.95,24.41-4.65,35.94-4.2,17.9-2.42,35.66-3.21,53.48-2.17-1.07-3.83-2.71-3.74-5.19,.48-13.77-1.91-27.68,1.8-41.31,5.27-12.52,3.76-25.72,3.88-38.76Z"
              ></path>
              <path
                class="cls-22"
                d="M91.09,346.82c5.92,.01,12.46-1.58,15.41,6.02-6.1,.46-10.5-3.42-15.41-6.02Z"
              ></path>
              <path
                class="cls-129"
                d="M390.34,309.67c-16.35-6.85-33.69-4.95-50.73-5.7-.11-.58-.19-1.16-.23-1.75,.68-.68,1.35-1.36,2.03-2.04,16.65-4.71,32.55-.17,48.49,3.92,4.2,5.09,10.06,3.64,15.48,3.91,2.85,3.1,6.61,1.41,9.96,1.92,9.64,1.47,19.37,2.72,26.89,9.93-1.92-.04-3.83-.09-5.75-.13-.59-.18-1.2-.26-1.82-.24-1.74-3.15-4.54-4.02-7.9-3.68-4.3-2.31-8.92-2.04-13.55-1.69-7.8-.57-14.64-6.05-22.87-4.46Z"
              ></path>
              <path
                class="cls-116"
                d="M339.38,302.23c.04,.59,.11,1.17,.23,1.75-30.94-.1-61.8,3.42-92.76,1.93-3.42-.16-7.16,1.17-10.17-1.67,12.93-.09,25.86-.18,38.79-.27,7.77-.5,15.72,1.46,23.29-1.72,13.54,0,27.08-.02,40.63-.03Z"
              ></path>
              <path
                class="cls-133"
                d="M390.34,309.67c8.22-1.6,15.06,3.89,22.87,4.45-.02,.63-.03,1.26-.03,1.89-3.21-.11-6.42-.22-9.62-.33-5.49-3.28-12.71-1.05-17.82-5.54,1.54-.16,3.08-.31,4.61-.47Z"
              ></path>
              <path
                class="cls-28"
                d="M385.72,310.14c5.12,4.49,12.33,2.26,17.82,5.54-7.95-1.21-17.43,4.06-23.4-5.52,1.86,0,3.72-.02,5.58-.03Z"
              ></path>
              <path
                class="cls-467"
                d="M195.9,298.31c-1.29,0-2.58,0-3.87,0,0-1.29,0-2.58,0-3.87,1.94,0,3.87,0,5.81-.01,0,0,.02,.02,.02,.02-.65,1.29-1.31,2.57-1.96,3.86Z"
              ></path>
              <path
                class="cls-414"
                d="M236.64,277c3.72,2.03,6.13,5.22,8.38,8.74,5.26,8.26,13.99,11.34,22.62,14.47,.03,.62,.05,1.24,.06,1.87-7.69-1.59-15.46-2.21-23.31-1.88-2.62-3.39-6.82-.86-10.67-2.83,6.32-6.15,5.54-13.16,2.92-20.36Z"
              ></path>
              <path
                class="cls-378"
                d="M267.7,302.08c-.01-.62-.04-1.24-.06-1.87,.68-.64,1.37-1.28,2.05-1.92,10.32,2.93,20.64,1.24,30.96,0,9.71,0,19.42,.02,29.14,.03-4.13,3.62-9.11,1.24-13.65,1.94-5.77,.89-11.97-1.98-17.39,1.98-7.57,3.18-15.52,1.22-23.29,1.72-2.12-2.55-5.11-1.52-7.76-1.9Z"
              ></path>
              <path
                class="cls-469"
                d="M195.9,298.31c.65-1.29,1.31-2.57,1.96-3.86,1.51-.27,3.2-.21,4.5-.89,2.24-1.17,2.88-5.9,6.45-3.84,3.61,2.1-.36,5.74,.68,8.59-4.53,3.39-9.06,.97-13.59,0Z"
              ></path>
              <path
                class="cls-138"
                d="M127.89,679.98c.03,16.16,.05,32.33,.08,48.49-3.72-16.04-.93-32.33-1.83-48.47,.59,0,1.17,0,1.76-.02Z"
              ></path>
              <path
                class="cls-138"
                d="M129.86,759.36c-.65,0-1.29,0-1.94-.01,.01-10.29,.02-20.57,.04-30.85,.66-.02,1.33-.03,2-.05,.02,3.86,.03,7.71,.05,11.57-.05,6.45-.09,12.9-.14,19.35Z"
              ></path>
              <path
                class="cls-15"
                d="M128.03,623.82c.62,0,1.24,0,1.86,0,0,8.39,.02,16.78,.03,25.16-.61,0-1.21,.01-1.82,0-.03-8.39-.05-16.79-.08-25.18Z"
              ></path>
              <path
                class="cls-15"
                d="M127.89,679.98c-.59,.02-1.17,.02-1.76,.02,.43-7.22-1.64-14.64,1.69-21.63,.11,.81,.21,1.61,.31,2.41-.08,6.4-.17,12.8-.25,19.2Z"
              ></path>
              <path
                class="cls-138"
                d="M128.14,660.78c-.1-.8-.21-1.61-.31-2.41,.09-3.12,.19-6.25,.28-9.37,.61,0,1.21,0,1.82,0-.44,3.95,1.27,8.23-1.78,11.79Z"
              ></path>
              <path
                class="cls-57"
                d="M436.48,319.73c1.92,.04,3.83,.09,5.75,.13,1.52,1.67,3.59,1.66,5.6,1.87,3.43,4.89,10.52,4.49,13.86,9.52-.64,.61-1.27,1.22-1.91,1.83-1.94-.64-3.88-1.28-5.82-1.92-3.43-.82-5.43-3.55-7.78-5.82-2.61-2.95-7.45-2.04-9.7-5.6Z"
              ></path>
              <path
                class="cls-139"
                d="M413.17,316.02c0-.63,.02-1.26,.03-1.89,4.63-.36,9.25-.62,13.56,1.69,.02,1.24,.03,2.49,.05,3.73-4.89,.15-9.99,1.1-13.64-3.53Z"
              ></path>
              <path
                class="cls-139"
                d="M436.48,319.73c2.25,3.56,7.09,2.65,9.7,5.6-6.96,1.49-12.4-1.87-17.74-5.55,2.08-.1,4.15-.2,6.22-.29,.62-.02,1.22,.06,1.82,.24Z"
              ></path>
              <path
                class="cls-57"
                d="M434.66,319.49c-2.07,.1-4.15,.19-6.22,.29-.56,0-1.1-.08-1.63-.24-.02-1.24-.03-2.49-.05-3.73,3.37-.34,6.17,.53,7.9,3.68Z"
              ></path>
              <path
                class="cls-42"
                d="M459.78,333.08l1.91-1.83c2.67,1.11,4.37,4.06,7.64,4,7.87,4.93,17.01,8.26,21.69,17.2-4.5-2.12-8.12-6.35-13.77-5.76-4.28-6.52-11.95-8.69-17.48-13.61Z"
              ></path>
              <path
                class="cls-21"
                d="M240.61,767.04c3.5,8.23,1.12,16.86,1.78,25.29-4.06-8.19-.9-16.88-1.78-25.29Z"
              ></path>
              <path
                class="cls-47"
                d="M244.19,761.55c-2.43-2.75-1.59-6.11-1.61-9.25-.12-22.22-1.26-44.5,.14-66.63,1.1-17.36-.44-34.52-.37-51.77,.25-62.33,.09-124.66,.19-186.99,0-3.69-1.33-7.8,1.88-11.02,.02,9.02,.03,18.04,.05,27.06,.01,3.26,.03,6.53,.05,9.79,0,11.59-.01,23.18-.02,34.77,0,.68-.02,1.35-.02,2.03,.03,24.05,.05,48.09,.12,72.14,0,2.5-.55,5.2,1.68,7.21l.06,.13c-.01,5.14-.02,10.28-.03,15.43-.09,.6-.11,1.2-.06,1.8-2.89,16.24-2.81,32.48,0,48.73,.01,1.25,.03,2.49,.04,3.74l.02,13.55c-.05,1.2-.1,2.4-.16,3.6-2.37,2.34-1.78,5.37-1.77,8.19,.07,25.68,.2,51.37,.32,77.05l-.52,.44Z"
              ></path>
              <path
                class="cls-147"
                d="M244.48,462.95c-.02-9.02-.03-18.04-.05-27.06,.66-5.05,1.3-10.11,2-15.16,1.91-13.88,9.54-21.04,23.7-21.33,16.65-.34,33.3-.17,49.95-.22,.03,.58,.07,1.15,.12,1.72-11.6,.04-23.25-.52-34.8,.27-11,.75-23.36-1.8-31.28,9.49,0,0-.03,.04-.03,.04-3.1,2.49-3.94,5.89-3.89,9.65-2.63,8.86-3.87,17.92-3.8,27.16-.95,5.11,1.83,10.68-1.92,15.44Z"
              ></path>
              <path
                class="cls-166"
                d="M430.6,463.09c.67,1.89,1.35,3.78,2.02,5.67-1.19,1.77-3.77-.12-4.26,.84-4.49,9.04-6.82,1.17-9.76-1.16-4.85-3.85-2.12-11.44-7.38-15.13-3.47-.04-5.72-.66-8.51-4.05-4.89-5.95-5.46-14.99-11.93-18.84-8.13-4.84-12.37-11.97-16.43-19.71l.08-.11c6.62,2.68,12.08,6.96,16.68,12.32,4.01,4.68,8.69,8.42,14.3,11,7.75,10.24,15.69,20.33,25.16,29.09l.02,.06Z"
              ></path>
              <path
                class="cls-483"
                d="M254.12,410.67c7.92-11.29,20.28-8.73,31.28-9.49,11.55-.79,23.19-.24,34.8-.27,15.27,.83,30.88-2.36,45.68,4.02,3.23,1.39,6.79,2.16,8.56,5.69,0,0-.08,.11-.08,.11-3.86-.03-7.72-.05-11.58-.08-.45-5.1-3.94-5.84-8.13-5.78-6.35,.08-12.7,.02-19.04,.02-9.06,0-18.12,0-27.17-.01-5.82,0-11.64,0-17.47,0-12.61-.17-24.71,2.91-36.84,5.79Z"
              ></path>
              <path
                class="cls-59"
                d="M430.58,463.03c-9.47-8.76-17.41-18.85-25.16-29.09,.06-.74,.13-1.48,.19-2.22,3.77,3.39,7.54,6.78,11.3,10.17,2.7,8.24,12.78,11.72,13.67,21.13Z"
              ></path>
              <path
                class="cls-23"
                d="M397.69,422.26c2.82,.03,5.66,.06,5.66,4.03-2.75-.14-4.67-1.43-5.66-4.03Z"
              ></path>
              <path
                class="cls-49"
                d="M461.49,521.2c3.15,20.8,10.36,40.71,12.47,61.8,2.57,25.73,1.12,51.26-1.51,76.79-.56,5.44-.85,10.85-1.14,16.28,0,0,.02,0,.02,0-2.17,1.44-1.75,3.74-1.94,5.83-.59,.02-1.18,.09-1.77,.19-.05-2-.1-4-.16-6,3.76-28.38,4.58-56.9,3.85-85.48-.24-9.3-1.82-18.35-5.76-26.87h0c-.67-4.53,1.51-9.47-1.92-13.62,.48-9.52-3.73-18.01-5.91-26.95l.1-7.91c1.22,1.98,2.44,3.95,3.66,5.93Z"
              ></path>
              <path
                class="cls-106"
                d="M457.83,515.27c-.03,2.64-.07,5.28-.1,7.91-3.8-11.02-7.61-22.04-11.41-33.06,.71-.04,1.41-.07,2.12-.11,5.32,7.61,9.93,15.48,9.38,25.26Z"
              ></path>
              <path
                class="cls-104"
                d="M446.33,490.12c3.8,11.02,7.61,22.04,11.41,33.06,2.17,8.94,6.39,17.43,5.9,26.95,.72,4.53-1.81,9.51,1.92,13.62,0,0,0,0,0,0,0,4.11-.45,8.29,.09,12.33,1.29,9.64,1.3,19.1-2.02,28.37,0-4.52-.01-9.05-.02-13.57,.3-19.76-3.7-38.94-7.75-58.12,0-2.79-1.31-4.72-3.86-5.83,.73-7.26-2.24-13.4-5.84-19.36-5.56-4.69-12.04-8.31-8.4-18.08,1.56-4.18-2.7-6.01-6.74-2.74-5.52,4.46-8.77,2.84-11.66-3.32-4.51-9.61-8.31-19.28-8.12-30.1,5.26,3.69,2.53,11.28,7.38,15.13,2.93,2.33,5.26,10.2,9.76,1.16,.48-.97,3.06,.93,4.26-.84,3.65,7.71,7.96,15,13.7,21.36Z"
              ></path>
              <path
                class="cls-113"
                d="M463.63,604.44c3.32-9.27,3.31-18.73,2.02-28.37-.54-4.04-.09-8.21-.09-12.33,3.94,8.52,5.52,17.57,5.76,26.87,.73,28.58-.09,57.1-3.85,85.48-2.75,8.71-6.37,17.25-8.05,26.16-2.48,13.14-8.2,25.22-11.1,38.17-.11,1.16-.22,2.32-.34,3.48-3.94,1.08-2.88,5.84-5.71,7.75-.28-5.55-.33-11.04,3.88-15.47,.13-7.78,1.27-14.63,5.02-22.29,5.41-11.06,9.4-23.53,8.79-36.87-.62-13.61,3.5-27.2,1.09-40.97-.12-.68,1.67-1.69,2.57-2.55,3.16-8.39,3.15-16.78,0-25.18v-3.87Z"
              ></path>
              <path
                class="cls-91"
                d="M448.31,740.42c2.9-12.94,8.62-25.03,11.1-38.17,1.68-8.91,5.3-17.45,8.05-26.16,.05,2,.1,4,.15,5.99,.13,4.47-.81,8.62-2.57,12.82-2.9,6.94-5.87,13.99-5.48,21.81-3.12,3.6-3.38,8.09-3.77,12.49-.46,5.15-2.79,8.95-7.49,11.21Z"
              ></path>
              <path
                class="cls-39"
                d="M459.58,716.72c-.4-7.82,2.58-14.87,5.48-21.81,1.76-4.2,2.7-8.35,2.57-12.82,.59-.1,1.17-.16,1.77-.18,0,3.89-.01,7.78-.02,11.67-1.95,5.14-3.9,10.27-5.84,15.41-2.94,1.75-.51,6.24-3.95,7.74Z"
              ></path>
              <path
                class="cls-68"
                d="M469.38,693.57c0-3.89,.01-7.78,.02-11.67,.2-2.09-.23-4.39,1.94-5.83-.75,5.82,2.01,12.04-1.96,17.5Z"
              ></path>
              <path
                class="cls-26"
                d="M362.75,846.68c-4.59-.08-9.18-.15-13.77-.23,2.07-1.98,4.71-1.74,7.19-1.65,8.03,.29,13.87-3.32,18.2-9.81h.01c4.8-.1,7.28-4.86,11.67-5.79,.68,.06,1.35,.13,2.03,.19-8.48,5.7-12.99,17.22-25.33,17.28Z"
              ></path>
              <path
                class="cls-62"
                d="M430.74,772.96c1.51,.89,1.79,2.37,1.89,3.93-3.62,11.32-16.29,14.89-21.39,24.95,0-1.86,0-3.72,.01-5.58,4.31-9.59,15.99-13.03,19.49-23.3Z"
              ></path>
              <path
                class="cls-135"
                d="M411.25,796.26c0,1.86,0,3.72-.01,5.58-.63,.72-1.27,1.45-1.9,2.18-2.52,.04-3.59,1.6-4.03,3.82-.62,0-1.24-.01-1.86-.02-2.98-7.61,5.11-7.77,7.8-11.56Z"
              ></path>
              <path
                class="cls-158"
                d="M403.45,807.82c.62,.01,1.24,.02,1.86,.02-3.4,7.36-10.96,11.05-15.44,17.45-6.82,.6-11.83,4.07-15.48,9.7,0,0-.01,0-.01,0-1.91,.02-3.83,.05-5.74,.07,1.33-3.58,4.52-5.48,7.42-7.31,6.46-4.06,13.19-7.67,17.72-14.1,4.15-.41,6.82-3.25,9.66-5.82v-.03Z"
              ></path>
              <path
                class="cls-143"
                d="M374.39,835c3.66-5.63,8.67-9.1,15.48-9.7-1.27,1.31-2.54,2.61-3.81,3.92-4.39,.93-6.87,5.69-11.67,5.78Z"
              ></path>
              <path
                class="cls-98"
                d="M411.25,796.26c-2.69,3.79-10.78,3.95-7.8,11.56,0,0,0,.02,0,.02-1.92,.02-3.84,.03-5.76,.04-3.93-.27-7.26,1.35-10.9,2.62-7.71,2.68-14.99,8.43-24.03,5.12,0-.64,0-1.29,0-1.93,11.57-1.66,22.56-4.42,29.09-15.51,7.65-2.9,17.43-1.89,21.35-11.62,.81-.97,1.55-2.02,2.45-2.91,8.06-7.92,17.63-14.92,16.93-28.1,3.69,2.26,.24,7.31,3.76,9.63-.86,3.31-3.43,5.4-5.6,7.77-3.5,10.27-15.18,13.71-19.49,23.3Z"
              ></path>
              <path
                class="cls-450"
                d="M436.33,765.2c-3.52-2.33-.07-7.37-3.76-9.63,2.57-7.83,2.14-17.76,13.58-19.39-4.21,4.43-4.16,9.92-3.88,15.47-1.98,4.52-3.96,9.03-5.94,13.55Z"
              ></path>
              <path
                class="cls-58"
                d="M256,840.86c-.6-1.97-1.2-3.94-1.8-5.91,.61-.6,1.22-1.2,1.83-1.79,.67,.59,1.34,1.18,2.01,1.78,2.11,7.72,8.48,5.22,13.62,5.65,4.09,.69,6.88,4.32,11.6,4.15,12.23-.43,24.49-.16,36.74-.17,1.96,.07,3.92,.14,5.88,.22,0,.53,0,1.07,0,1.6-1.29,.17-2.57,.34-3.86,.51-10.99,0-21.99,0-32.98,0-1.99,.02-3.99,.03-5.98,.05-3.17-.18-6.35-.35-9.53-.53-5.24-3.75-12.23-2.02-17.54-5.56Z"
              ></path>
              <path
                class="cls-143"
                d="M325.88,846.38c0-.53,0-1.07,0-1.6,4.2-.08,8.62,.68,12.55-.39,10.15-2.75,22.15,.21,30.18-9.34l.02,.02c1.91-.02,3.83-.05,5.74-.07-4.33,6.48-10.17,10.09-18.2,9.81-2.49-.09-5.13-.33-7.19,1.65-7.7-.02-15.4-.05-23.1-.07Z"
              ></path>
              <path
                class="cls-20"
                d="M289.04,846.89c10.99,0,21.99,0,32.98,0-1.74,4.62-5.11,6.47-9.86,5.42-7.73-1.7-15.42-3.6-23.12-5.42Z"
              ></path>
              <path
                class="cls-21"
                d="M273.54,846.42c3.18,.18,6.35,.35,9.53,.53-3.31,2.33-6.52,2.76-9.53-.53Z"
              ></path>
              <path
                class="cls-492"
                d="M258.04,834.93c-.67-.59-1.34-1.18-2.01-1.78-1.84-8.42-5.85-16.33-5.89-25.16,.04-5.22,.08-10.44,.11-15.66,2.52,1.14,3.84,3.07,3.87,5.86,.1,13.88,11.07,23.77,13.55,36.77-1.3,.02-2.6,.05-3.9,.07-1.91-.04-3.83-.07-5.74-.11Z"
              ></path>
              <path
                class="cls-147"
                d="M244.71,761.1c-.11-25.68-.25-51.37-.32-77.05,0-2.82-.59-5.85,1.77-8.19,.1,28.47,.19,56.94,.29,85.41l-.22,.21c-.52-.07-1.03-.19-1.52-.39Z"
              ></path>
              <path
                class="cls-147"
                d="M250.26,792.33c-.04,5.22-.07,10.44-.11,15.66-3.89-8.14-.96-16.83-2.02-25.19,0,0,.24-.16,.24-.16,3.05,2.76,1.42,6.43,1.88,9.69Z"
              ></path>
              <path
                class="cls-147"
                d="M248.13,782.8c-3.62-6.84-1.09-14.22-1.9-21.31,0,0,.22-.21,.22-.21,.6,.07,1.21,.11,1.81,.12,.04,7.08,.07,14.16,.11,21.24l-.24,.16Z"
              ></path>
              <path
                class="cls-241"
                d="M450.04,296.38c9.44-6.03,10.23,3.09,13.58,7.73,0,0,0,0,0,0,.64,1.94,1.29,3.88,1.93,5.81-3.34,1.83-2.69,7.62-7.73,7.76-1.88-.71-3.17-2.01-3.92-3.86,2.68-2.14,1.27-4.05-.79-5.07-6.04-3.01-5.88-7.3-3.09-12.37Z"
              ></path>
              <path
                class="cls-481"
                d="M453.91,313.82c.74,1.86,2.04,3.15,3.92,3.86,10.94,6.46,21.88,12.92,32.83,19.38-2.55,.65-5.09,1.3-7.64,1.95-3.23-1.89-6.46-3.78-9.69-5.67-5.81-3.29-11.61-6.58-17.42-9.87-2.61-2.57-5.22-5.14-7.83-7.72,.01-1.29,.02-2.58,.03-3.87,1.94,.65,3.87,1.29,5.81,1.94Z"
              ></path>
              <path
                class="cls-434"
                d="M514.04,356.46c-7.2-5.04-15.13-9.1-21.33-15.51,2.12-.32,5.08,1.05,6.14-1.21,.96-2.05-.94-4.23-2.57-5.81-2.72-2.63-4.92-5.85-9.05-6.77-4.91-1.1-7.61-4.41-8.1-9.45,.65,0,1.29-.01,1.94-.02,14.43,9.94,29.52,19.15,38.84,34.78-2.81,.08-5.71,.03-5.87,3.99Z"
              ></path>
              <path
                class="cls-368"
                d="M479.13,317.71c.49,5.04,3.19,8.35,8.1,9.45,4.13,.92,6.34,4.14,9.05,6.77,1.63,1.57,3.53,3.76,2.57,5.81-1.06,2.26-4.02,.89-6.14,1.21-1.58-.82-1.89-2.31-2.05-3.88-10.94-6.46-21.89-12.92-32.83-19.38,5.04-.13,4.39-5.93,7.73-7.76,4.49-.18,4.09,7.81,9.69,5.8,1.29,.66,2.59,1.32,3.88,1.98Z"
              ></path>
              <path
                class="cls-371"
                d="M475.25,315.73c-5.6,2.02-5.19-5.97-9.69-5.8-.64-1.94-1.29-3.88-1.93-5.81,7.77-.02,8.45,7.04,11.62,11.61Z"
              ></path>
              <path
                class="cls-87"
                d="M389.9,304.1c-15.94-4.08-31.84-8.63-48.49-3.92,0-.63-.02-1.27-.04-1.9,1.64-1.47,4.47-2.76,4.72-4.43,1.49-10.1,6.6-6.25,11.99-3.74,8.87,4.13,17.78,8.34,27.93,8.2,5.84,1.91,11.68,3.83,17.51,5.74-1.96,.05-3.92,.1-5.88,.15-2.58-.03-5.16-.06-7.75-.1Z"
              ></path>
              <path
                class="cls-452"
                d="M397.64,304.2c1.96-.05,3.92-.1,5.88-.15,17.22-5.11,30.33,5.43,44.55,11.71,2.61,2.57,5.22,5.14,7.83,7.72-2.69-.58-5.39-1.17-8.08-1.75-2.01-.2-4.08-.2-5.6-1.87-7.52-7.21-17.26-8.46-26.89-9.93-3.35-.51-7.11,1.18-9.96-1.92-1.63-3.18-6.02-.8-7.73-3.82Z"
              ></path>
              <path
                class="cls-497"
                d="M386.01,298.32c-10.15,.13-19.07-4.07-27.93-8.2-5.38-2.51-10.49-6.36-11.99,3.74-.25,1.67-3.08,2.96-4.72,4.43-1.29,0-2.58-.02-3.87-.03-1.08-11.4,2.22-15.15,13.6-15.47,12.54,3.15,23.27,10.36,34.91,15.52Z"
              ></path>
              <path
                class="cls-398"
                d="M329.78,298.33c-9.71,0-19.42-.02-29.14-.03,2.58-3.06,6.48-3.89,9.75-5.79,3.98-.15,8.09,.84,10.93-3.66,2.24-3.57,5.56-1.64,8.43-.23,.65,3.22,1.31,6.44,1.96,9.66-.64,.03-1.29,.05-1.93,.04Z"
              ></path>
              <path
                class="cls-443"
                d="M331.72,298.28c-.65-3.22-1.31-6.44-1.96-9.66,5.33-8.47,12.6-9.83,21.34-5.83-11.38,.32-14.68,4.07-13.6,15.47-1.93,0-3.85,.01-5.78,.02Z"
              ></path>
              <path
                class="cls-427"
                d="M531.62,381.68c-7.94-5.82-15.13-12.33-19.64-21.31,5.75,2.14,13.78,1.04,13.26,11.35-.17,3.35,7.96,.37,8.24,6.02-.05,1.58-.38,3.03-1.86,3.94Z"
              ></path>
              <path
                class="cls-403"
                d="M525.69,352.55c.14-2.54-.13-5.4,3.58-5.6,2.16-.12,3.93,.82,3.98,3.14,.08,3.26,1.66,7.39-3.69,8.32-2.53-1.14-3.87-3.05-3.86-5.86Z"
              ></path>
              <path
                class="cls-302"
                d="M514.04,356.46c.16-3.96,3.06-3.91,5.87-3.99,2.65,2.13,2.34,4.59,.01,6.42-2.95,2.32-4.52-.12-5.88-2.43Z"
              ></path>
              <path
                class="cls-464"
                d="M531.62,381.68c1.48-.91,1.81-2.36,1.86-3.94,1.29,0,2.58,0,3.87,0,4.19,5.64-.01,5.65-3.93,5.86-.6-.64-1.2-1.28-1.79-1.93Z"
              ></path>
              <path
                class="cls-491"
                d="M447.83,321.73c2.69,.58,5.39,1.17,8.08,1.75,5.81,3.29,11.61,6.58,17.42,9.87-1.33,.63-2.67,1.26-4,1.9-3.28,.06-4.98-2.89-7.65-4-3.34-5.03-10.42-4.63-13.86-9.52Z"
              ></path>
              <path
                class="cls-210"
                d="M100.85,548.25c-.12,13.04,1.39,26.24-3.88,38.76-2.84,.91-5.01,5.6-8.29,2.82-3.26-2.76,.74-5.42,1.47-8.23,2.16-8.27,.1-17.18,3.23-25.39,1.37-3.61,1.3-8.76,7.47-7.96Z"
              ></path>
              <path
                class="cls-393"
                d="M331.72,298.28c1.93,0,3.85-.01,5.78-.02,1.29,0,2.58,.02,3.87,.03,.01,.63,.03,1.27,.03,1.9-.67,.68-1.35,1.36-2.03,2.04-13.54,0-27.09,.02-40.63,.03,5.42-3.97,11.62-1.09,17.39-1.98,4.54-.7,9.52,1.68,13.65-1.94,.65,0,1.29-.01,1.93-.04Z"
              ></path>
              <path
                class="cls-451"
                d="M397.64,304.2c1.71,3.02,6.1,.64,7.73,3.82-5.42-.27-11.28,1.18-15.48-3.91,2.58,.03,5.16,.06,7.75,.1Z"
              ></path>
              <path
                class="cls-156"
                d="M248.26,761.4c-.61-.01-1.21-.05-1.81-.12-.09-28.47-.19-56.94-.29-85.42,.05-1.2,.1-2.4,.16-3.61,3.76-4.07,1.2-9.04,1.94-13.54,0-12.93,0-25.86,0-38.79-.67-4.56-1.34-9.13-2.01-13.69-.05-.6-.03-1.2,.06-1.8,3.94-4.75,1.15-10.35,1.95-15.49,0-43.79,.04-87.59-.04-131.38,0-3.39,1.27-7.16-1.83-10.05-.07-9.24,1.16-18.29,3.8-27.16,3.12-2.48,4.03-5.86,3.89-9.65,0,0,.03-.04,.03-.04,12.13-2.88,24.23-5.96,36.84-5.79-3.5,4.32-11.09-.88-13.57,5.81-11.81,.27-21.96,10.93-25.35,24.63-2.17,8.78,.89,17.23-.15,25.6-2.28,18.28-.51,36.4-.27,54.63,.54,40.49,2.68,81.06-1.12,121.55-.55,5.81-2.14,12.16,1.65,17.75,1.03,13.87-4,27.14-3.89,40.95,.17,21.2,.05,42.4,.05,63.6-.02,.67-.03,1.33-.05,2Z"
              ></path>
              <path
                class="cls-483"
                d="M246.4,447.52c3.09,2.89,1.82,6.66,1.83,10.05,.08,43.79,.04,87.59,.04,131.38-.64,0-1.28,.02-1.92,.07,0,0-.06-.13-.06-.13,.02-23.75,.06-47.5,.02-71.25,0-2.79,.82-5.86-1.82-8.1,0-.68,.02-1.35,.02-2.03,3.04-11.59,3-23.18,.02-34.77-.02-3.26-.03-6.53-.05-9.79,3.75-4.76,.97-10.33,1.92-15.44Z"
              ></path>
              <path
                class="cls-147"
                d="M244.49,509.54c2.64,2.24,1.81,5.31,1.82,8.1,.04,23.75,0,47.5-.02,71.25-2.23-2.01-1.68-4.71-1.68-7.21-.07-24.05-.08-48.09-.12-72.14Z"
              ></path>
              <path
                class="cls-147"
                d="M246.25,606.24c.67,4.56,1.34,9.13,2.01,13.69-4.36,11.47-.6,23.4-2.02,35.04-2.81-16.24-2.89-32.49,0-48.73Z"
              ></path>
              <path
                class="cls-483"
                d="M246.25,654.97c1.42-11.64-2.35-23.57,2.02-35.04,0,12.93,0,25.86,0,38.79-.66,0-1.31,0-1.97-.01-.01-1.25-.03-2.49-.04-3.74Z"
              ></path>
              <path
                class="cls-147"
                d="M244.53,472.74c2.98,11.59,3.03,23.18-.02,34.77,0-11.59,.01-23.18,.02-34.77Z"
              ></path>
              <path
                class="cls-147"
                d="M246.35,589.02c.64-.05,1.28-.07,1.92-.07-.8,5.15,1.99,10.74-1.95,15.49,.01-5.14,.02-10.28,.03-15.42Z"
              ></path>
              <path
                class="cls-147"
                d="M246.29,658.71c.66,0,1.31,0,1.97,.01-.74,4.5,1.81,9.47-1.94,13.54,0-4.52-.02-9.03-.02-13.55Z"
              ></path>
              <path
                class="cls-483"
                d="M254.09,410.71c.14,3.79-.76,7.17-3.89,9.65-.06-3.76,.79-7.16,3.89-9.65Z"
              ></path>
              <path
                class="cls-88"
                d="M411.23,453.32c-.18,10.82,3.61,20.48,8.12,30.1,2.89,6.16,6.15,7.78,11.66,3.32,4.05-3.27,8.3-1.44,6.74,2.74-3.64,9.77,2.84,13.39,8.4,18.08-3.96,2.66-5.89,.29-8.63-2.55-3.34-3.46-6.61-5.22-9.58,2-2.71,6.57-5.25,12.76-5.07,19.89-.64,.66-1.28,1.31-1.91,1.97,0,1.29-.02,2.58-.03,3.87-6.63,2.87-8.31,7.86-7.99,14.93,.3,6.58-2.15,13.14-1.87,19.93,.14,3.27-.96,6.69-5.65,3.89,0-12.92,0-25.83,0-38.75l.04-5.77c2.07-.37,3.69-1.31,3.71-3.66,.12-19.32,7.38-39.39-5.69-57.36-4.81-6.61-6.7-15.15-13.55-20.4,.82-5.7-2.07-9.81-5.84-13.54-8.48-5.75-15.7-12.74-21.34-21.33l.04-.05c3.86,.03,7.72,.05,11.58,.08,4.06,7.73,8.3,14.87,16.43,19.71,6.47,3.85,7.04,12.88,11.93,18.84,2.78,3.39,5.04,4.01,8.51,4.05Z"
              ></path>
              <path
                class="cls-486"
                d="M308.42,404.87c9.06,0,18.12,0,27.17,.01,6.59,3.84,15.06,.77,21.34,5.79-2.6,.01-5.21,.02-7.81,.04-16.79,0-33.59,0-50.38-.01-3.25,0-6.49-.01-9.74-.02,5.83-4.08,13.59-1.7,19.42-5.81Z"
              ></path>
              <path
                class="cls-173"
                d="M308.42,404.87c-5.82,4.1-13.59,1.72-19.42,5.81-3.87,0-7.75,0-11.62,.01,2.48-6.69,10.07-1.49,13.57-5.81,5.82,0,11.64,0,17.47,0Z"
              ></path>
              <path
                class="cls-89"
                d="M356.93,410.67c-6.27-5.02-14.74-1.95-21.34-5.79,6.35,0,12.7,.06,19.04-.02,4.19-.05,7.68,.68,8.13,5.78,0,0-.04,.05-.04,.05-1.93,0-3.87-.01-5.8-.02Z"
              ></path>
              <path
                class="cls-113"
                d="M465.56,563.75c-3.73-4.1-1.21-9.09-1.92-13.62,3.43,4.15,1.26,9.08,1.92,13.62Z"
              ></path>
              <path
                class="cls-118"
                d="M455.86,532.75c4.05,19.18,8.05,38.36,7.75,58.12-3.54,.41-4.32,2.52-3.05,5.45,1.62,3.73,1.1,7.6,1.09,11.43-.08,20.58-2.25,40.99-8.36,60.63-1.93,6.19,2.83,16.43-8.81,18.12-.09,.01-.19,.61-.14,.91,1.69,9.48-4.42,18.46-1.92,27.93,2.84,10.76-1.38,18.54-9.82,24.73,1.37-10.11,5.54-19.59,5.92-29.99,.53-14.5-.52-29.55,10.15-41.68,.78-.88,1.1-2.32,1.27-3.55,2.5-17.68,5.55-35.25,6.1-53.21,.64-21.21-3.15-42.21-2.13-63.39h.02c3.87-4.76,1.07-10.36,1.93-15.5Z"
              ></path>
              <path
                class="cls-78"
                d="M432.6,740.07c8.44-6.2,12.65-13.98,9.82-24.73-2.5-9.47,3.62-18.45,1.92-27.93-.05-.3,.05-.9,.14-.91,11.64-1.69,6.88-11.93,8.81-18.12,6.12-19.64,8.29-40.05,8.36-60.63,.01-3.82,.54-7.69-1.09-11.43-1.27-2.92-.49-5.04,3.05-5.45,0,4.52,.01,9.05,.02,13.57,0,1.29,0,2.58,0,3.87,0,8.39,0,16.79,0,25.18-.9,.86-2.69,1.87-2.57,2.55,2.41,13.77-1.71,27.36-1.09,40.97,.61,13.34-3.38,25.82-8.79,36.87-3.75,7.67-4.89,14.52-5.02,22.29-11.45,1.63-11.01,11.56-13.58,19.39,.69,13.18-8.87,20.18-16.93,28.1-.9,.88-1.64,1.93-2.45,2.91,0,0-.01-.01-.01-.01-.71-4.89,3.34-7.15,5.5-10.56,3.94-6.21,11.82-11.11,8.09-20.41,.72-5.63,6.85-9.23,5.83-15.51Z"
              ></path>
              <path
                class="cls-149"
                d="M422.87,526.91c-.18-7.13,2.36-13.32,5.07-19.89,2.98-7.23,6.24-5.46,9.58-2,2.74,2.84,4.67,5.2,8.63,2.55,3.6,5.96,6.57,12.1,5.84,19.36,0,0-.06,.04-.06,.04-4.4-6.09-13.32-7.31-15.9-15.96-.92-3.08-5.45-1.08-7.03,2.5-1.99,4.49-4.08,8.94-6.13,13.4Z"
              ></path>
              <path
                class="cls-149"
                d="M455.86,532.75c-.86,5.14,1.94,10.74-1.93,15.51-.66-7.1-1.33-14.2-1.99-21.29,0,0,.06-.04,.06-.04,2.56,1.1,3.85,3.04,3.86,5.83Z"
              ></path>
              <path
                class="cls-104"
                d="M463.62,633.49c0-8.39,0-16.79,0-25.18,3.14,8.39,3.15,16.79,0,25.18Z"
              ></path>
              <path
                class="cls-94"
                d="M362.74,815.63c9.04,3.31,16.32-2.44,24.03-5.12,3.64-1.26,6.97-2.89,10.9-2.62-1.3,1.93-2.6,3.85-3.9,5.78-4.53,6.43-11.26,10.05-17.72,14.1-2.91,1.83-6.09,3.72-7.42,7.31,0,0-.02-.02-.02-.02-6.02-.17-11.69-.04-17.44,3.16-4.45,2.48-10.26,3.17-15.57,.68-3.33,.73-4.52-.68-3.9-3.9,1.44-7.74,8.14-6.62,13.35-7.68,7.56-1.53,13.1-5.83,17.69-11.69Z"
              ></path>
              <path
                class="cls-135"
                d="M393.78,813.67c1.3-1.93,2.6-3.85,3.9-5.78,1.92-.01,3.84-.03,5.76-.04-2.84,2.57-5.52,5.41-9.66,5.82Z"
              ></path>
              <path
                class="cls-115"
                d="M362.74,815.63c-4.59,5.87-10.13,10.16-17.69,11.69-5.21,1.06-11.91-.06-13.35,7.68-14.81,1.14-30.17-3.12-44.37,3.95-6.68,3.33-10.37-3.32-15.8-3.92-1.29-.02-2.57-.05-3.86-.07-2.48-13.01-13.45-22.89-13.55-36.77,2.35,.57,5.45,.09,4.26,4.47-.67,2.49,13.56,16.93,16.06,17.31,3.23,.49,2.49-1.98,3.22-3.54,1.73-3.71,5.34-3.74,6.69-.9,2.08,4.36,5.71,3.23,8.79,4.44,9.17,3.6,19.12,.34,28.1,3.18,7.67,2.42,14.17,1.26,21.47-1.15,6.94-2.3,12.56-7.52,20.02-8.31,0,.64,0,1.29,0,1.93Z"
              ></path>
              <path
                class="cls-108"
                d="M362.75,813.69c-7.46,.79-13.08,6.01-20.02,8.31-7.3,2.42-13.8,3.58-21.47,1.15-8.98-2.84-18.93,.41-28.1-3.18-3.08-1.21-6.71-.08-8.79-4.44-1.36-2.84-4.96-2.81-6.69,.9-.73,1.56,.01,4.03-3.22,3.54-2.51-.38-16.74-14.82-16.06-17.31,1.18-4.38-1.91-3.9-4.26-4.47-.03-2.78-1.36-4.71-3.87-5.86-.46-3.26,1.16-6.93-1.88-9.7-.04-7.08-.07-14.16-.11-21.24,.02-.67,.03-1.33,.05-2,.63,.03,1.26,.06,1.9,.07-.99,8.11,1.25,15.95,2.16,23.88,1.13,9.82,10.9,14.52,14.6,23.09,1.36,3.15,6.58,1.09,9.97,2.13,8.16,2.49,16.79,3.67,24.66,6.82,15.67,6.28,30.73,7.09,45.64-1.69,3.71-.91,7.48-1.63,11.11-2.77,14.31-4.49,27.7-10.79,39.29-20.49,.65,0,1.3,0,1.95,.01-2.59,2.58-5.18,5.16-7.76,7.74-6.53,11.09-17.52,13.85-29.09,15.51Z"
              ></path>
              <path
                class="cls-78"
                d="M391.84,798.19c2.59-2.58,5.18-5.16,7.76-7.74,4.52-1.3,9.05-2.59,13.57-3.89,0,0,.01,.01,.01,.01-3.92,9.73-13.7,8.72-21.35,11.62Z"
              ></path>
              <path
                class="cls-127"
                d="M271.54,835.03c5.42,.6,9.12,7.24,15.8,3.92,14.2-7.07,29.55-2.8,44.37-3.95-.62,3.22,.56,4.63,3.9,3.9-2.52,2.92-5.94,1.67-9.02,1.88-2.87,.2-6-.3-6.58,3.78-12.25,0-24.51-.26-36.74,.17-4.71,.17-7.51-3.47-11.6-4.15-.05-.56-.09-1.12-.13-1.68,0-1.29,0-2.58,.01-3.87Z"
              ></path>
              <path
                class="cls-72"
                d="M320,844.57c.58-4.08,3.71-3.58,6.58-3.78,3.07-.21,6.5,1.04,9.02-1.88,5.31,2.49,11.11,1.79,15.57-.68,5.75-3.2,11.42-3.33,17.44-3.16-8.03,9.54-20.02,6.59-30.18,9.34-3.93,1.06-8.35,.31-12.55,.39-1.96-.07-3.92-.14-5.88-.22Z"
              ></path>
              <path
                class="cls-490"
                d="M271.53,838.91c.04,.56,.09,1.12,.13,1.68-5.14-.44-11.51,2.06-13.62-5.66,1.91,.04,3.83,.07,5.74,.11,1.99,2.48,4.71,3.5,7.75,3.87Z"
              ></path>
              <path
                class="cls-114"
                d="M271.53,838.91c-3.04-.37-5.76-1.39-7.75-3.87,1.3-.02,2.6-.05,3.9-.07,1.29,.02,2.57,.05,3.86,.07,0,1.29,0,2.58-.01,3.87Z"
              ></path>
              <path
                class="cls-174"
                d="M277.38,410.69c3.87,0,7.75,0,11.62-.01,3.25,0,6.49,.01,9.74,.02-11.77,6.4-26.46,5.87-36.86,15.5-5.5,4.2-7.74,9.93-7.76,16.67-.03,9.3,0,18.6,0,27.9,0,5.16-.01,10.32-.02,15.49-3.01,6.46-3.02,12.91,0,19.37,0,3.23,.01,6.45,.02,9.68,0,13.58,0,27.15,0,40.73,0,29.7-.02,59.4-.03,89.1-3.23,2.73-1.44,6.46-1.95,9.73-3.79-5.6-2.2-11.95-1.65-17.75,3.8-40.49,1.66-81.06,1.12-121.55-.24-18.24-2.01-36.35,.27-54.63,1.04-8.38-2.02-16.83,.15-25.6,3.39-13.7,13.54-24.36,25.35-24.63Z"
              ></path>
              <path
                class="cls-152"
                d="M252.15,654.85c.51-3.27-1.28-7,1.95-9.73,0,10.33,.01,20.67,.02,31h0c-2.11,1.6-1.95,3.91-1.94,6.17,.18,25.73-3.29,51.38-1.93,77.14l-.04,.05c-.63-.02-1.26-.04-1.9-.07,0-21.2,.12-42.4-.05-63.6-.11-13.8,4.92-27.08,3.89-40.95Z"
              ></path>
              <path
                class="cls-83"
                d="M405.45,526.98c-.01,1.92-.02,3.85-.04,5.77-.54,.77-1.63,1.61-1.55,2.3,2.68,21.56-7.64,42.7-1.02,64.78,2.37,7.91,2.99,13.18,12.27,12.35,2.48,7.1,.62,14.2,.01,21.29-.13,.62-.21,1.27-.43,1.86-.08,.21-.69,.47-.74,.41-7.46-8.05-11.94-17.78-14.21-28.27-4.27-19.72-2.79-39.7,.44-59.29,4.08-24.82,5.62-49.3-1.68-73.7-1.16-3.88,.04-8.47-3.82-11.59-4.84-3.91-6.34-9.44-6.75-15.38,4.47,9.87,14.87,16.85,15.02,28.69,.11,8.71,8.69,14.75,6.07,24.46-2.29,8.47-2.46,17.52-3.56,26.31Z"
              ></path>
              <path
                class="cls-112"
                d="M405.45,526.98c1.11-8.79,1.27-17.84,3.56-26.31,2.63-9.71-5.96-15.74-6.07-24.46-.15-11.83-10.54-18.82-15.02-28.69-.99-.8-2.4-1.39-2.91-2.42-6.81-13.74-17.17-23.59-31.37-29.56-1.86-.78-3.04-3.18-4.53-4.83,2.6-.01,5.21-.02,7.81-.04,1.93,0,3.87,.01,5.8,.02,5.64,8.58,12.86,15.58,21.34,21.33,.02,5.34,2.28,9.72,5.84,13.54,6.85,5.25,8.74,13.79,13.55,20.4,13.08,17.98,5.82,38.04,5.69,57.36-.01,2.34-1.63,3.28-3.71,3.66Z"
              ></path>
              <path
                class="cls-160"
                d="M405.42,571.5c4.69,2.8,5.79-.62,5.65-3.89-.28-6.8,2.17-13.35,1.87-19.93-.32-7.06,1.36-12.05,7.99-14.93,.4,3.6-.29,7.11-1.8,10.28-7.23,15.32-6,31.64-5.94,47.83,0,1.94,0,3.88,0,5.82-.09,2.22-.05,4.45-.29,6.65-.2,1.79-1.48,2.73-3.27,2.79-1.69,.06-3.78-.47-3.69-2.17,.56-10.84-6.01-21.57-.52-32.46Z"
              ></path>
              <path
                class="cls-86"
                d="M451.94,526.96c.66,7.1,1.33,14.2,1.99,21.29,0,0-.02,0-.02,0-1.29,.65-2.57,1.29-3.86,1.94-.64-.65-1.28-1.3-1.92-1.95-.02-2.88,.54-5.92-.16-8.63-1.83-7.08-3.83-14.55-11.16-17.95-6.81-3.15-7.61,5.36-11.98,7.21-1.29,0-2.58,0-3.88,0,.64-.66,1.28-1.31,1.91-1.97,2.05-4.47,4.14-8.91,6.13-13.4,1.58-3.59,6.12-5.58,7.03-2.5,2.58,8.65,11.5,9.87,15.9,15.96Z"
              ></path>
              <path
                class="cls-112"
                d="M405.42,571.5c-5.49,10.89,1.08,21.62,.52,32.46-.09,1.7,2.01,2.23,3.69,2.17,1.8-.06,3.07-.99,3.27-2.79,.25-2.2,.21-4.43,.29-6.65,3.85,4.77,1.09,10.35,1.91,15.49-9.28,.83-9.9-4.44-12.27-12.35-6.62-22.08,3.7-43.22,1.02-64.78-.09-.69,1.01-1.53,1.55-2.3,0,12.92,0,25.83,0,38.75Z"
              ></path>
              <path
                class="cls-488"
                d="M420.96,528.88c1.29,0,2.58,0,3.88,0-1.79,18.19-7.39,35.84-7.79,54.24-3.12,1.67-.71,6.08-3.84,7.75-.06-16.19-1.3-32.51,5.94-47.83,1.5-3.18,2.2-6.68,1.8-10.28,0-1.29,.02-2.58,.03-3.87Z"
              ></path>
              <path
                class="cls-486"
                d="M389.91,445.56c-3.56-3.82-5.82-8.2-5.84-13.54,3.77,3.73,6.66,7.83,5.84,13.54Z"
              ></path>
              <path
                class="cls-347"
                d="M349.12,410.71c1.49,1.65,2.67,4.05,4.53,4.83,14.2,5.97,24.56,15.82,31.37,29.56,.51,1.03,1.92,1.62,2.91,2.42,.41,5.93,1.91,11.47,6.75,15.38,3.86,3.11,2.66,7.71,3.82,11.59,7.29,24.4,5.76,48.88,1.68,73.7-3.22,19.59-4.71,39.58-.44,59.29,2.27,10.49,6.75,20.22,14.21,28.27,.05,.06,.66-.2,.74-.41,.22-.59,.3-1.24,.43-1.86,1.29,0,2.58,0,3.88,.01,.65,0,1.3,.01,1.95,.02-.74,4.58,2.34,6.3,5.8,7.75,.65,.65,1.29,1.3,1.94,1.95-.2,3.39,.11,6.68,1.95,9.67-7.97-.38-5.3,5.61-5.8,9.69-.98,2.3-3.11,4.88-1,7.1,5.1,5.37,5.5,12.36,5.82,18.75,.76,15.33,4.38,31-2.88,45.87-.01-1.95-.02-3.91-.03-5.86,3.99-20.51,.72-39.76-7.2-59.17-5.04-12.37-10.9-24.44-16.21-36.61-12.23-28.06-10.59-56.23-6.48-85.1,1.89-13.28,6.12-27.32,3.61-39.88-3.81-19.12-7.69-38.61-17.18-56.51-10.66-20.12-25.3-34.09-48.31-36.32-15.32-1.48-30.57-.24-45.73,4.88-21.71,7.34-27.36,13.36-27.4,35.54-2.11,3.51-1.91,7.4-1.91,11.28,0,16.64-.09,33.27-.03,49.91,.09,29.94-3.18,59.8-1.91,89.76,.49,11.55,2.99,22.98,1.9,34.61-2.12,22.64-1.95,45.35-1.93,68.05,0,2.9,.19,5.84-.2,8.7-3.22,23.47-2.5,46.57,6.05,69,1.28,2.41,2.25,4.9,1.91,7.72-1.28-.63-2.57-1.26-3.85-1.89h0c-2.59-8.39-5.18-16.79-7.77-25.18l-.04-5.8c-4.19-28.42,2.56-56.84,.04-85.26,0,0,0,0,0,0,2.94-2.52,1.98-5.96,1.86-9.02-.61-15.88,1.16-31.7,.35-47.64-1.07-21.11-.28-42.31-.29-63.48,0-9.68,.02-19.36,.02-29.04,3.16-2.87,2.37-6.83,1.73-10-3.11-15.34-1.11-30.81-1.74-46.2-.22-15.13,2.83-29.83,5.84-44.54,10.4-9.64,25.1-9.1,36.86-15.5,16.79,0,33.59,0,50.38,.01Z"
              ></path>
              <path
                class="cls-102"
                d="M450.05,550.19c1.29-.65,2.57-1.29,3.86-1.94-1.02,21.18,2.77,42.18,2.13,63.39-.54,17.97-3.6,35.53-6.1,53.21-.17,1.23-.49,2.67-1.27,3.55-10.68,12.13-9.62,27.18-10.15,41.68-.38,10.39-4.55,19.88-5.92,29.99,1.02,6.28-5.11,9.88-5.83,15.51-1.29,.64-2.59,1.29-3.88,1.93,.3-1.24,.35-2.61,.93-3.71,10.91-20.81,9.49-43.28,8.66-65.58-.35-9.53,2.71-17.28,7.99-25.03,6.7-9.84,10.7-21.07,11.44-33.06,1.64-26.68-2.25-53.26-1.85-79.93Z"
              ></path>
              <path
                class="cls-63"
                d="M422.89,757.51c1.29-.64,2.59-1.29,3.88-1.93,3.72,9.3-4.15,14.2-8.09,20.41-2.17,3.41-6.22,5.68-5.5,10.56-4.52,1.3-9.05,2.59-13.57,3.89-.65,0-1.3,0-1.95-.01,1.3-1.3,2.59-2.59,3.89-3.89,9.73-7.76,18.8-16.01,21.34-29.04h0Z"
              ></path>
              <path
                class="cls-420"
                d="M254.06,761.39c.01,1.93,.03,3.87,.04,5.8-1.77,9.74,.66,18.18,7.77,25.18,0,0,0,0,0,0,.25,5.02,3.55,6,7.72,5.82,4.59,6.98,12.62,5.82,19.1,7.1,11.27,2.21,21.45,8.65,33.3,8.28,4.51,.04,9.03,.07,13.54,.11,3.9,0,7.81,.02,11.71,.03-14.92,8.78-29.98,7.97-45.64,1.69-7.86-3.15-16.5-4.33-24.66-6.82-3.39-1.04-8.61,1.02-9.97-2.13-3.7-8.57-13.47-13.27-14.6-23.09-.92-7.93-3.15-15.77-2.16-23.88,0,0,.04-.04,.04-.04,1.27,.65,2.55,1.31,3.82,1.96Z"
              ></path>
              <path
                class="cls-84"
                d="M347.25,813.7c-3.9,0-7.81-.02-11.71-.03,1.63-2.2,4.01-3.19,6.54-3.68,22.5-4.32,41.02-16.68,59.46-29.22,0,1.92,0,3.84,0,5.76-1.3,1.3-2.59,2.59-3.89,3.89-11.59,9.71-24.98,16-39.29,20.49-3.64,1.14-7.4,1.86-11.11,2.77Z"
              ></path>
              <path
                class="cls-163"
                d="M256.03,555.99c0,21.16-.78,42.37,.29,63.48,.81,15.94-.95,31.76-.35,47.64,.12,3.06,1.07,6.5-1.86,9.02,0-10.33-.01-20.67-.02-31,0-29.7,.02-59.4,.03-89.1,.64-.02,1.27-.03,1.91-.04Z"
              ></path>
              <path
                class="cls-152"
                d="M261.88,426.2c-3.01,14.71-6.05,29.41-5.84,44.54-.64,0-1.28,.01-1.93,.02,0-9.3-.03-18.6,0-27.9,.02-6.73,2.26-12.46,7.76-16.67Z"
              ></path>
              <path
                class="cls-163"
                d="M254.12,470.77c.64-.01,1.28-.02,1.93-.02,.62,15.39-1.37,30.85,1.74,46.2,.64,3.17,1.42,7.13-1.73,10-.66-3.88,1.54-8.24-1.94-11.65,0-3.23-.01-6.45-.02-9.68,0-6.46,0-12.91,0-19.37,0-5.16,.01-10.32,.02-15.49Z"
              ></path>
              <path
                class="cls-152"
                d="M254.11,515.3c3.48,3.41,1.28,7.77,1.94,11.65,0,9.68-.02,19.36-.02,29.04-.64,0-1.27,.02-1.91,.04,0-13.58,0-27.15,0-40.73Z"
              ></path>
              <path
                class="cls-152"
                d="M254.09,486.25c0,6.46,0,12.91,0,19.37-3.03-6.46-3.02-12.91,0-19.37Z"
              ></path>
              <path
                class="cls-163"
                d="M254.06,761.39c-1.27-.65-2.55-1.31-3.82-1.96-1.37-25.76,2.1-51.41,1.93-77.14-.02-2.25-.18-4.57,1.94-6.16,2.52,28.42-4.23,56.84-.04,85.26Z"
              ></path>
              <path
                class="cls-470"
                d="M419,633.49c-1.29,0-2.58,0-3.88-.01,.6-7.1,2.47-14.2-.01-21.29-.83-5.14,1.94-10.73-1.91-15.49,0-1.94,0-3.88,0-5.82,3.13-1.67,.72-6.07,3.84-7.75,.02,2.59,.05,5.17,.07,7.76,3.19,14.09,1.48,28.4,1.89,42.62Z"
              ></path>
              <path
                class="cls-413"
                d="M450.05,550.19c-.4,26.67,3.49,53.24,1.85,79.93-.74,11.99-4.73,23.22-11.44,33.06-5.28,7.75-8.34,15.51-7.99,25.03,.82,22.3,2.25,44.78-8.66,65.58-.58,1.1-.63,2.47-.93,3.71,0,0,0,0,0,0-1.26,.02-2.53,.03-3.79,.05,1.65-3.06,2.18-6.33,1.8-9.77,.02-.63,.04-1.25,.07-1.88,4.46-2.62,5.75-6.82,5.82-11.62,7.25-14.87,3.64-30.54,2.88-45.87-.32-6.39-.72-13.37-5.82-18.75-2.11-2.22,.02-4.8,1-7.1,2.18-3.52,2.36-8.48,9.55-6.57,3.92,1.04,8.76-2.98,9.81-8.52,.88-4.62,2.61-9.12,1.98-13.96,3.12-2.87,1.85-6.64,1.86-10.02,.12-25.08,.08-50.17,.09-75.25,.64,.65,1.28,1.3,1.92,1.95Z"
              ></path>
              <path
                class="cls-472"
                d="M448.13,548.24c0,25.08,.03,50.17-.09,75.25-.02,3.38,1.25,7.16-1.86,10.02-.65,0-1.3,0-1.95,0,0-.64-.01-1.29-.01-1.93,.19-5.43,2.64-10.53,1.88-16.17-3.13-23-2.55-46.03-.44-69.11,.59-6.46-1.35-12.53-7.28-16.79-4.82-3.46-6.91-2.11-7.71,3.21-2.65,2.7-3.07,6.31-3.94,9.73-3.48,15.95-6.44,31.96-5.82,48.4-1.27,0-2.53,.01-3.8,.02-.02-2.59-.05-5.17-.07-7.76,.4-18.39,6-36.04,7.79-54.24,4.37-1.85,5.17-10.36,11.98-7.21,7.34,3.4,9.33,10.87,11.16,17.95,.7,2.71,.14,5.74,.16,8.63Z"
              ></path>
              <path
                class="cls-303"
                d="M261.84,455.24c.04-22.18,5.69-28.2,27.4-35.54,15.15-5.12,30.41-6.36,45.73-4.88,23.02,2.23,37.65,16.2,48.31,36.32,9.49,17.9,13.37,37.4,17.18,56.51,2.5,12.57-1.72,26.6-3.61,39.88-4.12,28.87-5.75,57.04,6.48,85.1,5.31,12.18,11.16,24.25,16.21,36.61,7.92,19.42,11.19,38.66,7.2,59.17-3.64,3.82-.65,10.43-5.76,13.62,0,0-.1-.07-.1-.07-3.16-8.04,2.94-15.32,1.9-23.19,2.93-21.28-6.14-39.93-13.02-59.06-.78-2.17-2.09-3.98-4.32-4.93-.71-3.09-1.03-6.34-2.19-9.25-8.63-21.8-14.43-44.22-13.17-67.83,.56-10.49,2.2-20.93,1.81-31.49,3.1-2.7,1.45-6.29,1.78-9.51,.05-3.28,.09-6.56,.14-9.84,1.83-1.28,2.03-3.23,1.84-5.16-2.46-25.7-6.61-50.99-19.84-73.76-3.92-6.75-6.37-14.95-14.99-17.85-8.04-1.65-12.63-9.36-20.73-11.28-22.68-5.38-43.26-.18-62.83,11.23-10.72,4.98-12.6,15.38-15.43,25.18Z"
              ></path>
              <path
                class="cls-429"
                d="M261.84,455.24c2.84-9.81,4.71-20.2,15.44-25.18,.03,1.3,.06,2.6,.09,3.9-11.54,8.31-12.44,21.45-13.22,33.46-2.01,31.24,.22,62.58-2.02,93.92-2.73,38.2,3.33,76.51-.08,114.79-.7,24.98-2.15,49.97-1.71,74.93,.18,9.98-1.28,21.4,7.39,29.72,.63,2.56,1.26,5.12,1.89,7.68-1.93-.64-3.87-1.28-5.8-1.91-8.55-22.43-9.28-45.53-6.05-69,.39-2.85,.2-5.8,.2-8.7-.02-22.7-.19-45.41,1.93-68.05,1.09-11.63-1.41-23.06-1.9-34.61-1.27-29.97,2.01-59.83,1.91-89.76-.05-16.64,.03-33.27,.03-49.91,0-3.87-.2-7.76,1.91-11.28Z"
              ></path>
              <path
                class="cls-493"
                d="M420.91,590.85c-.62-16.44,2.34-32.45,5.82-48.4,.01,5.16,.03,10.32,.04,15.48-4.83,24.86-.35,49.24,3.89,73.62,1.38,2.31,3.69,1.86,5.82,1.95-.88,4.61,.43,10.96-7.78,9.69-.65-.65-1.29-1.3-1.94-1.95-.44-3.26,1.31-6.96-1.91-9.67-2.63-13.45-.57-27.35-3.93-40.73Z"
              ></path>
              <path
                class="cls-421"
                d="M263.81,786.55c1.93,.64,3.87,1.28,5.8,1.91,4.14,5.86,9.13,11.85,16.61,11.27,12.39-.96,22.55,5.54,33.87,7.95l-.05,.26c.65,1.88,1.31,3.75,1.96,5.63-11.84,.37-22.02-6.06-33.3-8.28-6.48-1.27-14.51-.12-19.1-7.1-.7-1.89-2.06-3.13-3.88-3.93,.34-2.81-.63-5.31-1.91-7.72Z"
              ></path>
              <path
                class="cls-402"
                d="M420.91,590.85c3.36,13.38,1.3,27.28,3.93,40.73-.85,1.54-2.29,1.88-3.88,1.93-.65,0-1.3-.01-1.95-.02-.41-14.22,1.3-28.52-1.89-42.62,1.27,0,2.53-.01,3.8-.02Z"
              ></path>
              <path
                class="cls-499"
                d="M444.24,633.51c.65,0,1.3,0,1.95,0,.63,4.84-1.1,9.33-1.98,13.96-1.06,5.54-5.9,9.56-9.81,8.52-7.19-1.91-7.37,3.05-9.55,6.57,.51-4.08-2.17-10.07,5.8-9.69,6.98-4.74,12.05-10.81,13.6-19.36Z"
              ></path>
              <path
                class="cls-404"
                d="M444.24,633.51c-1.55,8.55-6.62,14.62-13.6,19.36-1.84-2.98-2.14-6.28-1.95-9.67,8.22,1.27,6.91-5.09,7.78-9.69,1.93-.66,3.87-1.31,5.8-1.97,.65,.01,1.3,.03,1.95,.04,0,.64,0,1.29,.01,1.93Z"
              ></path>
              <path
                class="cls-163"
                d="M261.87,792.37c-7.11-7-9.54-15.44-7.77-25.18,2.59,8.39,5.18,16.79,7.77,25.18Z"
              ></path>
              <path
                class="cls-404"
                d="M420.95,633.51c1.59-.05,3.03-.39,3.88-1.93,3.22,2.71,1.47,6.41,1.91,9.67-3.46-1.44-6.54-3.17-5.8-7.75Z"
              ></path>
              <path
                class="cls-406"
                d="M420.98,742.05c5.12-3.19,2.12-9.81,5.76-13.63,0,1.95,.02,3.91,.03,5.86-.07,4.81-1.36,9.01-5.82,11.62,0-1.29,.02-2.57,.03-3.86Z"
              ></path>
              <path
                class="cls-163"
                d="M265.73,794.26c1.81,.8,3.18,2.03,3.88,3.93-4.17,.18-7.47-.8-7.72-5.82,1.28,.63,2.57,1.26,3.85,1.89Z"
              ></path>
              <path
                class="cls-153"
                d="M419.09,757.55c1.26-.02,2.53-.03,3.79-.05-2.54,13.03-11.61,21.28-21.34,29.04,0-1.92,0-3.84,0-5.77,1.29-1.3,2.58-2.6,3.87-3.9,4.76-6.3,12.72-10.34,13.68-19.32Z"
              ></path>
              <path
                class="cls-432"
                d="M405.41,776.87c-1.29,1.3-2.58,2.6-3.87,3.9-18.44,12.53-36.96,24.9-59.46,29.22-2.52,.48-4.91,1.48-6.54,3.68-4.51-.04-9.03-.07-13.54-.11-.65-1.88-1.31-3.75-1.96-5.63,7.17,.67,13.66-2.02,20.48-3.56,21.76-4.93,41.45-13.84,59.01-27.52,1.96,0,3.92,.01,5.87,.02Z"
              ></path>
              <path
                class="cls-406"
                d="M405.41,776.87c-1.96,0-3.92-.01-5.87-.02,7.77-7.06,14.27-15.02,17.57-25.19,1.26-1.3,2.52-2.59,3.78-3.89,.37,3.44-.16,6.7-1.8,9.77-.96,8.99-8.92,13.02-13.68,19.32Z"
              ></path>
              <path
                class="cls-303"
                d="M420.89,747.78c-1.26,1.3-2.52,2.59-3.78,3.89-.25-3.82,.8-7.13,3.78-9.69,0,0,.1,.07,.1,.07,0,1.29-.02,2.57-.02,3.86-.03,.63-.05,1.25-.07,1.88Z"
              ></path>
              <path
                class="cls-493"
                d="M444.22,631.58c-.65-.01-1.3-.03-1.95-.04,0-27.77,0-55.54,0-83.3-.64-3.23-1.29-6.45-1.93-9.68-.5-6.44-5.31-5.77-9.67-5.84,.8-5.31,2.89-6.67,7.71-3.21,5.93,4.26,7.88,10.33,7.28,16.79-2.12,23.08-2.69,46.1,.44,69.11,.77,5.64-1.69,10.74-1.88,16.17Z"
              ></path>
              <path
                class="cls-494"
                d="M430.67,532.72c4.36,.07,9.17-.6,9.67,5.84-.65,0-1.29,0-1.94,.01-9.91-3.43-8.47,4.44-9.67,9.69-.51,3.25,1.26,6.97-1.96,9.68-.01-5.16-.02-10.32-.04-15.48,.87-3.42,1.29-7.03,3.94-9.73Z"
              ></path>
              <path
                class="cls-274"
                d="M420.89,741.98c-2.98,2.56-4.03,5.88-3.78,9.69-3.31,10.17-9.8,18.12-17.57,25.19-17.57,13.68-37.25,22.58-59.01,27.52-6.82,1.55-13.31,4.23-20.48,3.56,0,0,.05-.26,.05-.25-.37-3.94-2.69-5.66-6.49-5.59-3.15,.07-5.74-.78-7.11-3.9,3.24,.29,6.47,2.75,9.71,0,9.02,3.61,17.98,1.62,27.14,.28,6.39-.93,12.78-.55,15.52-8.01,1.3-.03,2.59-.06,3.89-.1,4.95,.23,9.62-.51,13.59-3.79,6.82-2.36,12.64-6.2,17.4-11.62,4.73-3.82,10.25-6.94,11.7-13.58l3.88-5.86c2.41-7.16,7.06-13.5,7.74-21.28,3.25-2.7,1.5-6.4,1.95-9.66h0c1.26-1.94,2.51-3.86,3.77-5.79,1.05,7.87-5.05,15.15-1.9,23.19Z"
              ></path>
              <path
                class="cls-475"
                d="M393.82,526.88c-.05,3.28-.09,6.56-.14,9.84-3.1,2.7-1.39,6.3-1.78,9.51,.4,10.56-1.25,21-1.81,31.49-1.26,23.61,4.54,46.02,13.17,67.83,1.15,2.92,1.48,6.16,2.19,9.25,.63,3.23,1.26,6.47,1.9,9.7-.65,0-1.29,0-1.94,.02-2.37-2.7-6.46-4.18-5.82-8.96,1.08-8.1-3.56-14.77-5.81-22.04-5.34-18.36-8.48-37.03-7.78-56.23,0-14.84,.02-29.69,.03-44.53,3.92-6.58,1.52-14.86,5.78-21.34,.67,5.15,1.34,10.31,2.01,15.46Z"
              ></path>
              <path
                class="cls-503"
                d="M277.37,433.96c-.03-1.3-.06-2.6-.09-3.9,19.57-11.41,40.15-16.61,62.83-11.23,8.1,1.92,12.69,9.63,20.73,11.28,0,1.91,0,3.83,0,5.74-7.64-3.52-13.94-10.25-23.29-9.66-8.64-4.3-17.85-5.94-26.83-2.45-4.07,1.58-7.84,2.44-12.01,2.47-7.3,1.52-11.39,9.45-19.34,9.68l-1.98-1.94Z"
              ></path>
              <path
                class="cls-323"
                d="M360.83,435.85c0-1.91,0-3.83,0-5.74,8.62,2.9,11.07,11.1,14.99,17.85,13.23,22.77,17.38,48.06,19.84,73.76,.18,1.92-.02,3.87-1.84,5.16-.67-5.16-1.34-10.31-2.01-15.46-4.52-17.41-7.46-35.23-13.64-52.21-3.45-9.51-9.58-17.03-17.33-23.35Z"
              ></path>
              <path
                class="cls-234"
                d="M407.35,664.5c-.63-3.23-1.26-6.47-1.9-9.7,2.23,.95,3.54,2.76,4.32,4.93,6.88,19.12,15.95,37.77,13.02,59.06-1.26,1.93-2.52,3.85-3.77,5.78-1.99-5.17,4.96-10.33,0-15.5,.21-6.15-6.73-10.69-6.66-14.28,.2-10.65-5.72-19.89-5-30.29Z"
              ></path>
              <path
                class="cls-323"
                d="M391.9,546.23c.38-3.21-1.32-6.81,1.78-9.51-.32,3.22,1.32,6.81-1.78,9.51Z"
              ></path>
              <path
                class="cls-387"
                d="M277.37,433.96c.66,.65,1.32,1.29,1.98,1.93-3.95,8.79-1.09,18.07-1.98,27.09-3.88,.32-5.59,2.51-5.81,6.32-.58,10.22-1.63,20.42-1.87,30.64-.34,14.65,.58,29.35-.34,43.94-1.08,17.13-3.5,33.92-2.26,51.44,1.9,26.81,.58,53.88,2.51,80.79-2.52,0-5.04,0-7.56,0,3.41-38.27-2.65-76.59,.08-114.79,2.24-31.34,0-62.68,2.02-93.92,.77-12.01,1.68-25.15,13.22-33.46Z"
              ></path>
              <path
                class="cls-249"
                d="M262.05,676.13c2.52,0,5.04,0,7.56,0,.65,0,1.3,0,1.95,0-3.58,22.52,1.61,45.29-1.94,67.8-3.51,13.39-3.67,26.44,3.87,38.72-1.92-.63-3.85-1.25-5.77-1.88-8.66-8.32-7.21-19.74-7.39-29.72-.44-24.96,1.02-49.95,1.71-74.93Z"
              ></path>
              <path
                class="cls-336"
                d="M267.73,780.77c1.92,.63,3.85,1.25,5.77,1.88,.07,1.57,.34,3.04,1.97,3.81,8.28,9.36,21.74,5.04,31.02,11.73,1.37,3.11,3.96,3.96,7.11,3.9,3.8-.08,6.12,1.65,6.49,5.59-11.31-2.42-21.48-8.92-33.87-7.96-7.48,.58-12.47-5.41-16.61-11.27-.63-2.56-1.26-5.12-1.89-7.68Z"
              ></path>
              <path
                class="cls-391"
                d="M438.39,538.58c.65,0,1.29,0,1.94-.01,.64,3.23,1.29,6.45,1.93,9.68-6.66,6.34-4.57,14.62-4.39,22.17,.29,11.81,2.65,23.65,2.11,35.38-.42,9.07,2.41,20.39-9.34,25.78-4.24-24.39-8.72-48.76-3.89-73.62,3.22-2.71,1.45-6.42,1.96-9.68,.64,0,1.29,0,1.93,.01-1.85,14.15-2.32,28.36-1.95,42.6,.04,6.36-.62,12.78,2,18.88,.66,1.53,1.34,3.25,3.14,2.99,1.7-.25,2.46-1.99,2.49-3.67,.1-6.07,.08-12.14,.11-18.21-3.24-14.08-1.5-28.39-1.91-42.59,6.19-1.29,3.04-6.28,3.86-9.7Z"
              ></path>
              <path
                class="cls-494"
                d="M430.65,631.56c11.75-5.39,8.92-16.7,9.34-25.78,.54-11.73-1.82-23.57-2.11-35.38-.19-7.55-2.27-15.83,4.39-22.17,0,27.77,0,55.54,0,83.3-1.93,.66-3.87,1.31-5.8,1.97-2.13-.09-4.44,.36-5.82-1.95Z"
              ></path>
              <path
                class="cls-394"
                d="M430.66,548.27c-.64,0-1.29-.01-1.93-.01,1.2-5.24-.24-13.12,9.67-9.69-.82,3.42,2.33,8.41-3.86,9.7-1.29,0-2.59,0-3.88,0Z"
              ></path>
              <path
                class="cls-535"
                d="M409.32,755.52c-1.29,1.95-2.59,3.91-3.89,5.86-1.3-.65-2.6-1.29-3.89-1.94,4.32-13.09,.57-25.85-2.48-38.34-1.8-7.35-1.68-14.72-2.08-21.92-1.02-18.25-6.29-35.85-7.07-54.05v-11.63c.65,.65,1.3,1.29,1.95,1.94,.66,16.45,5.52,32.23,7.76,48.43-.76,3.46,1.94,6.47,.89,10.16-2.55,8.95-.85,17.29,4.93,24.7,1.95,7.75,3.89,15.5,5.84,23.24l-.02,.03c-3.14,1.93-5.7,4.01-1.97,7.7,.02,1.93,.04,3.87,.05,5.8Z"
              ></path>
              <path
                class="cls-189"
                d="M306.49,798.2c-9.29-6.7-22.75-2.37-31.02-11.73,.64-6.73-.42-13.33-2.48-19.63-1.57-4.81,.41-5.64,4.35-5.48,.03,1.95,.06,3.9,.08,5.84-.1,17.16,3.65,21.28,19.37,21.28,11.78,6.06,24.37,4.42,36.84,3.89v.05c-3.42,9.12-11.7,3.61-17.44,5.78-3.23,2.76-6.47,.29-9.71,0Z"
              ></path>
              <path
                class="cls-332"
                d="M316.19,798.2c5.74-2.17,14.02,3.35,17.45-5.78,8.39-.83,17.04,1.77,25.21-1.95-2.74,7.46-9.14,7.08-15.52,8.01-9.15,1.34-18.11,3.33-27.14-.28Z"
              ></path>
              <path
                class="cls-222"
                d="M358.85,790.47c-8.16,3.72-16.82,1.12-25.21,1.95,0,0,0-.05,0-.05,1.29-1.28,2.59-2.57,3.88-3.85,3.36-.65,6.85-2.21,10.07-1.76,7.27,1.01,11.85-1.97,15.16-7.93,2.04,2.83,5.09,1.64,7.76,1.96-1.47,2.39-5,2.73-5.8,5.79-.65,1.27-1.3,2.54-1.95,3.81-1.3,.03-2.59,.06-3.89,.1Z"
              ></path>
              <path
                class="cls-230"
                d="M409.32,755.52c-.02-1.93-.04-3.87-.05-5.8,.66-2.57,1.32-5.13,1.97-7.7,0,0,.02-.03,.02-.03,3.95-3.45,4.4-7.27,1.87-11.91-2.41-4.43-3.36-8.65,1.69-12.67,2.21-1.76,2.84-5.51,4.19-8.35,4.96,5.17-1.98,10.33,0,15.5,0,0,0,.01,0,0-3.24,2.7-1.47,6.41-1.95,9.66-.68,7.78-5.33,14.13-7.74,21.28Z"
              ></path>
              <path
                class="cls-213"
                d="M401.54,759.44c1.3,.65,2.6,1.29,3.89,1.94-1.44,6.64-6.97,9.76-11.7,13.58-1.93,0-3.85-.02-5.78-.03,0-3.22,0-6.44,0-9.66,3.64,.78,5.58-1.82,7.77-3.91,1.94-.64,3.87-1.28,5.81-1.92Z"
              ></path>
              <path
                class="cls-359"
                d="M387.95,774.93c1.93,0,3.85,.02,5.78,.03-4.76,5.42-10.59,9.26-17.4,11.62-3.88,0-7.76-.01-11.64-.02,.8-3.06,4.33-3.39,5.8-5.79,3.15,1.6,6.54,3.21,8.92-.78,2.03-3.39,5.82-3.19,8.53-5.07Z"
              ></path>
              <path
                class="cls-332"
                d="M364.7,786.56c3.88,0,7.76,.01,11.64,.02-3.97,3.28-8.64,4.03-13.59,3.79,.65-1.27,1.3-2.54,1.95-3.81Z"
              ></path>
              <path
                class="cls-234"
                d="M417.05,734.23c.48-3.25-1.29-6.96,1.95-9.66-.44,3.26,1.3,6.96-1.95,9.66Z"
              ></path>
              <path
                class="cls-513"
                d="M360.83,435.85c7.75,6.32,13.88,13.84,17.33,23.35-.58,1.09-1.65,2.18-1.68,3.29-.62,23.93,.74,47.61,9.54,70.27,0,14.84-.02,29.69-.03,44.53-2.82-6.35-2.47-13.97-7.72-19.35-.66-18.62-6.21-36.63-4.39-55.76,1.56-16.37-3.18-32.8-7.28-48.86-2.76-8.59-7.93-14.48-17.43-15.52,0-7.75-7.13-8.37-11.64-11.61,9.35-.59,15.65,6.15,23.29,9.66Z"
              ></path>
              <path
                class="cls-478"
                d="M386.03,532.76c-8.8-22.66-10.16-46.34-9.54-70.27,.03-1.11,1.1-2.19,1.68-3.29,6.18,16.98,9.12,34.8,13.64,52.21-4.26,6.48-1.86,14.77-5.78,21.34Z"
              ></path>
              <path
                class="cls-477"
                d="M419.01,709.06c-1.35,2.85-1.98,6.59-4.19,8.35-5.05,4.01-4.1,8.24-1.69,12.67,2.53,4.63,2.08,8.46-1.87,11.91-1.94-7.75-3.89-15.5-5.84-23.24,0-10.98-.01-21.96-.02-32.94-1.87-7.1-3.58-14.2,0-21.3,.65,0,1.29-.01,1.94-.02-.72,10.39,5.2,19.64,5,30.29-.07,3.59,6.87,8.13,6.66,14.28Z"
              ></path>
              <path
                class="cls-510"
                d="M378.28,557.94c5.25,5.38,4.9,13,7.72,19.35-.7,19.2,2.43,37.87,7.78,56.23-.64,.64-1.29,1.28-1.93,1.93-.65-.65-1.29-1.29-1.94-1.94-7.01-24.71-9.51-50.11-11.63-75.57Z"
              ></path>
              <path
                class="cls-358"
                d="M391.84,635.45c.64-.64,1.29-1.29,1.93-1.93,2.25,7.27,6.89,13.94,5.81,22.04-.64,4.78,3.45,6.26,5.82,8.96-3.58,7.1-1.87,14.2,0,21.3-1.93-.64-3.87-1.29-5.8-1.93-2.24-16.2-7.09-31.98-7.76-48.43Z"
              ></path>
              <path
                class="cls-283"
                d="M337.54,426.19c4.5,3.25,11.64,3.86,11.64,11.61,0,0-.03,.03-.03,.03-2.18-.32-4.97,.11-6.44-1.09-9.93-8.07-20.94-7.44-32.34-4.74-3.23,0-6.46,0-9.68,0-1.94,0-3.87,0-5.81,0,1.27-1.93,2.55-3.86,3.82-5.79,4.17-.03,7.94-.89,12.01-2.47,8.98-3.49,18.2-1.85,26.83,2.45Z"
              ></path>
              <path
                class="cls-356"
                d="M298.7,426.21c-1.27,1.93-2.55,3.86-3.82,5.79-9.08,8.5-6.7,20.6-9.75,30.99-2.56,.07-5.12,1.88-7.69,.02l-.05-.04c.89-9.01-1.97-18.3,1.98-27.09,7.95-.23,12.03-8.16,19.34-9.68Z"
              ></path>
              <path
                class="cls-278"
                d="M271.56,676.13c-.65,0-1.3,0-1.95,0-1.93-26.91-.61-53.98-2.51-80.79-1.24-17.52,1.18-34.3,2.26-51.44,.92-14.6,0-29.3,.34-43.94,.24-10.22,1.29-20.42,1.87-30.64,.22-3.81,1.92-6,5.81-6.32,0,0,.05,.04,.05,.04-1.42,13.56,3.43,26.91,1.72,40.41-1.53,12.06-5.89,23.83-1.93,36.26,.77,2.42,1.37,6.46-1.79,7.9-4.91,2.24-3.63,6.23-3.85,9.9-.6,9.68,3.85,19.2,1.73,28.76-2.34,10.58-1.4,21.16-1.75,31.74-3.17,2.86-2.4,6.83-1.75,10,3.25,15.99,1.13,32.1,1.76,48.14Z"
              ></path>
              <path
                class="cls-476"
                d="M271.56,676.13c-.63-16.04,1.48-32.15-1.76-48.14-.64-3.17-1.42-7.14,1.75-10-.05,5.68-1.51,12.43,2.32,16.5,3.91,4.15,3.29,8.15,3.51,12.57-.64,13.14,2.36,26.33,1.41,39.2-1,13.44-1.4,26.83-1.22,40.23,.1,7.46-.61,13.73-7.94,17.44,3.54-22.52-1.64-45.29,1.94-67.8Z"
              ></path>
              <path
                class="cls-318"
                d="M269.62,743.93c7.33-3.71,8.04-9.97,7.94-17.44-.18-13.4,.23-26.79,1.22-40.23,.95-12.86-2.05-26.06-1.41-39.2,.64,0,1.28,0,1.93,0,1.48,14.84,.46,29.9,3.9,44.57-4.2,23.06-2.94,46.58-5.83,69.75l-.04-.02c-3.95-.15-5.92,.68-4.35,5.48,2.05,6.3,3.12,12.91,2.48,19.63-1.63-.77-1.89-2.24-1.97-3.81-7.54-12.28-7.39-25.33-3.87-38.72Z"
              ></path>
              <path
                class="cls-360"
                d="M430.66,548.27c1.29,0,2.59,0,3.88,0,.4,14.21-1.34,28.51,1.91,42.59-2.58,0-5.16,0-7.74,0-.37-14.25,.11-28.46,1.95-42.6Z"
              ></path>
              <path
                class="cls-264"
                d="M428.7,590.88c2.58,0,5.16,0,7.74,0-.03,6.07-.02,12.14-.11,18.21-.03,1.68-.79,3.42-2.49,3.67-1.8,.26-2.48-1.46-3.14-2.99-2.62-6.1-1.96-12.52-2-18.88Z"
              ></path>
              <path
                class="cls-261"
                d="M378.28,557.94c2.12,25.46,4.61,50.86,11.63,75.57,0,3.88,0,7.75,0,11.63-1.29-.17-2.58-2.16-3.88,0-2.73-2.19-2.09-5.31-1.87-8.07,.93-11.74-3.59-22.67-4.98-34.08-2.15-17.69-5.71-35.2-8.67-52.79,.05-15.11-.64-30.13-5.84-44.56-1.84-17.4-1.95-34.86-1.93-52.32,1.29,0,2.58,.01,3.86,.02,4.11,16.06,8.84,32.49,7.28,48.86-1.82,19.13,3.73,37.14,4.39,55.76Z"
              ></path>
              <path
                class="cls-287"
                d="M386.02,645.12c1.3-2.16,2.59-.16,3.88,0,.79,18.21,6.05,35.81,7.07,54.05,.4,7.2,.29,14.57,2.08,21.92,3.05,12.48,6.8,25.24,2.48,38.34-1.94,.64-3.87,1.28-5.81,1.92,.31-7.79,1.28-15.42,.66-23.42-1.09-14.21-5.99-27.86-3.67-42.8,1.18-7.61,1.62-18.24-6.68-24.83,0-8.39-.02-16.79-.02-25.18Z"
              ></path>
              <path
                class="cls-218"
                d="M399.6,683.88c1.93,.64,3.87,1.29,5.8,1.93,0,10.98,.01,21.96,.02,32.94-5.79-7.41-7.49-15.75-4.93-24.7,1.06-3.7-1.64-6.71-.89-10.16Z"
              ></path>
              <path
                class="cls-477"
                d="M411.24,742.02c-.66,2.57-1.32,5.13-1.97,7.7-3.72-3.69-1.17-5.77,1.97-7.7Z"
              ></path>
              <path
                class="cls-550"
                d="M362.74,778.82c-3.31,5.96-7.89,8.94-15.16,7.93-3.21-.44-6.7,1.11-10.07,1.76-10.69,1.13-21.07,1.11-29.09-7.76,1.98-.34,4.01-.73,2.95-3.5-1.23-3.18-3.44-4.41-7.04-5.19-8.93-1.91-19,2.3-26.91-4.88-.03-1.95-.06-3.9-.08-5.84,0,0,.04,.02,.04,.02,1.94-.64,3.88-1.29,5.82-1.93,2.59,.64,5.18,1.28,7.76,1.92-1.25,2.88-.37,3.98,2.82,3.94,5.8-.06,11.25,1.71,16.58,3.83,3.66,3.82,5.1,10.78,10.95,11.23,8.53,.65,17.53,2.34,25.73-.99,9.51-3.87,19.59-5.27,29.26-8.32l.03,.03c-3.51,4.37-9.59,4.24-13.59,7.74Z"
              ></path>
              <path
                class="cls-544"
                d="M277.42,767.2c7.92,7.17,17.98,2.96,26.91,4.88,3.61,.77,5.82,2.01,7.04,5.19,1.06,2.76-.97,3.16-2.95,3.5-6.31-1.08-9.74,2.17-11.63,7.72-15.72,0-19.47-4.12-19.37-21.28Z"
              ></path>
              <path
                class="cls-270"
                d="M296.79,788.48c1.9-5.55,5.33-8.8,11.63-7.72,8.01,8.88,18.4,8.89,29.09,7.76-1.29,1.28-2.59,2.57-3.88,3.85-12.47,.52-25.06,2.17-36.84-3.89Z"
              ></path>
              <path
                class="cls-228"
                d="M362.74,778.82c4.01-3.5,10.08-3.37,13.59-7.74,5.78,1.87,6.93-5.52,11.63-5.81,0,3.22,0,6.44,0,9.66-2.72,1.87-6.5,1.67-8.53,5.07-2.39,3.99-5.77,2.38-8.92,.78-2.67-.31-5.72,.88-7.76-1.96Z"
              ></path>
              <path
                class="cls-220"
                d="M387.96,765.27c-4.7,.29-5.84,7.68-11.63,5.81,0,0-.03-.03-.03-.03,4.16-3.48,5.87-9.52,12.49-10.58,3.29-.53,3.19-4.43,2.99-7.33-.19-2.83-1.48-5.77-1.01-8.44,3.6-20.13-2.99-40.05-.96-60.14,.33-3.27-1.12-6.24-3.78-8.43-.64-.65-1.28-1.3-1.92-1.95,1.55-.84,1.87-2.29,1.93-3.87,8.3,6.59,7.86,17.22,6.68,24.83-2.33,14.94,2.58,28.6,3.67,42.8,.61,8-.35,15.63-.66,23.42-2.19,2.09-4.13,4.69-7.77,3.91Z"
              ></path>
              <path
                class="cls-283"
                d="M366.6,453.32c-1.29,0-2.58-.01-3.86-.02-2.61-6.84-12.83-7.01-13.59-15.47,0,0,.03-.03,.03-.03,9.5,1.04,14.67,6.93,17.43,15.52Z"
              ></path>
              <path
                class="cls-296"
                d="M300.68,432c3.23,0,6.46,0,9.68,0,.65,1.29,1.3,2.58,1.94,3.87-5.43,.72-9.29,4.75-12.22,8.29-3.39,4.1-7.41,10.28,.52,14.92-4.35,7.71-6.5,15.89-5.81,24.83,1.38,18.1,2.67,36.22,3.76,54.34,.2,3.34-1.01,14.56-1.01,19.53-.65-.01-2.05-9.54-2.7-9.55,0-7.88-.47-15.81,.17-23.64,.41-5.08-2.05-6.47-5.97-7.34,0-12.92-.01-25.84-.02-38.76,1.38-2.57,2.05-5.26,1.96-8.22-.39-13.66,4.22-26.08,9.69-38.27Z"
              ></path>
              <path
                class="cls-216"
                d="M312.3,435.87c-.65-1.29-1.3-2.58-1.94-3.87,11.4-2.7,22.41-3.33,32.34,4.74,1.47,1.2,4.26,.77,6.44,1.09,.76,8.46,10.98,8.64,13.59,15.47-.02,17.46,.08,34.92,1.93,52.32-1.29,0-2.58,0-3.86,0-.22-4.14-.92-8.38-.96-12.36-.11-9.31-6.67-18.67-1.22-27.67,3.09-5.1,1.68-7.32-2.3-10.13-3.65-2.58-7.77-5.04-10.29-8.55-3.33-4.66-7.29-5.78-12.38-5.23-.17-2.15-.35-3.86-2.34-5.72-6.55-6.09-12.71,.24-19-.09Z"
              ></path>
              <path
                class="cls-518"
                d="M300.68,432c-5.47,12.19-10.08,24.61-9.69,38.27,.08,2.96-.59,5.65-1.96,8.22-1.29,1.94-2.59,3.88-3.88,5.82,0-7.11-.01-14.21-.02-21.32,3.05-10.39,.67-22.49,9.75-30.99,1.94,0,3.87,0,5.81,0Z"
              ></path>
              <path
                class="cls-314"
                d="M285.12,463c0,7.11,.01,14.21,.02,21.32-1.04,4.37-1.43,8.85-2.14,13.24-2.48,15.21,.54,30.66-2,45.67-2.18,12.88-1.11,25.68-1.69,38.51-.99,21.78,2.74,43.55,0,65.32-.64,0-1.28,0-1.93,0-.22-4.42,.4-8.42-3.51-12.57-3.83-4.07-2.37-10.82-2.32-16.5,.35-10.59-.59-21.16,1.75-31.74,2.12-9.57-2.33-19.09-1.73-28.76,.23-3.68-1.06-7.66,3.85-9.9,3.15-1.44,2.56-5.48,1.79-7.9-3.96-12.43,.4-24.2,1.93-36.26,1.71-13.5-3.14-26.84-1.72-40.41,2.57,1.86,5.13,.05,7.69-.02Z"
              ></path>
              <path
                class="cls-506"
                d="M279.31,647.06c2.74-21.77-.99-43.54,0-65.32,.58-12.83-.48-25.62,1.69-38.51,2.54-15.02-.48-30.46,2-45.67,.72-4.39,1.1-8.87,2.14-13.24,1.29-1.94,2.59-3.88,3.88-5.82,0,12.92,.01,25.84,.02,38.76-.17,29.6-3.15,59.13-2.01,88.76,.31,8.05,.91,16.26-.26,24.15-2.58,17.35-2.37,34.53,.31,51.77-3.68,2.28-.17,7.42-3.86,9.69-3.43-14.67-2.42-29.73-3.9-44.57Z"
              ></path>
              <path
                class="cls-286"
                d="M283.21,691.62c3.7-2.27,.19-7.41,3.86-9.69-.38,11.18,2.46,21.98,3.9,32.94-3.71,14.66-2.32,30.21-7.78,44.56-1.94,.64-3.88,1.29-5.82,1.93,2.89-23.17,1.63-46.69,5.83-69.75Z"
              ></path>
              <path
                class="cls-573"
                d="M386.04,670.31c-.06,1.58-.38,3.03-1.93,3.87-.01-1.29-.03-2.58-.04-3.86-.45-3.27,1.3-6.97-1.92-9.69-3-17.32-3.72-34.91-6.88-52.29-2.06-11.36-9.76-21.01-8.64-32.96,0-9.04,0-18.08,0-27.12,1.29,.64,2.59,1.29,3.88,1.93,2.96,17.59,6.52,35.1,8.67,52.79,1.39,11.41,5.91,22.34,4.98,34.08-.22,2.76-.86,5.88,1.87,8.07,0,8.39,.02,16.79,.02,25.18Z"
              ></path>
              <path
                class="cls-537"
                d="M370.51,550.19c-1.29-.64-2.59-1.29-3.88-1.93-2.95-2.46-1.58-5.86-1.95-8.89-1.28-10.6-2.58-21.2-3.88-31.8,0-.65,0-1.29,0-1.94,1.29,0,2.58,0,3.86,0,5.19,14.43,5.89,29.45,5.84,44.56Z"
              ></path>
              <path
                class="cls-560"
                d="M386.03,676.14c2.66,2.19,4.11,5.16,3.78,8.43-2.03,20.08,4.56,40.01,.96,60.14-.48,2.66,.81,5.61,1.01,8.44,.2,2.9,.3,6.8-2.99,7.33-6.62,1.06-8.33,7.11-12.49,10.58-9.67,3.05-19.75,4.45-29.26,8.32-8.2,3.33-17.21,1.64-25.73,.99-5.85-.45-7.29-7.41-10.95-11.23,1.39-2.28,3.68-1.88,5.81-1.95,4.89,4.78,10.65,6.26,17.52,6,7.1-.27,14.05-1.4,21.07-1.91,7.88-.57,13.29-6.48,19.89-8.23,10.86-2.88,9.9-11.01,10.41-17.93,1.17-15.86,3-31.87-.97-47.68,0-1.29,0-2.59,0-3.88,3.86-5.45,1.06-11.64,1.93-17.42Z"
              ></path>
              <path
                class="cls-566"
                d="M283.2,759.44c5.46-14.36,4.07-29.9,7.78-44.56,.65,0,1.3,0,1.95,0,1.94,5.8,3.88,11.6,5.83,17.4,2.77,6.72-.64,13.81,2.65,21.2,3.08,6.91-7.43,4.27-10.44,7.88l-7.76-1.92Z"
              ></path>
              <path
                class="cls-570"
                d="M290.96,761.36c3.01-3.61,13.51-.97,10.44-7.88-3.29-7.39,.12-14.48-2.65-21.2,.64,.69,1.28,1.37,1.93,2.06,3.37,7.81,8.39,14.56,13.57,21.22q-4.34,3.31,1.93,11.63c-2.13,.07-4.42-.33-5.81,1.95-5.33-2.12-10.78-3.89-16.58-3.83-3.19,.03-4.07-1.06-2.82-3.94Z"
              ></path>
              <path
                class="cls-575"
                d="M386.03,676.14c-.88,5.78,1.93,11.97-1.93,17.42-2.78-5.53,1.27-13.33-5.82-17.42-2-10.33-6.15-20.26-5.85-31.02,0-11.87,2.16-24.45-2.85-35.27-6.1-13.15-6.97-26.46-6.83-40.29,.64,0,1.28,0,1.92,0,.08,2.13-.33,4.43,1.95,5.82-1.12,11.95,6.58,21.6,8.64,32.96,3.16,17.38,3.88,34.97,6.88,52.29,.46,3.27-1.29,6.97,1.92,9.69,.01,1.29,.03,2.58,.04,3.86,.64,.65,1.28,1.3,1.92,1.95Z"
              ></path>
              <path
                class="cls-509"
                d="M292.92,714.88c-.65,0-1.3,0-1.95,0-1.44-10.96-4.28-21.76-3.9-32.94-2.67-17.24-2.88-34.42-.31-51.77,1.17-7.89,.57-16.1,.26-24.15-1.14-29.63,1.84-59.17,2.01-88.76,3.92,.87,6.38,2.27,5.97,7.34-.64,7.83-.17,15.75-.17,23.64-2.39,9.45-1.79,19.09-1.97,28.7-.62,34.56,1.58,69.16-1.78,103.68-.35,3.6-1.52,7.77,1.76,10.99-.04,.68-.08,1.35-.12,2.03-2.77,3.75-2.58,7.55-.21,11.39,.13,3.29,.26,6.58,.39,9.86Z"
              ></path>
              <path
                class="cls-557"
                d="M296.8,548.27c3.4,37.79,1.19,75.67,2.01,113.5,.23,10.55-1.65,20.35-5.96,29.83-3.28-3.21-2.11-7.39-1.76-10.99,3.37-34.52,1.16-69.13,1.78-103.68,.17-9.61-.42-19.25,1.97-28.7,.65,.01,1.31,.03,1.96,.04Z"
              ></path>
              <path
                class="cls-584"
                d="M304.58,455.28c-1.32,1.27-2.65,2.54-3.97,3.81-7.93-4.64-3.91-10.82-.52-14.92,2.92-3.54,6.79-7.57,12.22-8.29,6.29,.33,12.45-6,19,.09,2,1.86,2.18,3.57,2.34,5.72,0,0-.01,.02-.01,.02-4.32-.54-9.31,1.7-12.89-1.54-4.34-3.92-9.25-1.66-10.86,.8-2.65,4.06-9.76,7.35-5.34,14.25,0,0,.04,.07,.04,.07Z"
              ></path>
              <path
                class="cls-584"
                d="M360.8,505.62c0,.65,0,1.29,0,1.94-1.29,0-2.58,0-3.87,0-3.2-7.43-6.18-14.92-5.83-23.25,0-7.11,0-14.21,0-21.32-1.54-10.6-10.59-15.05-17.45-21.3,0,0,.01-.02,.01-.02,5.09-.54,9.05,.57,12.38,5.23,2.51,3.51,6.63,5.97,10.29,8.55,3.98,2.81,5.39,5.03,2.3,10.13-5.45,9,1.11,18.36,1.22,27.67,.05,3.98,.74,8.22,.96,12.36Z"
              ></path>
              <path
                class="cls-181"
                d="M356.93,507.57c1.29,0,2.58,0,3.87,0,1.29,10.6,2.6,21.2,3.88,31.8,.37,3.03-1,6.43,1.95,8.89,0,9.04,0,18.08,0,27.12-2.28-1.4-1.87-3.69-1.95-5.82-.75-4.5,1.8-9.47-1.93-13.54-2.83-2.04-1.65-5.09-1.95-7.76-3.3-13.37-1.27-27.25-3.87-40.68Z"
              ></path>
              <path
                class="cls-560"
                d="M384.07,670.32c-3.21-2.72-1.46-6.43-1.92-9.69,3.23,2.72,1.47,6.42,1.92,9.69Z"
              ></path>
              <path
                class="cls-37"
                d="M316.17,767.18q-6.27-8.32-1.93-11.63c1.29,.66,2.58,1.33,3.86,1.99,1.59,6.21,5.24,8.53,11.89,10.18,10.84,2.68,20.93,.41,30.08-3.22,6.34-2.51,16.2-2.86,18.02-12.41,1.73-9.1,2.72-18.34,4.04-27.52,3.11-8.87,1.59-18.07,1.96-27.13,3.97,15.81,2.14,31.81,.97,47.68-.51,6.92,.45,15.05-10.41,17.93-6.6,1.75-12.01,7.66-19.89,8.23-7.01,.51-13.97,1.64-21.07,1.91-6.87,.26-12.63-1.22-17.52-6Z"
              ></path>
              <path
                class="cls-514"
                d="M384.09,697.44c-.37,9.06,1.16,18.26-1.96,27.13-1.87,1.29-3.73,2.57-5.6,3.86,2.41-17.37,1.52-34.85,1.74-52.29,7.09,4.09,3.04,11.89,5.82,17.42,0,1.29,0,2.59,0,3.88Z"
              ></path>
              <path
                class="cls-557"
                d="M318.1,757.54c-1.29-.66-2.58-1.33-3.86-1.99-5.17-6.66-10.19-13.42-13.57-21.22,.73-.06-.73,.06,0,0,9.65,18.94,26.07,29.23,48.39,24.7-10.75,8.36-20.8,2.25-30.96-1.48Z"
              ></path>
              <path
                class="cls-521"
                d="M372.45,648.04c-4.89-11.96-5.13-27.58-9.66-40.1-1.06-2.92-1.79-5.93-2.11-9.02-1.76-16.85-4.13-33.65-3.82-50.66l3.9-.23c.25,1.71-.18,3.59,.18,5.27l1.82,14.63c-.23,14.41,.47,28.25,6.81,41.91,5.01,10.81,2.88,26.32,2.88,38.19Z"
              ></path>
              <path
                class="cls-565"
                d="M362.75,569.56c0-4.52-1.8-11.74-1.8-16.26,6.47,4.48,2.98,11.75,3.73,16.25-.64,0-1.28,0-1.92,0Z"
              ></path>
              <path
                class="cls-557"
                d="M292.74,693.63c-.07,3.8-.13,7.6-.2,11.39-2.37-3.84-2.57-7.65,.2-11.39Z"
              ></path>
              <path
                class="cls-565"
                d="M360.79,548.25c-1.31,0-2.62,0-3.93,.01-4.65-12.38-2.3-25.84-5.81-38.36-4.62-16.53-7.84-33.82-21.52-46.11-3.52-3.16-7.61-5.69-11.44-8.5,5.6-.34,9.22,3.11,13.32,6.26,8.19,6.29,11.84,16.31,19.68,22.78-.35,8.32,2.63,15.81,5.83,23.25,2.6,13.44,.56,27.31,3.87,40.68Z"
              ></path>
              <path
                class="cls-191"
                d="M351.1,484.32c-7.84-6.46-11.49-16.49-19.68-22.78-4.1-3.15-7.72-6.6-13.32-6.26-4.51,0-9.01,0-13.52-.01,0,0-.04-.07-.04-.07,12.22-12.23,23.42-8.54,34.74,1.69,3.18,2.87,7.83,4.11,11.81,6.1,0,7.11,0,14.21,0,21.32Z"
              ></path>
              <path
                class="cls-552"
                d="M351.09,463c-3.98-1.99-8.63-3.23-11.81-6.1-11.33-10.23-22.52-13.92-34.74-1.69-4.42-6.91,2.69-10.2,5.34-14.25,1.61-2.46,6.53-4.72,10.86-.8,3.58,3.23,8.57,1,12.89,1.54,6.86,6.25,15.91,10.71,17.45,21.3Z"
              ></path>
              <path
                class="cls-549"
                d="M349.06,759.03c6.06-3.3,12.06-4.76,17.27-9.37,2.95-.95,4.78-5.01,6.07-7.7,1.38-4.51,2.76-9.02,4.14-13.53,1.87-1.29,3.73-2.57,5.6-3.86-1.32,9.18-2.31,18.42-4.04,27.52-1.82,9.55-11.68,9.9-18.02,12.41-9.16,3.63-19.24,5.9-30.08,3.22-6.64-1.64-10.3-3.97-11.89-10.18,10.16,3.74,20.21,9.84,30.96,1.48Z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Diablo_1:text-white font-[600]"
                href="#"
              >
                Diablo</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action RPG</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[128px] h-full flex justify-center items-center cursor-pointer gap-1 hover:bg-[#303237] group/Overwatch relative"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/Overwatch:text-white"
      href="#"
    >
      Overwatch
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>

    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/Overwatch:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-auto bg-[#1a1c23] hidden group-hover/Overwatch:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[5px] flex-col pb-[5px] gap-1"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Overwatch_2"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #ed6516;
                }
                .st1 {
                  fill: #ffffff;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M149.8,149.9c27.2-27.2,64.7-44,106.1-44s79,16.8,106.1,44l42.5-42.5c-38-38-90.5-61.5-148.6-61.5
            s-110.5,23.5-148.6,61.5L149.8,149.9z"
                ></path>
                <path
                  class="st1"
                  d="M416.8,120.8l-42.7,42.7c20,25.5,31.9,57.6,31.9,92.5c0,28.3-7.8,54.7-21.4,77.3l-77.3-77.3l-42.1-98.9H265
            v133.6l83.4,83.4c-25.5,20-57.6,31.9-92.5,31.9s-67-11.9-92.5-31.9l83.4-83.4V157.6l-42.3,98.4l-77.3,77.3
            c-13.6-22.6-21.4-49-21.4-77.3c0-34.9,11.9-67,31.9-92.5l-42.7-42.7c-30.7,36.5-49.2,83.7-49.2,135.1c0,116,94.1,210.1,210.1,210.1
            S466,372,466,255.9C466,204.5,447.5,157.3,416.8,120.8z"
                ></path>
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          class="st1"
                          d="M411,431h-1.5v2.2h-0.8v-5.9h2.4c1.1,0,1.8,0.7,1.8,1.9c0,0.9-0.5,1.6-1.3,1.8l1.4,2.3h-0.9L411,431z
                     M409.5,430.3h1.6c0.7,0,1.2-0.5,1.2-1.2c0-0.7-0.4-1.2-1.2-1.2h-1.6V430.3z"
                        ></path>
                      </g>
                      <path
                        class="st1"
                        d="M410.8,435.7c-3.1,0-5.5-2.5-5.5-5.5c0-3.1,2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5
                  C416.3,433.3,413.8,435.7,410.8,435.7z M410.8,425.4c-2.7,0-4.8,2.1-4.8,4.8s2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8
                  C415.6,427.6,413.4,425.4,410.8,425.4z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Overwatch_2:text-white font-[600]"
                href="#"
              >
                Overwatch 2
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Team-Based Action Game</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[132px] h-full flex justify-center items-center cursor-pointer gap-1 hover:bg-[#303237] group/Call_of_Duty relative"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/Call_of_Duty:text-white"
      href="#"
    >
      Call of Duty
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>
    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/Call_of_Duty:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-[530px] bg-[#1a1c23] hidden group-hover/Call_of_Duty:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col pb-[10px] gap-1 overflow-auto Call_of_Duty"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/World_of_Warcraft"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1026.14 248.76"
              part="icon"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #f96800;
                  }

                  .cls-1,
                  .cls-2 {
                    stroke-width: 0px;
                  }

                  .cls-2 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-2"
                d="M286.12,126.77h-2.59v-7.96h.71c11.13,0,19.49-3.98,25.06-11.93,5.57-7.96,8.35-20.44,8.35-37.46v-21.21c0-14.8-3.69-26.52-11.06-35.14-7.38-8.62-17.57-12.93-30.59-12.93H0v248.61h277.65c13.18,0,23.65-4.47,31.41-13.42,7.77-8.95,11.65-21.71,11.65-38.29v-22.87c0-31.6-11.53-47.4-34.59-47.4ZM86.82,60.48h140c2.51,0,3.77,1.77,3.77,5.3v24.2c0,3.54-1.26,5.3-3.77,5.3H86.82v-34.81ZM233.65,183.12c0,3.54-1.26,5.3-3.77,5.3H86.82v-38.12h143.06c2.51,0,3.77,1.77,3.77,5.3v27.51Z"
              ></path>
              <path
                class="cls-1"
                d="M1016.48,103.78c-6.44-7.97-16.58-11.96-30.42-11.96l-165.3.05c-11.69,0-16.51,5.54-22.6,11.87-3.3,3.43-16.77,18.31-16.77,18.31v-42.05c0-1.7.24-4.3,2.19-6.43,3.83-4.19,8.52-9.41,11.86-13,1.88-2.02,2.95-2.83,4.91-2.83h162.24c9.3,0,12.1-1.69,21.88-12.37,14.8-16.16,39.88-45.06,39.88-45.06l-250.62.04c-12.71,0-15.4,2.07-24.49,11.99-4.64,5.05-16.15,16.9-29.1,31.55-10.66,12.06-9.84,16.35-9.84,24.24l.1,126.1c0,17.25,3.5,30.63,10.5,40.13,7,9.5,16.86,14.25,29.57,14.25h235.6c12.87,0,22.77-4.75,29.69-14.25,6.92-9.5,10.38-22.87,10.38-40.13v-52.61c0-17.25-3.22-29.86-9.66-37.83ZM952.03,186.36c0,1.53-.32,2.73-.96,3.6-.65.88-1.53,1.31-2.65,1.31h-163.56c-1.13,0-2.01-.44-2.65-1.31-.65-.87-.97-2.07-.97-3.6,0,0,.11-1.49.15-5.43.05-4.14-.54-5.35,1.62-7.72,3.04-3.34,9.68-10.59,14.06-15.04,4.89-4.97,7.09-6.93,10.21-6.93l141.86-.24c1.93,0,2.9,1.31,2.9,3.93v31.43Z"
              ></path>
              <path
                class="cls-2"
                d="M649.24,14.1c-6.68-9.4-16.22-14.1-28.64-14.1h-244.7c-12.26,0-21.77,4.7-28.52,14.1-6.75,9.4-10.13,22.85-10.13,40.34v139.72c0,17.27,3.38,30.67,10.13,40.18,6.75,9.51,16.26,14.27,28.52,14.27h244.7c12.42,0,21.96-4.76,28.64-14.27,6.67-9.51,10.01-22.9,10.01-40.18V54.45c0-17.49-3.34-30.94-10.01-40.34ZM573.1,168.91c0,1.53-.35,2.74-1.05,3.61-.7.88-1.59,1.31-2.68,1.31h-142.49c-1.09,0-1.98-.44-2.68-1.31-.7-.87-1.05-2.07-1.05-3.61v-89.21c0-1.53.35-2.73,1.05-3.61.7-.87,1.59-1.31,2.68-1.31h142.49c1.08,0,1.98.44,2.68,1.31.7.88,1.05,2.08,1.05,3.61v89.21Z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/World_of_Warcraft:text-white font-[600]"
                href="#"
              >
                World of Warcraft
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Massively Multiplayer RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/World_of_Warcraft_Classic"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="COD_x5F_MW3_x5F_ICON"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1728 504"
              style="enable-background: new 0 0 1728 504"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #d80000;
                }
                .st1 {
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  fill: #ffffff;
                }
              </style>
              <path
                id="III_00000154409082969091041530000012956753807431131806_"
                class="st0"
                d="M1236.77,91.25h88.07v321.62h-102.19V116.3
            L1236.77,91.25z M1481.97,91.25v321.38h88.6l13.61-24.48V91.25H1481.97z M1352.3,412.87h102.19V91.25H1352.3V412.87z"
              ></path>
              <path
                id="MW"
                class="st1"
                d="M608.92,339.73l102.75-99.94V91.13H594.3L427.81,260.24L261.15,91.31H143.82v321.6h102.67l0.11-173.55
            H263L427.71,399.4l164.75-160.26h16.4L608.92,339.73z M1074.01,91.41l-0.11,173.55h-16.4L892.72,104.66L608.8,380.14l0,32.7h117.35
            l166.68-168.98l166.51,169.17h117.38V91.41H1074.01z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/World_of_Warcraft_Classic:text-white font-[600]"
                href="#"
              >
                World of Warcraft Classic</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Massively Multiplayer RPG</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft_Rumble"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              id="Artwork"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 264.81 159.8"
              part="icon"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M127.38,0l-13.92,101.31h-2.32L102.19,0H63.23l-8.95,101.31h-2.32L38.04,0H0L26.83,159.8h45.78l8.52-101.42h3.14l8.52,101.42h45.78L165.42,0h-38.04Z"
              ></path>
              <polygon
                class="cls-1"
                points="264.38 31.24 264.38 0 173.95 0 168.26 33.88 219.76 33.88 168.72 128.36 168.72 159.78 264.81 159.8 264.81 125.92 213.28 125.92 264.38 31.24"
              ></polygon>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft_Rumble:text-white font-[600]"
                href="#"
              >
                Warcraft Rumble
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Action Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Hearthstone"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-]32px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1080 1080"
              style="enable-background: new 0 0 1080 1080"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #f2f2f2;
                }
                .st1 {
                  fill: #82c341;
                }
              </style>
              <g>
                <polygon
                  id="W"
                  class="st0"
                  points="1079.96,391.83 1079.96,688.39 971.56,688.39 817.54,530.2 668.51,681.69 668.51,556.28 
              817.54,403.84 985.31,575.4 985.31,391.83 	"
                ></polygon>
                <path
                  class="st1"
                  d="M525.15,688.39h-96.09V391.61h96.09V688.39z M554.85,688.39h96.3V391.61h-96.3V688.39z"
                ></path>
                <polygon
                  id="M"
                  class="st0"
                  points="261.08,550.04 411.71,394.73 411.71,522.1 261.08,676.07 94.9,506.21 94.9,688.39 0.04,688.39 
              0.04,391.83 108.45,391.83 	"
                ></polygon>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Hearthstone:text-white font-[600]"
                href="#"
              >
                Hearthstone</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Strategy Card Game</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              part="icon"
            >
              <path
                d="M29.9611 32.5969L46 5.28787H43.0195L29.9052 27.6418L28.4522 25.1642L40.0948 5.28787H37.2261L26.9992 22.7239L25.3971 20.0228L34.0593 5.28787H31.265L24.0559 17.5825L18.1693 7.61641L16.7909 5.28787H16.7536H16.735H16.7163H13.8848H10.6808H7.90517H4.7011H2L3.37849 7.61641L24.0559 42.7121L25.3971 40.4022L6.07959 7.61641H9.28366L26.9992 37.6824L28.3776 35.3167L12.0593 7.61641H15.2447L29.9611 32.5969Z"
                fill="#B49B58"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              part="icon"
            >
              <path
                d="M30.7989 23.6568C30.3177 23.2156 29.5997 23.0007 28.6032 23.0007H18.9644V35.2879H21.9257V30.9127H28.6025C29.5997 30.9127 30.3177 30.6985 30.7982 30.2572C31.2844 29.8111 31.5303 29.1237 31.5303 28.2151V25.709C31.5311 24.7939 31.2851 24.1023 30.7989 23.6568ZM28.5484 27.727C28.5484 28.1455 28.4518 28.2569 28.4411 28.2668C28.4041 28.303 28.2378 28.3725 27.866 28.3725H21.9264V25.5189H27.866C28.2378 25.5189 28.4041 25.5891 28.4404 25.6231C28.4518 25.6345 28.5484 25.7459 28.5484 26.1651V27.727ZM45.2322 30.4154C45.181 29.4585 44.95 28.7875 44.5299 28.3697C44.0508 27.893 43.2525 27.6625 42.0889 27.6625H35.5088V25.5926H42.4301V26.8389L45.1142 26.0799V25.4444C45.1142 24.9209 44.8739 24.169 44.3785 23.6959C43.8894 23.2277 43.0883 23 41.929 23H35.9147C34.7262 23 33.9194 23.2341 33.4467 23.7186C32.9783 24.1988 32.7508 25.0046 32.7508 26.1856V27.1631C32.7508 28.3442 32.9783 29.1514 33.4467 29.6309C33.9201 30.114 34.7276 30.3495 35.9147 30.3495H42.4728V32.6619H35.1356V31.4496L32.3122 32.1001C32.3122 33.2833 32.5454 34.0912 33.0238 34.5722C33.5377 35.0893 34.3033 35.2389 35.0063 35.2758C35.3723 35.295 35.7384 35.2865 36.1045 35.2865H42.0896C43.2689 35.2865 44.0728 35.0538 44.5455 34.575C45.0154 34.0983 45.2436 33.2883 45.2436 32.1001V31.1482C45.24 30.8637 45.2428 30.4126 45.2322 30.4154ZM13.995 23.0007H6.1852C4.99031 23.0007 4.17784 23.2376 3.70158 23.7242C3.2296 24.208 3 25.0138 3 26.1864V32.1015C3 33.2755 3.2296 34.0813 3.70158 34.5636C4.17784 35.051 4.99031 35.2879 6.1852 35.2879H13.995C15.1729 35.2879 15.9761 35.0559 16.4545 34.5785C16.9279 34.1026 17.1582 33.2918 17.1582 32.1015V26.1864C17.1582 25.0039 16.9279 24.1967 16.4552 23.7171C15.9789 23.2341 15.1743 23.0007 13.995 23.0007ZM14.2289 32.6626H5.95134V25.5926H14.2289V32.6626Z"
                fill="#FB0A33"
              ></path>
              <path
                d="M9.1253 16.6318C9.18359 16.5921 9.23761 16.5474 9.28737 16.4999C9.53473 16.2559 9.66055 15.9026 9.66055 15.4472V14.6513C9.66055 14.0931 9.51057 13.6732 9.21415 13.4001C8.92058 13.1312 8.48271 13 7.87567 13H2V20.4906H7.46481C8.18275 20.4906 8.71373 20.3629 9.08905 20.1019C9.36769 19.9068 9.69964 19.528 9.69964 18.8272V17.9526C9.69964 17.4795 9.56956 17.095 9.31438 16.8084C9.2568 16.7439 9.19425 16.685 9.1253 16.6318ZM3.80549 14.5676H7.45202C7.71502 14.5676 7.78966 14.6145 7.79037 14.6145C7.7925 14.6166 7.82947 14.6655 7.82947 14.8386V15.5245C7.82947 15.6813 7.79677 15.7444 7.78468 15.7558C7.78397 15.7565 7.71787 15.809 7.45202 15.809H3.80549V14.5676ZM7.88775 18.4186C7.88775 18.7421 7.81952 18.8244 7.8117 18.8322C7.78753 18.8591 7.68304 18.9031 7.45202 18.9031H3.80549V17.3511H7.45202C7.73137 17.3511 7.80103 17.4171 7.80814 17.4256C7.81596 17.4341 7.88775 17.5199 7.88775 17.8483V18.4186ZM22.3111 13L18.1968 20.4906H20.0784L20.9577 18.8081H25.2184L26.0969 20.4906H28.1128L23.9275 13H22.3111ZM21.7808 17.2851L23.0909 14.8038L24.4059 17.2851H21.7808ZM39.9566 16.5971L45.4349 13H42.5681L38.7034 15.6402V13H36.8979V20.4906H38.7034V17.7001L42.8752 20.4906H46L39.9566 16.5971ZM36.0385 14.9422C36.0385 14.2172 35.8992 13.7235 35.6127 13.4341C35.3248 13.1419 34.8337 13 34.1101 13H30.2538C29.5309 13 29.0376 13.1426 28.7455 13.4362C28.454 13.7285 28.3126 14.2215 28.3126 14.9422V18.5484C28.3126 19.2698 28.454 19.7621 28.7455 20.0551C29.0383 20.348 29.5309 20.4906 30.2538 20.4906H34.1101C34.833 20.4906 35.3248 20.3488 35.6127 20.0572C35.8992 19.7671 36.0385 19.2734 36.0385 18.5484L34.233 18.1725V18.8911H30.1117V14.5804H34.233V15.277L36.0385 14.9422ZM12.4377 13H10.633V20.4906H17.6488V18.8904H12.4377V13Z"
                fill="white"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              part="icon"
            >
              <g
                fill="#FFF"
                fill-rule="evenodd"
                transform="translate(6 29)"
              >
                <polygon
                  points="29.389 0 18.509 11.259 7.686 0 0 0 0 21.103 6.726 21.103 6.726 8.139 18.509 20.226 30.434 7.993 30.434 12.944 37.188 6.011 37.188 0"
                ></polygon>
                <polygon
                  points="61.284 0 61.284 13.062 49.378 .853 37.571 12.964 37.571 8.2 30.813 15.133 30.813 21.103 38.335 21.103 49.378 9.845 60.308 21.103 68 21.103 68 0"
                ></polygon>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="MW2CR"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="512px"
              height="512px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <path
                id="_x32_"
                fill="#60BA46"
                d="M372.7,351.2H269.9v-28.6l102.8-60.4v39.5l-25.9,15.8c0,0-3.2,1.8-2,4.7c1.2,2.9,3.9,3,3.9,3h24 M493.5,230.1v-40.6l-48.7-29.3h-55V178h17.3c4.8,0,6.2,1.1,6.2,1.1l20.2,11.8c4.8,2.7,4.8,5.3,4.8,5.3v21.3c0,7-4.3,8.8-4.3,8.8 l-44.3,25.5V292L493.5,230.1z M373.1,178v-17.8h-55.2l-48,28.4v19h54.6v-11.9c0,0,0.3-3.5,5.1-5.6l18.9-10.8c0,0,1.4-1.3,4.8-1.2 H373.1z M389.7,351.2h103.3v-26H389.7V351.2z"
              ></path>
              <path
                id="MW"
                fill="#FFFFFF"
                d="M185.5,235.4v115.7H156v-73.6l-52.1,58.7l0,0.2c0,0-2.6,3.1-4.1,3.1s-4.1-3.1-4.1-3.1L43.1,272v79.1 H18.5V235.4h24.6l58.9,69.4l57.8-69.4H185.5z M352.7,235.4l-27.6,73.8l-27.6-73.8h-27.8l-27.6,73.8l-27.6-73.8H187l41.4,110.7 l2.1,5.7l23.3,0v0l2.2-5.7l27.7-74.1l27.7,74.1l2.1,5.7l23.3,0v0l2.2-5.7l41.3-110.7H352.7z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Warcraft-1"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              part="icon"
            >
              <path
                d="M30.7989 23.6568C30.3177 23.2156 29.5997 23.0007 28.6032 23.0007H18.9644V35.2879H21.9257V30.9127H28.6025C29.5997 30.9127 30.3177 30.6985 30.7982 30.2572C31.2844 29.8111 31.5303 29.1237 31.5303 28.2151V25.709C31.5311 24.7939 31.2851 24.1023 30.7989 23.6568ZM28.5484 27.727C28.5484 28.1455 28.4518 28.2569 28.4411 28.2668C28.4041 28.303 28.2378 28.3725 27.866 28.3725H21.9264V25.5189H27.866C28.2378 25.5189 28.4041 25.5891 28.4404 25.6231C28.4518 25.6345 28.5484 25.7459 28.5484 26.1651V27.727ZM45.2322 30.4154C45.181 29.4585 44.95 28.7875 44.5299 28.3697C44.0508 27.893 43.2525 27.6625 42.0889 27.6625H35.5088V25.5926H42.4301V26.8389L45.1142 26.0799V25.4444C45.1142 24.9209 44.8739 24.169 44.3785 23.6959C43.8894 23.2277 43.0883 23 41.929 23H35.9147C34.7262 23 33.9194 23.2341 33.4467 23.7186C32.9783 24.1988 32.7508 25.0046 32.7508 26.1856V27.1631C32.7508 28.3442 32.9783 29.1514 33.4467 29.6309C33.9201 30.114 34.7276 30.3495 35.9147 30.3495H42.4728V32.6619H35.1356V31.4496L32.3122 32.1001C32.3122 33.2833 32.5454 34.0912 33.0238 34.5722C33.5377 35.0893 34.3033 35.2389 35.0063 35.2758C35.3723 35.295 35.7384 35.2865 36.1045 35.2865H42.0896C43.2689 35.2865 44.0728 35.0538 44.5455 34.575C45.0154 34.0983 45.2436 33.2883 45.2436 32.1001V31.1482C45.24 30.8637 45.2428 30.4126 45.2322 30.4154ZM13.995 23.0007H6.1852C4.99031 23.0007 4.17784 23.2376 3.70158 23.7242C3.2296 24.208 3 25.0138 3 26.1864V32.1015C3 33.2755 3.2296 34.0813 3.70158 34.5636C4.17784 35.051 4.99031 35.2879 6.1852 35.2879H13.995C15.1729 35.2879 15.9761 35.0559 16.4545 34.5785C16.9279 34.1026 17.1582 33.2918 17.1582 32.1015V26.1864C17.1582 25.0039 16.9279 24.1967 16.4552 23.7171C15.9789 23.2341 15.1743 23.0007 13.995 23.0007ZM14.2289 32.6626H5.95134V25.5926H14.2289V32.6626Z"
                fill="#FB0A33"
              ></path>
              <path
                d="M9.1253 16.6318C9.18359 16.5921 9.23761 16.5474 9.28737 16.4999C9.53473 16.2559 9.66055 15.9026 9.66055 15.4472V14.6513C9.66055 14.0931 9.51057 13.6732 9.21415 13.4001C8.92058 13.1312 8.48271 13 7.87567 13H2V20.4906H7.46481C8.18275 20.4906 8.71373 20.3629 9.08905 20.1019C9.36769 19.9068 9.69964 19.528 9.69964 18.8272V17.9526C9.69964 17.4795 9.56956 17.095 9.31438 16.8084C9.2568 16.7439 9.19425 16.685 9.1253 16.6318ZM3.80549 14.5676H7.45202C7.71502 14.5676 7.78966 14.6145 7.79037 14.6145C7.7925 14.6166 7.82947 14.6655 7.82947 14.8386V15.5245C7.82947 15.6813 7.79677 15.7444 7.78468 15.7558C7.78397 15.7565 7.71787 15.809 7.45202 15.809H3.80549V14.5676ZM7.88775 18.4186C7.88775 18.7421 7.81952 18.8244 7.8117 18.8322C7.78753 18.8591 7.68304 18.9031 7.45202 18.9031H3.80549V17.3511H7.45202C7.73137 17.3511 7.80103 17.4171 7.80814 17.4256C7.81596 17.4341 7.88775 17.5199 7.88775 17.8483V18.4186ZM22.3111 13L18.1968 20.4906H20.0784L20.9577 18.8081H25.2184L26.0969 20.4906H28.1128L23.9275 13H22.3111ZM21.7808 17.2851L23.0909 14.8038L24.4059 17.2851H21.7808ZM39.9566 16.5971L45.4349 13H42.5681L38.7034 15.6402V13H36.8979V20.4906H38.7034V17.7001L42.8752 20.4906H46L39.9566 16.5971ZM36.0385 14.9422C36.0385 14.2172 35.8992 13.7235 35.6127 13.4341C35.3248 13.1419 34.8337 13 34.1101 13H30.2538C29.5309 13 29.0376 13.1426 28.7455 13.4362C28.454 13.7285 28.3126 14.2215 28.3126 14.9422V18.5484C28.3126 19.2698 28.454 19.7621 28.7455 20.0551C29.0383 20.348 29.5309 20.4906 30.2538 20.4906H34.1101C34.833 20.4906 35.3248 20.3488 35.6127 20.0572C35.8992 19.7671 36.0385 19.2734 36.0385 18.5484L34.233 18.1725V18.8911H30.1117V14.5804H34.233V15.277L36.0385 14.9422ZM12.4377 13H10.633V20.4906H17.6488V18.8904H12.4377V13Z"
                fill="white"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Warcraft-1:text-white font-[600]"
                href="#"
              >
                Warcraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[107px] h-full flex justify-center items-center cursor-pointer gap-1 hover:bg-[#303237] group/Avowed relative"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/Avowed:text-white"
      href="#"
    >
      Avowed
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>

    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/Avowed:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-auto bg-[#1a1c23] hidden group-hover/Avowed:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[8px] flex-col pb-[8px] gap-1"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Overwatch_2"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              part="icon"
            >
              <g clip-path="url(#clip0_4008_76836)">
                <path
                  d="M27.7002 22.0255C27.6456 21.8931 27.6027 21.7808 27.5534 21.6711C26.7365 19.8508 25.918 18.031 25.1022 16.2102C24.8823 15.7191 24.5491 15.3223 24.1205 15.0018C24.005 14.9155 23.8832 14.8376 23.7725 14.7454C23.2793 14.3338 23.2485 13.7176 23.6951 13.2578C23.8673 13.0809 24.0612 12.9203 24.2079 12.7243C24.4225 12.4377 24.645 12.1453 24.7896 11.8216C25.1552 11.0052 24.6095 10.1729 23.7078 10.1216C23.3725 10.1025 23.0499 10.1597 22.7421 10.2858C21.7143 10.7059 20.8402 11.3448 20.1107 12.1787C19.8093 12.5235 19.627 12.9415 19.4427 13.3553C18.1479 16.2685 16.8531 19.1817 15.5584 22.0954C13.6502 26.3903 11.7462 30.6873 9.83104 34.9795C9.50046 35.7201 9.28538 36.4909 9.18684 37.2882C9.0989 37.9976 8.72594 38.4526 8.10399 38.7482C7.4529 39.0582 6.75731 39.1991 6.04795 39.2563C5.41275 39.3077 4.77332 39.3273 4.13601 39.3241C3.75775 39.322 3.37844 39.2616 3.00336 39.2023C2.84549 39.1773 2.68762 39.1053 2.54882 39.0227C2.32154 38.8881 2.20976 38.6285 2.25903 38.4224C2.33214 38.1168 2.53557 37.9366 2.84019 37.9117C3.03462 37.8958 3.23116 37.8953 3.42453 37.8694C4.44169 37.7327 5.26071 37.2395 5.9208 36.466C6.21695 36.1195 6.4564 35.7381 6.645 35.3227C9.52483 28.983 12.4068 22.6443 15.2856 16.3035C16.6248 13.3537 17.9567 10.4002 19.2949 7.4494C19.8485 6.22881 20.6505 5.19894 21.6942 4.35554C22.261 3.89782 22.9079 3.58684 23.5696 3.29759C24.9025 2.71484 26.2693 2.2407 27.7076 1.99541C28.2872 1.89635 28.8715 1.84072 29.4596 1.90323C29.6317 1.92178 29.8066 1.95621 29.9692 2.01449C30.375 2.1607 30.4513 2.67617 30.1085 2.94741C30.0052 3.029 29.8834 3.09628 29.7599 3.14184C29.4903 3.24143 29.2185 3.3405 28.9399 3.4099C27.7315 3.71081 27.1662 4.63261 27.1837 5.80658C27.1911 6.32682 27.3129 6.8248 27.5275 7.3C28.3492 9.11818 29.1719 10.9358 29.9904 12.7551C31.3069 15.6815 32.6202 18.609 33.9345 21.536C33.9684 21.6112 34.0008 21.6865 34.0368 21.7606C34.1459 21.9858 34.3223 22.105 34.5777 22.0976C34.6598 22.0949 34.7424 22.0976 34.8245 22.0976C36.3895 22.0976 37.9544 22.0976 39.5194 22.0976C39.5914 22.0976 39.6635 22.097 39.7355 22.0976C40.0465 22.1013 40.1572 22.1664 40.1848 22.3614C40.2197 22.6109 40.0513 22.8493 39.7922 22.9023C39.4802 22.9664 39.1665 23.0247 38.8529 23.0813C38.347 23.1725 37.84 23.2588 37.3341 23.3494C37.243 23.3658 37.1502 23.3828 37.0649 23.4167C36.8557 23.5009 36.7312 23.654 36.7317 23.8876C36.7317 23.9798 36.7418 24.0725 36.7513 24.1642C36.7794 24.4391 36.6787 24.6648 36.435 24.7814C36.2163 24.8857 35.9757 24.9641 35.7368 25.0012C35.0232 25.1114 34.3229 24.9694 33.6225 24.8524C32.8014 24.7146 31.9818 24.5631 31.1575 24.445C30.073 24.2903 29.0024 24.4105 27.9428 24.6638C26.469 25.0161 25.0524 25.5426 23.6395 26.0809C23.4091 26.1688 23.1775 26.2552 22.9508 26.3527C22.4862 26.5529 22.0274 26.5195 21.5718 26.3304C21.1634 26.1609 20.8158 25.9024 20.5642 25.5405C20.3894 25.2889 20.2532 25.0102 20.1081 24.7385C19.7971 24.1552 19.9216 23.6021 20.2458 23.0723C20.7274 22.2856 21.4616 21.8676 22.3379 21.6668C23.0711 21.4984 23.809 21.5233 24.5481 21.6255C25.5059 21.758 26.4637 21.8915 27.4221 22.0218C27.501 22.0324 27.5831 22.0234 27.6997 22.0234L27.7002 22.0255Z"
                  fill="#00B5AC"
                ></path>
                <path
                  d="M31.8563 26.7632C33.2787 26.8252 34.5104 27.3322 35.5986 28.2169C36.2502 28.7466 36.8128 29.3628 37.27 30.0642C37.7865 30.8562 38.2617 31.6752 38.765 32.4762C39.1586 33.1029 39.5618 33.7238 39.9734 34.3389C40.2372 34.7336 40.5668 35.0737 40.9201 35.3921C41.2608 35.6988 41.5442 36.0506 41.6321 36.5194C41.6528 36.6296 41.6671 36.7435 41.6639 36.8553C41.6485 37.3363 41.3413 37.5811 40.8629 37.5022C40.812 37.4937 40.7622 37.481 40.7114 37.4741C40.4698 37.4423 40.3215 37.5075 40.2584 37.7379C40.206 37.9313 40.1869 38.1448 40.2076 38.344C40.2452 38.6963 40.3702 39.0332 40.6128 39.2954C41.2841 40.0191 41.9484 40.7512 42.6583 41.4357C43.3952 42.1461 44.2677 42.678 45.1678 43.1633C45.3569 43.265 45.5418 43.3805 45.7114 43.5124C45.9513 43.6999 46.1182 43.9458 46.204 44.2424C46.3476 44.7378 46.1304 45.1515 45.6367 45.3073C45.3368 45.4016 45.0301 45.4037 44.7202 45.3571C43.9981 45.2474 43.338 44.965 42.6948 44.6371C40.8136 43.6766 39.0288 42.5572 37.2949 41.3536C36.5516 40.8376 35.7951 40.3396 34.974 39.9508C34.3457 39.6536 33.6882 39.4618 32.9974 39.3834C32.8951 39.3717 32.7934 39.3574 32.6912 39.3426C31.8918 39.2266 31.415 38.5633 31.5569 37.766C31.6899 37.0185 32.2425 36.485 33.0096 36.3663C33.1622 36.3425 33.3174 36.3345 33.4684 36.3044C33.737 36.2503 33.8567 36.0861 33.8143 35.8154C33.7936 35.6856 33.7428 35.5584 33.6893 35.4371C32.6308 33.0388 31.5686 30.6422 30.5117 28.2434C30.4169 28.0277 30.3327 27.8042 30.2754 27.5769C30.1854 27.2188 30.2643 27.071 30.6171 26.9883C31.0256 26.893 31.4436 26.8384 31.8579 26.7658L31.8563 26.7632Z"
                  fill="#00B5AC"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_4008_76836">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Overwatch_2:text-white font-[600]"
                href="#"
              >
                Avowed
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >First-person Fantasy RPG
                <span
                  class="bg-red-700 rounded-[5px] text-white font-bold pr-1 pl-1 ml-[15px] text-[12px] h-fit"
                  >NEW</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[88px] h-full flex justify-center items-center cursor-pointer gap-1 hover:bg-[#303237] group/More relative"
  >
    <a
      class="text-[#bebbbb] text-[15px] font-bold group-hover/More:text-white"
      href="#"
    >
      More
    </a>
    <svg
      class="fill-[#bebbbb] meka-menu-drop-down-label__icon"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      slot="icon"
    >
      <path
        d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
      ></path>
    </svg>

    <div
      class="w-[280px] h-auto absolute top-[100%] hidden group-hover/More:flex left-0 pt-[8px]"
    >
      <div
        class="w-[280px] h-[315px] bg-[#1a1c23] hidden group-hover/More:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col pb-[10px] gap-1"
      >
        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Blizzard_Arcade_Collection"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="44.5px"
              height="44.5px"
              viewBox="0 0 44.5 44.5"
              enable-background="new 0 0 44.5 44.5"
              xml:space="preserve"
              part="icon"
            >
              <path
                fill="#00AEFF"
                d="M39.9,29.5h-9.6v1.6h9.6c1.3,0,2.3-1,2.3-2.3v-1.6C42.2,28.5,41.2,29.5,39.9,29.5z M28,41.4l-11.5,0
          c-1.3,0-2.3-1-2.3-2.3v1.6c0,1.3,1,2.3,2.3,2.3H28c1.3,0,2.3-1,2.3-2.3v-1.6C30.3,40.4,29.3,41.4,28,41.4z M14.2,29.5H4.6
          c-1.3,0-2.3-1-2.3-2.3v1.6c0,1.3,1,2.3,2.3,2.3h9.6V29.5z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M39.9,13.4l-9.6,0l0-9.6c0-1.3-1-2.3-2.3-2.3l-11.5,0c-1.3,0-2.3,1-2.3,2.3l0,9.6l-9.6,0
          c-1.3,0-2.3,1-2.3,2.3l0,11.5c0,1.3,1,2.3,2.3,2.3l9.6,0l0,9.6c0,1.3,1,2.3,2.3,2.3l11.5,0c1.3,0,2.3-1,2.3-2.3l0-9.6l9.6,0
          c1.3,0,2.3-1,2.3-2.3l0-11.5C42.2,14.4,41.2,13.4,39.9,13.4z"
              ></path>
              <g>
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="22.4046"
                  y1="4.8548"
                  x2="22.4046"
                  y2="37.5721"
                >
                  <stop offset="0" style="stop-color: #0d88cd"></stop>
                  <stop offset="1" style="stop-color: #004362"></stop>
                </linearGradient>
                <path
                  fill="url(#SVGID_1_)"
                  d="M25.6,25.6c0,0.2,0.1,0.5,0.1,0.8c0,0.1,0,0.2,0,0.2c-0.1,0.3-0.2,0.7-0.2,0.7c0,0-0.3,0.4-0.4,0.7
            c-0.1,0.4-0.2,1-0.2,1l0,0l0,0c0,0-0.6,0.3-0.9,0.5c-0.3,0.2-0.6,0.4-0.7,0.6l0,0l0,0c0,0-0.7,0.1-0.9,0.2c0,0,0,0,0,0
            c0,0.1-0.1,0.1-0.1,0.1c-0.2,0-0.2-0.2-0.3-0.2c0,0-0.1,0-0.2,0.1c-0.1,0.1-0.3,0.2-0.5,0.2c-0.3,0-0.8-0.1-0.9-0.1
            c0,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.5,0c0,0,0,0-0.1,0l0,0.1l-0.1,0c-0.1-0.1-0.1-0.1-0.2-0.1l-0.1-0.1l0.1,0c0,0,0.3-0.1,0.4-0.2l0,0
            c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.3c0.1-0.3,0.1-0.6,0.2-0.8c0-0.8,0.1-1.3,0.1-1.7c0-0.2,0-0.4,0-0.7
            c0-0.1-0.1-0.9-0.1-1.4c0-0.9,0.1-1.8,0.1-2.4c0-0.1,0-0.2,0-0.3l0-0.1l0.1,0c0.1,0,0.2-0.1,0.2-0.1l0-0.7L20,21.2l0-1
            c0-0.2,0.1-0.3,0.1-0.3c0,0,0-0.1,0-0.2c0-0.1,0-0.3,0-0.3L20,19v-3.6l0,0c0.1-0.1,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.2
            c0-0.1,0-0.2,0-0.2l0,0c0,0,0,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0h0c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0
            c0,0-0.1-0.1-0.1-0.1l-0.5-0.5c-0.1-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2c0,0,0,0,0.1-0.2l0,0
            H20c0.1-0.1,0.3-0.1,0.6-0.1c0.3,0,0.5-0.1,0.6-0.1l0.8,0c0.8,0,1-0.1,1.4-0.1c0.2,0,0.4,0,0.6,0.1l0,0l0,0
            c0.1,0.2,0.3,0.3,0.4,0.4c0,0,0,0,0.1,0c0.1,0,0.2,0,0.4,0.1c0.5,0.3,0.7,1.1,0.7,1.5c0,0.4,0.1,0.8,0.1,1.1c0,0.2,0,0.3-0.1,0.4
            l-0.5,1c-0.2,0.4-0.7,0.9-0.8,1.1c0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.3,0.1,0.5,0.1c0.1,0,0.2,0.1,0.2,0.2c0,0.2-0.1,0.4-0.2,0.4
            c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l0-0.1l0,0c0.2,0.2,0.2,0.3,0.3,0.3c0,0,0,0,0.1,0.1l0,0l0,0
            c0,0-0.1,0.5-0.1,1c0,0.2,0,0.5,0.1,0.7c0,0.1,0.3,0.2,0.3,0.4c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1
            c0,0.4,0.1,0.9,0.1,1.3C25.9,24.9,25.8,25.2,25.6,25.6C25.6,25.5,25.6,25.5,25.6,25.6z M23.7,15.7C23.7,15.7,23.7,15.7,23.7,15.7
            l0.2-0.2c-0.2-0.1-0.4,0.1-0.6-0.3l-0.1,0l-0.6,0.1l0-0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2v2.7
            c0.1,0,0.1,0,0.1,0h0c0.1,0,0.1,0,0.2,0c0.3-0.1,0.2-0.8,1-0.9c0-0.1,0-0.2,0-0.3c0-0.3,0-0.7,0.1-0.9
            C23.8,16.1,23.7,15.9,23.7,15.7z M23.8,25.4c0-0.1,0.1-0.2,0-0.2c0,0,0-0.1-0.1-0.1l-0.1,0l0.1,0c0,0,0.1-0.1,0.1-0.1
            c0-0.2-0.2-0.5-0.2-0.7c0-0.1,0-0.3,0.2-0.3c0-0.3-0.1-0.4-0.1-0.4c-0.1-0.1-0.1-0.1-0.1-0.4c0-0.2,0.1-0.4,0.1-0.6
            c0-0.1,0-0.1,0-0.1l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.3-0.1-0.3l-0.1-0.1l0.1,0c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.2
            c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1-0.2-0.3-0.2-0.3c-0.3-0.1-0.6-0.4-0.6-0.5L22.4,20c0,0.2,0,0.5,0,0.8c0,0.2,0,0.4,0,0.6l0,0
            l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.1,0.6,0.1,0.6l0,0l-0.2,0.7l0,0c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2
            l0,0v2.7l0,0c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.1c0,0,0,0,0,0c0,0.1,0,0.5,0,1.1c0,0,0,0.3,0,0.5c0,0,0,0,0,0c0,0,0,0,0,0
            c0,0.1-0.1,0.2-0.2,0.3c0,0.1-0.1,0.1-0.1,0.2c0.1,0,0.3,0,0.4-0.1l0.3-0.3l0,0c0.2,0,0.5-0.5,0.7-0.7c0.2-0.2,0.1-0.7,0.2-1.2l0,0
            l0,0l0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.3C23.7,25.8,23.8,25.6,23.8,25.4C23.8,25.5,23.8,25.5,23.8,25.4
            C23.8,25.5,23.8,25.5,23.8,25.4z M11,18.8c0-0.4-0.6-0.6-1-0.3l-3.5,2.6c-0.2,0.2-0.2,0.4,0,0.6l3.5,2.6c0.4,0.3,1,0.1,1-0.3V18.8z
             M19.6,9.7h5.3c0.4,0,0.6-0.6,0.3-1l-2.6-3.5c-0.2-0.2-0.4-0.2-0.6,0l-2.6,3.5C19,9.1,19.2,9.7,19.6,9.7z M24.9,33.5h-5.3
            c-0.4,0-0.6,0.6-0.3,1l2.6,3.5c0.2,0.2,0.4,0.2,0.6,0l2.6-3.5C25.4,34.1,25.3,33.5,24.9,33.5z M38.3,21.1l-3.5-2.6
            c-0.4-0.3-1-0.1-1,0.3v5.3c0,0.4,0.6,0.6,1,0.3l3.5-2.6C38.5,21.6,38.5,21.3,38.3,21.1z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Blizzard_Arcade_Collection:text-white font-[600]"
                href="#"
              >
                Blizzard Arcade Collection
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Bundle</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] group/Crash_Bandicoot_4"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100px"
              height="100px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
              part="icon"
            >
              <path
                fill="#D32F2F"
                d="M63.5,21.1c0,0,0.7-12.9-3.8-16.8c0.8,2.4-1.1,4.1-1.1,4.1S59.3-0.5,42.2,0c5.2,2.7,6.6,6,6.6,6
          s-4.7-2.7-9.3-1.2s-5.4,3.7-9,3.4c4.2,2.3,7,0.8,8.8,2.5s4.2,7.6,4.2,7.6s-2.8-1.3-7.9-0.8c2.5,0.5,5.7,4.3,6.2,5.4
          c-2-0.6-6.8-1.2-8,1.2c1.2,0.7,1.3,3,1.2,4.7c-0.1,1.6,1.3,4.7,2.2,4.3L63.5,21.1z"
              ></path>
              <path
                fill="#F96F00"
                d="M86.7,43.2c-0.1-0.5-0.7-3.1-2.5-3.6c-2-0.6-3-0.3-3-0.3l-4.3-11.1L78,25l-3-14.3c0,0-3.5-4.5-5.7-6.1
          c-1.3-0.9-2.4-1.3-3.5-1.3c0,0,0,0,0,0l1.8,17.8l-11.7-0.1c-2.5,0.3-6.7,5.3-7.6,6.1c-0.9,0.8-7.6,3.9-9.4,4.4
          c-1.8,0.5-9,0.2-11.1,0.1c-0.7,0-12.4-1.4-16.6-1.5C4.8,30-0.4,31.3,0,32.6c0.4,1.4,11.4,15.1,18.1,20c6.6,4.8,13-0.5,13.1-0.6
          c-1.2,1.2-2.2,2.6-3,4.1c1.2-1.2,2.2,0.3,3.8-1.8c-2.1,4.8,0.1,10.2,0.1,10.2c1.4-6,6.6-9.8,11-14.2l25.5,10.2L90.2,52V41.4
          C89.4,42.4,88.1,43,86.7,43.2z"
              ></path>
              <path
                fill="#F29C33"
                d="M90.2,41.4c0,0-0.4,4-8.1,10.5s-14.1,4.6-20.7,3.5c-6.5-1.1-19.5-9.8-19.5-9.8c-2.8-2-5.7-0.7-7.4-0.2
          c0.9,0,2.2,0.8,2.9,1.1c-2.7,0.9-4.6,3.7-4.6,3.7l2.9-0.8c-2.3,3.1-1.5,16-0.3,19.7l1.9-3.9c-0.4,3.9,5,24.4,6.5,26.8
          c0,0,1.3-5.4,1.7-4.5c0.3,0.7,2.1,9.8,2.1,9.8s1.3-4.9,1.6-5.1c0.3-0.2,2.3,7.3,2,7.7c2.4-2.6,6.5-10.3,6.4-11.5
          c0.2,0.8,0.7,3.3,0.7,3.9c0.3-0.6,4.2-7.2,5.8-8.3c1.4,0,12.6-1.6,12.7-10.1c0.1-5.8,0.4-8.2,0.8-9.2c0.2-0.4,0.4-0.6,0.5-0.8
          c13.7-1,15.6-19.9,15.6-19.9L90.2,41.4z"
              ></path>
              <path
                fill="#2E0000"
                d="M70.1,64l3.7,3.7L69,76.3l-21.4-2l-0.7-7.2c0,0,0,0,0,0c-0.8-1.7-1.3-3.3-1.8-4.7c-1.2-3.8-1.5-6.3-1.6-7.7
          c0-0.6,0.3-1.2,0.9-1.4l0.4-0.2C44.8,53.1,55.2,62.3,70.1,64z"
              ></path>
              <path
                fill="#C49C9F"
                d="M44.8,55.2L44.8,55.2C44.8,55.3,44.8,55.3,44.8,55.2z"
              ></path>
              <path
                fill="#F99574"
                d="M31.6,48.9c0,0-2,2.8-8.3,1.8S8.8,43.5,4.2,33.3c3.1-0.8,6.5-1.2,9-0.7c2.7,0.5,23.2,8.2,23.2,8.2
          C32.8,40,23.5,41.1,22,41.4c1.4,0.4,5.1,3.4,7.1,5c-1.7,0.5-2.6,0.8-4,1.7C27.1,47.9,29.1,48.8,31.6,48.9z"
              ></path>
              <path
                fill="#E8DDE3"
                d="M68.8,42.8c-0.4,1.3-1.6,3.4-5.1,4.3c-5.7,1.5-9.8,0.2-10.9-0.2c-1.1-0.3-2.6-1.8-3.2-4.8s0.1-13.6,8.3-14.1
          c3.3-0.2,6.1,1.9,7.4,5.1c1.2,2.8,2.4,6.2,3.2,9C68.7,42.3,68.8,42.6,68.8,42.8z M79.3,32.2c-0.8-1.6-3.5-7.5-5.5-7.3
          c-2,0.2-2.7,5.7-2.7,5.7s1,4,1,4.1c0,0,1.7,3.9,1.9,4.1c0.2,0.2,2.1,2.4,2.9,2.6c1.1,0.2,4.5-0.3,4.7-0.6
          C81.9,40.6,80.1,33.8,79.3,32.2z"
              ></path>
              <path
                fill="#2E0000"
                d="M72,13.9l-4.1,10.2l-3.6-3.6c1.1-2.6,4-12.7-0.8-16.6c0.8-0.3,1.5-0.5,2.3-0.5h0c0,0,0,0,0,0l0,0
          C67.9,3.8,72,9.4,72,13.9z"
              ></path>
              <path
                fill="#2E0000"
                d="M65.7,33.7L65.7,33.7c-0.7-0.7-1.5-1-2.2-0.7c-1.5,0.5-1.8,3.4-0.7,6.4c1.1,3.1,3.1,5.1,4.6,4.6
          c0.7-0.2,1.1-1,1.3-2C67.9,39.3,66.9,36.5,65.7,33.7z M76,35.1c-0.7-2.1-2.1-3.5-3-3.1c-0.7,0.2-1,1.3-0.8,2.7c0,0,0.2,0.7,0.2,0.7
          c0.3,0.9,1.5,3.2,1.6,3.4c0.5,0.5,1.1,0.8,1.5,0.6C76.5,39.1,76.7,37.2,76,35.1z"
              ></path>
              <path
                fill="#70101E"
                d="M97.9,29c-1.9-1.4-5.6-0.4-7,2.4c-1.4,2.8-2.6,11.9,2,12.9c4.3-1.4,6.7-6.8,6.9-8.3
          C100.1,34.5,100.3,30.7,97.9,29z"
              ></path>
              <path
                fill="#70101E"
                d="M69.3,26.1c0,0,0.1-3.3-0.4-4.5c-0.6-1.2-2.6-3.8-0.8-6.8c0.4,0.9,1.3,1.1,1.7,1c0.4-0.2,3.8-6.4,5.6-6.2
          c1.8,0.2,5,2.5,5.5,6.3s0.4,9-2.2,10.8c-0.8-0.6-1.7-6.7-2.6-6.8c-1,0.6-4.1,4.4-4.4,4.8C71.2,25.2,69.3,26.1,69.3,26.1z M65,27
          c0,0-0.4-2.2,0-3s0.9-1.8,1.1-4.1c0.2-3.7-2-4.9-2-4.9s-0.2,1.4-1,1.1s-3.2-3.5-3.9-3.9c-0.6-0.4-1.7-1.5-4-1.5S42,14.2,38.3,26.2
          c0.3,0.6,4.9-0.7,5.5-1.8c-0.4,1.3-1.9,5.1,0.1,7c2.3-4,5.4-10.3,10.5-10.1s5.7,3.3,6.1,3.7C60.9,25.4,64.2,26.8,65,27z"
              ></path>
              <path
                fill="#E8DDE3"
                d="M47.6,62.4l1,1.4c-0.3,0.2-1.2,0.8-2.5,1.6c-0.1-0.3-0.2-0.6-0.4-0.9c-0.3-0.8-0.6-1.5-0.8-2.2l0.1,0
          c0,0,1.2-0.5,1.3-0.5C46.9,61.9,47.4,62.1,47.6,62.4z M75.4,64.8c0.9,0.1,2.3,0.1,3.4-0.8c-1,0.1-2.4,0.2-3.1,0.2
          c-2.5,0.1-5.7-0.2-5.7-0.2c-14.9-1.6-25.2-10.9-25.2-10.9s-1.1,3.5,1.8,4.8c0.9,1.3,2.5,2.7,4.4,2.5c1.8,1.5,3.1,2.3,5.5,1.7
          c2.8,1.9,2.8,3,3.2,3.1c0.4,0.1,2.2-0.1,3.3-1.1c1,0.8,3.7,2.2,6.2,1.3c0,0,0.8,0.4,2,0.4c-0.3,1-1.2,7.6-5.9,9
          c-2.8,0.6-5.5-0.3-7.8-1.6c-0.5,1.3-1.4,3.1-2.5,4.7c0.6,0.2,1.2,0.4,1.6,0.4c0.4,1.7,4.3,1.8,6.3,1.5c1.3,1.4,6,0.3,6.7-1
          c1.5,0.1,3.2-2.1,3.6-3.9c0.1,0,0.8-0.7,1.1-1.7c0.4-1.4,0-2.6,0-2.6l1.3-2.1c0.2-0.2,0.3-0.5,0.3-0.8c0.1-0.4,0-0.9-0.2-1.2
          c0,0-0.6-1.3-0.7-1.3C75.3,65,75.4,64.9,75.4,64.8z"
              ></path>
              <path
                fill="#D32F2F"
                d="M57.8,72.7c-0.7,1.9-2.2,4.8-4.1,7.2c-2.6,3.4-8.8,5.1-9.7,5.3c-1,0.2-5.6,0.2-8.2-4.4
          c-1.9-3.4-0.5-9.2,2-10.8c2.5-1.6,9.2-4.8,10.2-5.5c1.3-1,1.2-1.6,2-1.7c1.4-0.2,3.3,1.1,2.6,4.8c-0.3,1.8-3.7,5.4-3.2,5.9
          c0.6,0.5,4.3-3,4.8-5.6c0.2-1.1,1.6-1.3,2.5-1C59,67.8,58.5,70.8,57.8,72.7z"
              ></path>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/Crash_Bandicoot_4:text-white font-[600]"
                href="#"
              >
                Crash Bandicoot 4</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Platformer</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Heroes_of_the_Storm"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #418af2;
                }
                .st1 {
                  fill: #ffffff;
                }
                .st2 {
                  fill: #36aeea;
                }
              </style>
              <g>
                <g>
                  <polygon
                    class="st0"
                    points="422.6,352.8 256,449.6 89.4,352.8 89.4,160.6 256,63.8 422.6,160.6 		"
                  ></polygon>
                  <polygon
                    class="st1"
                    points="256,46 69.5,150.6 69.5,360.6 256,466 442.5,360.6 442.5,150.6 		"
                  ></polygon>
                </g>
                <path
                  class="st2"
                  d="M104.4,239.6c12.1-99.7,98.9-126.7,98.9-126.7c-116,123.9,22.8,212.1,22.8,212.1l-94,20.6
            C132.8,345.7,99.4,305.8,104.4,239.6z"
                ></path>
                <path
                  class="st2"
                  d="M315.8,397.7c-99.7,36.3-158-27.1-158-27.1c163,41.3,174.4-123.9,174.4-123.9l62.6,71.9
            C394.8,318.6,377,369.9,315.8,397.7z"
                ></path>
                <path
                  class="st2"
                  d="M404.8,284.5c-49.8-163-190.1-85.4-190.1-85.4l29.9-94.7c0,0,59.8-7.8,113.9,38.4
            C424.7,200.5,404.8,284.5,404.8,284.5z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Heroes_of_the_Storm:text-white font-[600]"
                href="#"
              >
                Heroes of the Storm
              </a>
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >MOBA</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/StarCraft"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h-[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #3390ff;
                }
                .st1 {
                  fill: #cce1ff;
                }
              </style>
              <g>
                <g>
                  <path
                    class="st0"
                    d="M237.6,73.5l-78-30.8h-1.4l-80.8,15c-1.4,0-2.1,1.4-2.1,2.9c0,0.7,0.7,2.1,1.4,2.1
                c9.3,4.3,18.6,8.6,27.9,13.6c15,7.9,42.2,25,47.9,35.1l0,0c2.1,3.6,2.9,7.9,2.9,12.2l0.7,259c0,0,0.7,32.9,77.3,85.1
                c1.4,0.7,5.7,1.4,6.4,0c0,0,0,0,0-0.7V75.7C239,75,239,73.5,237.6,73.5z"
                  ></path>
                  <path
                    class="st0"
                    d="M273.4,73.5l78-30.8h1.4l80.8,15c1.4,0,2.1,1.4,2.1,2.9c0,0.7-0.7,2.1-1.4,2.1c-9.3,4.3-18.6,8.6-27.9,13.6
                c-15,7.9-42.2,25-47.9,35.1l0,0c-2.1,4.3-2.9,8.6-2.9,12.9l-0.7,259c0,0-0.7,32.9-77.3,85.1c-1.4,0.7-5.7,1.4-6.4,0c0,0,0,0,0-0.7
                v-392C272,75,272,73.5,273.4,73.5z"
                  ></path>
                </g>
                <path
                  class="st1"
                  d="M57.3,181h129.5l17.2,15.7c0.7,0.7,0.7,0.7,1.4,0.7l0,0c0.7,0,1.4,0,1.4-0.7l45.8-50.1
              c0.7-0.7,0.7-1.4,0.7-2.9c-0.7-0.7-1.4-1.4-2.1-1.4H83.1c-7.2-0.7-13.6,1.4-19.3,5c-5,4.3-9.3,11.4-9.3,24.3v6.4
              C54.5,178.8,55.9,180.2,57.3,181C57.3,180.2,57.3,180.2,57.3,181L57.3,181L57.3,181z M487.3,144.5H302.7l-1.4,0.7l-33.6,31.5
              c-0.7,0.7-0.7,2.9,0,3.6c0.7,0.7,1.4,0.7,1.4,0.7h148.1l7.9,10.7c0.7,0.7,2.1,1.4,3.6,0.7l60.1-42.9c0.7-0.7,1.4-2.1,0-3.6
              C488.7,144.5,488,144.5,487.3,144.5L487.3,144.5L487.3,144.5z M425.7,341.2c-5,0.7-10,1.4-15,1.4c-43.6-1.4-79.4-35.1-83-78.7
              c-0.7-5.7-0.7-11.4-0.7-17.2c0-14.3,0.7-29.3,3.6-43.6c0-0.7,0-1.4-0.7-2.1c-0.7-0.7-1.4-0.7-2.1-0.7h-65.8c-0.7,0-2.1,0.7-2.1,1.4
              c-5.7,16.5-8.6,34.3-8.6,52.2c0,14.3,2.1,21.5,7.2,38.6c12.9,39.3,60.1,77.3,98,77.3c57.2,0,71.5-20,72.2-26.5
              C428.6,341.9,427.9,341.2,425.7,341.2L425.7,341.2L425.7,341.2L425.7,341.2z M148.2,202.4l-2.1-0.7H71.7c-1.4,0-2.1,1.4-2.1,2.1
              c0,0.7,0,1.4,0.7,1.4c0,0,100.9,116.6,103,119.5c0,0,0,0.7,0.7,0.7l-0.7,0.7h-59.4c-8.6,0-17.2-2.9-24.3-7.9c-2.9-2.1-5-5-7.2-7.9
              c-0.7-0.7-0.7-0.7-1.4-0.7c-0.7,0-1.4,0-2.1,0.7L23,361.9c-0.7,0.7-0.7,2.9,0,3.6c0.7,0.7,0.7,0.7,1.4,0.7h208.2
              c12.2,0,20-12.9,20.7-25c0-5-1.4-10-4.3-13.6C239.8,318.3,148.2,202.4,148.2,202.4z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/StarCraft:text-white font-[600]"
                href="#"
              >
                StarCraft</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>

        <div
          class="w-full h-[56px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/StarCraft_II"
        >
          <div
            class="w-full h-[56px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] gap-2"
          >
            <svg
              class="w-[32px] h[32px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              part="icon"
            >
              <style type="text/css">
                .st0 {
                  fill: #3390ff;
                }
                .st1 {
                  fill: #cce1ff;
                }
              </style>
              <g>
                <g>
                  <path
                    class="st0"
                    d="M237.6,73.5l-78-30.8h-1.4l-80.8,15c-1.4,0-2.1,1.4-2.1,2.9c0,0.7,0.7,2.1,1.4,2.1
                c9.3,4.3,18.6,8.6,27.9,13.6c15,7.9,42.2,25,47.9,35.1l0,0c2.1,3.6,2.9,7.9,2.9,12.2l0.7,259c0,0,0.7,32.9,77.3,85.1
                c1.4,0.7,5.7,1.4,6.4,0c0,0,0,0,0-0.7V75.7C239,75,239,73.5,237.6,73.5z"
                  ></path>
                  <path
                    class="st0"
                    d="M273.4,73.5l78-30.8h1.4l80.8,15c1.4,0,2.1,1.4,2.1,2.9c0,0.7-0.7,2.1-1.4,2.1c-9.3,4.3-18.6,8.6-27.9,13.6
                c-15,7.9-42.2,25-47.9,35.1l0,0c-2.1,4.3-2.9,8.6-2.9,12.9l-0.7,259c0,0-0.7,32.9-77.3,85.1c-1.4,0.7-5.7,1.4-6.4,0c0,0,0,0,0-0.7
                v-392C272,75,272,73.5,273.4,73.5z"
                  ></path>
                </g>
                <path
                  class="st1"
                  d="M57.3,181h129.5l17.2,15.7c0.7,0.7,0.7,0.7,1.4,0.7l0,0c0.7,0,1.4,0,1.4-0.7l45.8-50.1
              c0.7-0.7,0.7-1.4,0.7-2.9c-0.7-0.7-1.4-1.4-2.1-1.4H83.1c-7.2-0.7-13.6,1.4-19.3,5c-5,4.3-9.3,11.4-9.3,24.3v6.4
              C54.5,178.8,55.9,180.2,57.3,181C57.3,180.2,57.3,180.2,57.3,181L57.3,181L57.3,181z M487.3,144.5H302.7l-1.4,0.7l-33.6,31.5
              c-0.7,0.7-0.7,2.9,0,3.6c0.7,0.7,1.4,0.7,1.4,0.7h148.1l7.9,10.7c0.7,0.7,2.1,1.4,3.6,0.7l60.1-42.9c0.7-0.7,1.4-2.1,0-3.6
              C488.7,144.5,488,144.5,487.3,144.5L487.3,144.5L487.3,144.5z M425.7,341.2c-5,0.7-10,1.4-15,1.4c-43.6-1.4-79.4-35.1-83-78.7
              c-0.7-5.7-0.7-11.4-0.7-17.2c0-14.3,0.7-29.3,3.6-43.6c0-0.7,0-1.4-0.7-2.1c-0.7-0.7-1.4-0.7-2.1-0.7h-65.8c-0.7,0-2.1,0.7-2.1,1.4
              c-5.7,16.5-8.6,34.3-8.6,52.2c0,14.3,2.1,21.5,7.2,38.6c12.9,39.3,60.1,77.3,98,77.3c57.2,0,71.5-20,72.2-26.5
              C428.6,341.9,427.9,341.2,425.7,341.2L425.7,341.2L425.7,341.2L425.7,341.2z M148.2,202.4l-2.1-0.7H71.7c-1.4,0-2.1,1.4-2.1,2.1
              c0,0.7,0,1.4,0.7,1.4c0,0,100.9,116.6,103,119.5c0,0,0,0.7,0.7,0.7l-0.7,0.7h-59.4c-8.6,0-17.2-2.9-24.3-7.9c-2.9-2.1-5-5-7.2-7.9
              c-0.7-0.7-0.7-0.7-1.4-0.7c-0.7,0-1.4,0-2.1,0.7L23,361.9c-0.7,0.7-0.7,2.9,0,3.6c0.7,0.7,0.7,0.7,1.4,0.7h208.2
              c12.2,0,20-12.9,20.7-25c0-5-1.4-10-4.3-13.6C239.8,318.3,148.2,202.4,148.2,202.4z"
                ></path>
              </g>
            </svg>
            <div class="w-auto h-auto flex flex-col">
              <a
                class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/StarCraft_II:text-white font-[600]"
                href="#"
              >
                StarCraft II</a
              >
              <span class="text-[13px] text-[#ffffff7a] font-[400]"
                >Real-time Strategy</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---------------------------------------------------------------------------->
  <div
    class="w-[188px] h-full flex justify-center items-center gap-1 cursor-pointer 2xl:flex ol:hidden"
  >
    <a class="text-[#6cdb00] text-[15px] font-bold" href="#">
      Battle.net Game Deals
    </a>
  </div>
</div>
<!---------------------------------------------------------------------------->
  <div id="search_s"
    class= "2xl:w-[24%] ol:w-[5%] h-[56px] bg-[#23252b] rounded-[4px] flex flex-row xl:justify-start ol:justify-center items-center gap-2 pl-[18px] hover:bg-[#303237] group/Search__Shop pr-[10px]"
  >
    <p class="cursor-pointer">
      <svg
      class="fill-[#ffffff] w-[24px] h-[24px]"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-labelledby="blz-icon-title-bn-search-filled"
      viewBox="0 0 24 24"
      part="icon"
    >
      <title id="blz-icon-title-bn-search-filled">Search</title>
      <path
        d="M14.05 15.463a7.5 7.5 0 1 1 1.414-1.414l5.243 5.244a1 1 0 0 1-1.414 1.414l-5.244-5.244ZM15 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
      ></path>
    </svg>
    </p>
    <input
      class="w-full h-full text-[#9e9fa1] text-[15px] font-bold hover:text-white group-hover/Search__Shop:text-white 2xl:flex ol:hidden focus:border-none outline-0 "
      type="text"
      placeholder="Search Shop"
    />
    <p class="cursor-pointer">
      <svg id="svg_s"
        class="w-[35px] h-[35px] fill-white hidden"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8L8 16M8.00001 8L16 16"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </p>
  </div>
<!---------------------------------------------------------------------------->
<div
  class="2xl:w-[12%] ol:w-[20%] h-[56px] bg-[#23252b] rounded-[4px] flex flex-row justify-center items-center gap-1 hover:bg-[#303237] hover:text-white relative group/header2"
>
  <a
    class="text-[#ffffffb8] text-[15px] font-bold group-hover/header2:text-white"
    href="#"
    >Battle.net Balance
  </a>
  <svg
    class="meka-menu-drop-down-label__icon fill-[#ffffffb8]"
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    slot="icon"
  >
    <path
      d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
    ></path>
  </svg>
  <div
    class="w-[280px] h-auto absolute top-[100%] hidden group-hover/header2:flex right-0 pt-[8px]"
  >
    <div
      class="w-[280px] h-auto bg-[#1a1c23] hidden group-hover/header2:flex border-[1px] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col pb-[10px]"
    >
      <div
        class="w-full h-[50px] flex justify-center items-center pr-[8px] pl-[8px] group/Add_Balance"
      >
        <div
          class="w-full h-[48px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] cursor-pointer"
        >
          <a
            class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Add_Balance:text-white"
            href="#"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-plus-circle-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-plus-circle-outlined">
                Plus Circle
              </title>
              <path
                d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              ></path>
              <path
                d="M11.5 7a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5z"
              ></path>
            </svg>
            Add Balance</a
          >
        </div>
      </div>
      <div
        class="w-full h-[50px] flex justify-center items-center pr-[8px] pl-[8px] group/Gift_Balance"
      >
        <div
          class="w-full h-[48px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] cursor-pointer"
        >
          <a
            class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/Gift_Balance:text-white"
            href="#"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-gift-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-gift-outlined">Gift</title>
              <path
                d="M16.066 7.245a2.75 2.75 0 0 0 1.006-3.756c-.325-.563-.803-1.1-1.489-1.34-.711-.247-1.485-.119-2.268.333-.295.17-.528.432-.708.688-.186.265-.35.574-.49.895a9 9 0 0 0-.535 1.715 9 9 0 0 0-1.557-1.494 5 5 0 0 0-.87-.53c-.285-.132-.618-.242-.958-.242-.904 0-1.638.276-2.13.846-.475.55-.62 1.254-.62 1.904 0 .659.23 1.263.616 1.736H5a2 2 0 0 0-2 2v3.53a.5.5 0 0 0 .5.5H4V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.97h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-4.242zm-.293-3.006a1.25 1.25 0 0 1-.457 1.707l-2.383 1.376a4.3 4.3 0 0 1 .062-.933 7.5 7.5 0 0 1 .498-1.725 3.7 3.7 0 0 1 .342-.632c.118-.168.2-.234.23-.25.517-.299.833-.283 1.025-.216.217.076.456.28.683.673M6.947 6.264c0-.454.104-.75.255-.924.132-.153.398-.326.995-.326.034 0 .139.016.325.102.177.083.386.21.612.377.453.334.923.79 1.293 1.244.253.311.422.578.52.777h-2.75c-.69 0-1.25-.56-1.25-1.25M18 19h-5v-4.899h5zm1-6.97h-6V10h6zm-8 0H5V10h6zM11 19H6v-4.899h5z"
              ></path>
            </svg>
            Gift Balance</a
          >
        </div>
      </div>
      <div
        class="w-full h-[50px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Balance__History"
      >
        <div
          class="w-full h-[48px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] cursor-pointer"
        >
          <a
            class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Balance__History:text-white"
            href="#"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-history-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-history-outlined">
                History
              </title>
              <path
                d="M5.001 12a7 7 0 1 1 2.725 5.544.53.53 0 0 0-.695.032l-.713.713a.48.48 0 0 0 .027.712A9 9 0 1 0 3.001 12H1.208a.5.5 0 0 0-.354.854l2.793 2.792a.5.5 0 0 0 .707 0l2.793-2.792A.5.5 0 0 0 6.794 12H5Z"
              ></path>
              <path
                d="M12.001 7a1 1 0 0 0-1 1v4.036a1 1 0 0 0 .5.91l3.465 2a1 1 0 0 0 1-1.732l-2.965-1.712V8a1 1 0 0 0-1-1"
              ></path>
            </svg>
            Balance History
          </a>
        </div>
        <svg
          class="w-[16px] h-[16px] fill-[#cacbce]"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-labelledby="blz-icon-title-bn-external-link-filled"
          viewBox="0 0 24 24"
          part="icon"
        >
          <title id="blz-icon-title-bn-external-link-filled">
            External Link
          </title>
          <path
            d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
          ></path>
          <path
            d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"
          ></path>
        </svg>
      </div>
      <div
        class="w-full h-[50px] flex justify-center items-center pr-[8px] pl-[8px] gap-2 group/Balance__Help"
      >
        <div
          class="w-full h-[48px] rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#23252b] cursor-pointer"
        >
          <a
            class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Balance__Help:text-white"
            href="#"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-question-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-question-outlined">
                Question
              </title>
              <path
                d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
              ></path>
              <path
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
              ></path>
            </svg>
            Balance Help</a
          >
        </div>
        <svg
          class="w-[16px] h-[16px] fill-[#cacbce]"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-labelledby="blz-icon-title-bn-external-link-filled"
          viewBox="0 0 24 24"
          part="icon"
        >
          <title id="blz-icon-title-bn-external-link-filled">
            External Link
          </title>
          <path
            d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
          ></path>
          <path
            d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
</header>
`,G=()=>{let c=document.querySelector("#search_s"),t=document.querySelector("#svg_s");c.addEventListener("click",()=>{t.classList.contains("hidden"),t.classList.remove("hidden"),t.classList.add("block")})},I=`
 <header
        class="w-full h-auto bg-[#15171e] ol:hidden sm:block overflow-x-hidden sticky top-0 z-30"
      >
        <div class="w-full h-[56px] p-[8px] flex justify-between">
          <div
            id="leftOpen"
            class="w-[40px] h-[40px] rounded-[8px] text-white leading-{50px} flex items-center justify-center hover:bg-[#23252b] cursor-pointer"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-labelledby="blz-icon-title-menu"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-menu">Menu</title>
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </div>
          <div class="cursor-pointer">
            <svg
              class="w-[150px] h-[48px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              aria-labelledby="blz-icon-title-battlenet-logo"
              viewBox="0 0 196 32"
              part="icon"
            >
              <title id="blz-icon-title-battlenet-logo">Battle.net</title>
              <path
                fill="#148EFF"
                stroke="none"
                d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
              ></path>
              <path
                stroke="none"
                d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
              ></path>
              <path
                fill="#148EFF"
                stroke="none"
                d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
              ></path>
              <path
                stroke="none"
                d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
              ></path>
            </svg>
          </div>
          <div
            id="rightOpen"
            class="w-[40px] h-[40px] rounded-[8px] text-white leading-{50px} flex items-center justify-center hover:bg-[#23252b] cursor-pointer"
          >
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              aria-labelledby="blz-icon-title-user"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-user">User</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
              ></path>
            </svg>
          </div>
        </div>
        <!------------------------------------------------->
        <div id="search" class="w-full h-[88px] p-[16px]">
          <div
            class="w-[80wv] h-[55px] hover:bg-[#303237] bg-[#23252b] rounded-[4px] flex justify-between items-center pl-[15px] pr-[10px] gap-2  group/Search__s"
          >
            <p class="cursor-pointer">
              <svg 
                class="w-[24px] h-[24px] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-search-filled"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-search-filled">Search</title>
                <path
                  d="M14.05 15.463a7.5 7.5 0 1 1 1.414-1.414l5.243 5.244a1 1 0 0 1-1.414 1.414l-5.244-5.244ZM15 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
                ></path>
              </svg>
            </p>
            <input
              class="w-full h-full text-white text-[14px] font-bold rounded-[4px] focus:border-none outline-0 group-hover/Search__s:text-[#ffffff]"
              type="text"
              placeholder="Search Shop"
            />
            <p class="cursor-pointer">
              <svg id="svg"
                class="w-[35px] h-[35px] fill-white hidden"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L8 16M8.00001 8L16 16"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <!------------------------------------------------->
        <div class="overflow-x-hidden">
          <div
            id="rightMenu"
            class="sm:w-[88%] md:w-[450px] h-screen bg-[#22242c] absolute right-0 top-0 z-40 hidden animate__animated animate__fadeInRightBig animate__faster"
          >
            <div
              class="w-full h-[56px] bg-[#1a1c23] flex justify-center items-center"
            >
              <p class="w-[90%] flex justify-center items-center">
                <svg
                  class="w-[147px] h-[24px] fill-white cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-battlenet-logo"
                  viewBox="0 0 196 32"
                  part="icon"
                >
                  <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                  <path
                    fill="#148EFF"
                    stroke="none"
                    d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                  ></path>
                  <path
                    stroke="none"
                    d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                  ></path>
                  <path
                    fill="#148EFF"
                    stroke="none"
                    d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                  ></path>
                  <path
                    stroke="none"
                    d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                  ></path>
                </svg>
              </p>

              <button class="cursor-pointer" id="rc">
                <svg
                  class="w-[35px] h-[35px] fill-white"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8L8 16M8.00001 8L16 16"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="w-full h-[305px] bg-[#1a1c23]">
              <div class="w-full h-auto">
                <div
                  class="w-full h-auto bg-[#1a1c23] border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col"
                >
                  <div
                    class="w-full h-[80px] flex justify-center items-center pr-[23px] pl-[23px]"
                  >
                    <div
                      class="w-full h-[48px] bg-[#0074e0] hover:bg-[#47a6ff] rounded-[4px] flex justify-center items-center"
                    >
                      <a class="text-white font-bold text-[17px]" href="#"
                        >Log In</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b]"
                    >
                      <a
                        class="text-white text-[16px] flex flex-row gap-3 group-hover/Account__Settings:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Account__Settings:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-account-settings-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title
                            id="blz-icon-title-bn-account-settings-outlined"
                          >
                            Account Settings
                          </title>
                          <path
                            d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"
                          ></path>
                          <path
                            d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"
                          ></path>
                        </svg>
                        Account Settings</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Wish__List"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Wish__List:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Wish__List:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-heart-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-heart-outlined">
                            Heart
                          </title>
                          <path
                            d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"
                          ></path>
                        </svg>
                        Wish List</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Redeem__Code"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Redeem__Code:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Redeem__Code:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-bar-code-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-bar-code-outlined">
                            Bar Code
                          </title>
                          <path
                            d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"
                          ></path>
                        </svg>
                        Redeem Code</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Change__BattleTag"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Change__BattleTag:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Change__BattleTag:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-battletag-change-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title
                            id="blz-icon-title-bn-battletag-change-outlined"
                          >
                            Battletag Change
                          </title>
                          <path
                            d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
                          ></path>
                        </svg>
                        Change BattleTag</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!------------------>
            <div class="w-full h-[382px] bg-[#22242c]">
              <div class="w-full h-auto">
                <div
                  class="w-full border-[#3b3c3c] rounded-[4px] pt-[10px] flex-col"
                >
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Redeem__Code"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#2f3138]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Redeem__Code:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Redeem__Code:fill-[#ffffff]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-question-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-question-outlined">
                            Question
                          </title>
                          <path
                            d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                          ></path>
                          <path
                            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
                          ></path>
                        </svg>
                        Support</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Change__BattleTag"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#2f3138]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Change__BattleTag:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Change__BattleTag:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-phone-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-phone-outlined">
                            Phone
                          </title>
                          <path
                            d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 3v14H8V5z"
                          ></path>
                        </svg>
                        Battle.net Mobile App</a
                      >
                    </div>
                  </div>
                  <div
                    class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Wish__List"
                  >
                    <div
                      class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#2f3138]"
                    >
                      <a
                        class="text-[#ffffff] text-[16px] flex flex-row gap-3 group-hover/Wish__List:text-white"
                        href="#"
                      >
                        <svg
                          class="w-[24px] h-[24px] group-hover/Wish__List:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b8c8f"
                          aria-labelledby="blz-icon-title-bn-pencil-outlined"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-pencil-outlined">
                            Pencil
                          </title>
                          <path
                            d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"
                          ></path>
                        </svg>
                        Create Account</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!------------------------------------------------->
        <div
          id="leftMenu"
          class="sm:w-[88%] md:w-[450px] h-screen bg-[#22242c] absolute left-0 top-0 z-40 hidden animate__animated animate__fadeInLeftBig animate__faster overflow-auto"
        >
          <div
            class="w-full h-[56px] bg-[#1a1c23] flex justify-center items-center"
          >
            <button class="cursor-pointer" id="lc">
              <svg
                class="w-[35px] h-[35px] fill-white"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L8 16M8.00001 8L16 16"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p class="w-[90%] flex justify-center items-center">
              <svg
                class="w-[147px] h-[24px] fill-white cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-battlenet-logo"
                viewBox="0 0 196 32"
                part="icon"
              >
                <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                ></path>
                <path
                  stroke="none"
                  d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                ></path>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                ></path>
                <path
                  stroke="none"
                  d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                ></path>
              </svg>
            </p>
          </div>
          <!------------------>
          <div class="w-full h-auto bg-[#1a1c23] overflow-auto">
            <div class="w-full h-auto">
              <div
                class="w-full h-auto bg-[#1a1c23] border-[#3b3c3c] rounded-[4px] flex-col pb-[20px]"
              >
                <!--------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings relative"
                >
                  <div
                    id="menu1"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      Warcraft
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm1" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings relative"
                >
                  <div
                    id="menu2"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      Diablo
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm2" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!---------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings relative"
                >
                  <div
                    id="menu3"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      Overwatch
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm3" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!----------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings"
                >
                  <div
                    id="menu4"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      Call of Duty
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm4" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!----------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings"
                >
                  <div
                    id="menu5"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      DOOM
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm5" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!----------------------------------------------------->
                <div
                  class="w-full h-[50px] flex justify-center items-center pr-[10px] pl-[10px] group/Account__Settings"
                >
                  <div
                    id="menu6"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#23252b] cursor-pointer"
                  >
                    <p
                      class="text-white text-[16px] flex flex-row gap-2 group-hover/Account__Settings:text-white "
                    >
                      More
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-------------->
                <div id="mm6" class="hidden w-full h-auto absolute px-[10px]">
                  <div class="w-full h-auto flex justify-center items-cente">
                    <div class="w-full h-auto bg-[#111218]">
                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #2b374c;
                              }
                              .st1 {
                                fill: #f4bf2a;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="255.7"
                                cy="256.5"
                                r="168"
                              ></circle>
                              <path
                                class="st1"
                                d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
                    c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
                    c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
                    c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
                              ></path>
                              <path
                                class="st1"
                                d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
                    c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
                    c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
                    h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
                              ></path>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              World of Warcraft
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            part="icon"
                          >
                            <g clip-path="url(#clip0_1641_233)">
                              <path
                                d="M24.2371 36.8922C33.5719 36.8922 41.1393 29.3249 41.1393 19.9901C41.1393 10.6553 33.5719 3.08789 24.2371 3.08789C14.9023 3.08789 7.33496 10.6553 7.33496 19.9901C7.33496 29.3249 14.9023 36.8922 24.2371 36.8922Z"
                                fill="#010100"
                              ></path>
                              <path
                                d="M39.857 11.0145V6.31297H35.952C32.8047 3.63193 28.7249 2 24.2565 2C19.7881 2 15.6889 3.63193 12.561 6.31297H8.63658V10.9951C7.10179 13.6567 6.22754 16.7068 6.22754 19.9901C6.22754 23.254 7.10179 26.3236 8.63658 28.9658V33.6479H12.5416C15.6889 36.3289 19.7687 37.9608 24.2371 37.9608C28.7055 37.9608 32.7853 36.3289 35.9326 33.6479H39.8376V28.9658C41.353 26.3236 42.2467 23.254 42.2272 19.9901C42.2467 16.7263 41.3724 13.6567 39.857 11.0145ZM24.2565 35.2604C15.8054 35.2604 8.94743 28.4218 8.94743 19.9707C8.94743 11.539 15.8054 4.68103 24.2565 4.68103C32.7076 4.68103 39.5656 11.5196 39.5656 19.9707C39.5462 28.4218 32.7076 35.2604 24.2565 35.2604Z"
                                fill="#A43B00"
                              ></path>
                              <path
                                d="M27.7343 24.8276C27.7148 24.8082 27.676 24.7888 27.6954 24.7111L24.4898 12.1024C23.3436 16.26 22.5276 20.5341 21.2843 24.6722L21.2454 24.5945C21.2454 24.5945 19.1083 14.4726 18.8946 13.2875C18.6809 12.1024 19.3026 10.8202 19.3026 10.8202H13.0469C13.824 11.2088 14.232 12.083 14.5234 12.8213L18.4478 29.704C18.5449 30.4423 17.9815 31.1417 17.4181 31.7634H23.7127C23.4796 31.1611 23.2659 30.5977 23.2659 29.8983L24.6258 23.7397C25.0144 25.5853 25.4029 27.4115 25.7915 29.2572C26.0246 30.0926 25.8692 31.0251 25.5195 31.7634H31.7753C31.445 31.1805 30.9399 30.3451 31.0564 29.4515L33.5043 14.5503C33.8152 12.8407 34.6506 11.9664 35.4665 10.8008C33.446 10.8202 31.5033 10.8396 29.2885 10.8396C30.0656 11.5585 29.6382 12.7241 29.5799 13.5984L27.7343 24.8276Z"
                                fill="#FEAF51"
                              ></path>
                              <path
                                d="M13.7599 44.9803L13.7299 44.7303C13.7299 44.7303 13.7099 44.5503 13.6599 44.4803C13.6099 44.4203 13.5799 44.2903 13.5799 44.2903L13.4499 44.0803C13.4499 44.0803 13.4499 44.3303 13.4099 44.5603C13.3699 44.7903 13.3099 44.8203 13.2799 44.9103C13.2499 44.9903 13.2299 45.0503 13.2299 45.0503L13.1899 45.1303C13.1899 45.1303 13.1599 45.1603 13.1399 45.2003C13.1099 45.2403 13.0999 45.2903 13.0999 45.2903C13.0999 45.2903 13.0699 45.2603 13.0299 45.3203C12.9899 45.3803 12.9799 45.3803 12.9399 45.4003C12.8999 45.4203 12.8599 45.4503 12.8299 45.4503C12.7999 45.4503 12.7299 45.4503 12.6399 45.5103C12.5499 45.5703 12.4599 45.5903 12.4599 45.5903C12.4599 45.5903 12.2599 45.6503 12.1999 45.6603C12.1399 45.6603 12.0899 45.6903 12.0899 45.6903L12.0699 45.7503L12.0299 45.7303L12.0099 45.7003C12.0099 45.7003 11.8399 45.7003 11.7599 45.7003C11.6799 45.7203 11.5999 45.7203 11.5999 45.7203C11.5999 45.7203 11.3799 45.7203 11.3399 45.7203C11.2999 45.7203 11.2099 45.7203 11.1999 45.6903C11.1799 45.6703 11.1799 45.6003 11.1799 45.6003C11.1799 45.6003 11.2199 45.5103 11.2099 45.4603C11.1999 45.4203 11.1799 45.3703 11.1799 45.3703V45.3403L11.1999 45.3103V45.2803L11.1899 45.2003V45.1103L11.1799 45.0503H11.1199L11.0599 45.0803L11.0299 45.0503L10.9599 45.1003C10.9599 45.1003 10.9299 45.1003 10.9199 45.0703C10.8999 45.0303 10.8299 44.9603 10.8799 44.9303C10.9133 44.9103 10.9399 44.9103 10.9599 44.9303C10.9599 44.9303 11.0299 45.0103 11.0599 44.9603C11.0899 44.9203 11.1399 44.9103 11.1399 44.9103L11.1899 44.8403L11.2199 44.8203C11.2199 44.8203 11.2299 44.5003 11.2299 44.4103C11.2299 44.3203 11.1699 44.2603 11.1699 44.1903C11.1699 44.1203 11.1899 43.9203 11.1899 43.7603C11.1899 43.6003 11.1799 43.2303 11.1899 43.1603C11.1999 43.0903 11.2399 43.0803 11.2499 43.0303C11.2599 42.9803 11.2499 42.8303 11.2499 42.7903C11.2499 42.7503 11.2099 42.7303 11.2399 42.6703C11.2699 42.6103 11.2699 42.5303 11.2699 42.5303C11.2699 42.5303 11.2599 42.1803 11.2799 42.0003C11.3099 41.8203 11.3799 41.7603 11.4499 41.6903C11.5199 41.6103 11.5699 41.5803 11.6099 41.5503C11.6499 41.5203 11.7499 41.4803 11.7499 41.4803L11.7699 41.4203L11.7999 41.4403C11.7999 41.4403 11.8599 41.3903 11.8899 41.3703C11.9199 41.3503 12.0199 41.3003 12.0199 41.2603C12.0199 41.2203 12.0599 41.2203 12.0599 41.2203C12.0599 41.2203 11.7699 41.2003 11.6599 41.2203C11.5499 41.2303 11.5299 41.2803 11.4599 41.2503C11.3899 41.2303 11.1499 41.2503 11.1499 41.2503H11.0799L10.9899 41.2203L10.9599 41.2403L10.9299 41.3103L10.8799 41.3603L10.8199 41.4503V41.5403C10.8199 41.5403 10.7799 41.4303 10.7799 41.3903C10.7799 41.3503 10.7699 41.2903 10.7699 41.2903L10.7299 41.2603C10.7299 41.2603 10.6299 41.2703 10.5399 41.2603C10.4499 41.2403 10.3699 41.2803 10.3699 41.2803L10.2799 41.3503H10.1699L10.1299 41.2703C10.1299 41.2703 10.0699 41.2703 10.0199 41.2703H9.81992L9.72992 41.2503H9.56992C9.56992 41.2503 9.56992 41.2703 9.46992 41.2503C9.36992 41.2303 9.27992 41.2503 9.27992 41.2503C9.27992 41.2503 9.36992 41.3103 9.39992 41.3503L9.43992 41.3903C9.43992 41.3903 9.45992 41.4203 9.50992 41.4503C9.55992 41.4903 9.62992 41.5803 9.62992 41.5803L9.68992 41.6403C9.68992 41.6403 9.76992 41.6703 9.79992 41.7403C9.82992 41.8203 9.84992 41.8803 9.87992 42.0103C9.90992 42.1403 9.91992 42.2703 9.91992 42.2703L9.95992 42.3503L9.93992 42.4303C9.93992 42.4303 9.93992 42.4703 9.93992 42.6003C9.93992 42.7303 9.98992 42.8703 9.98992 42.8703V43.2503C9.98992 43.3703 9.98992 43.5503 9.98992 43.5503V43.7403C9.98992 43.7403 10.0299 44.0503 10.0099 44.1403C9.98992 44.2303 10.0099 44.3303 10.0099 44.3303C10.0099 44.3303 10.0399 44.4303 10.0099 44.5003C10.0099 44.5003 10.0099 44.8903 9.98992 44.9903C9.98992 45.0903 9.98992 45.3803 9.95992 45.4803C9.92992 45.5803 9.84992 45.7503 9.81992 45.8003C9.78992 45.8503 9.61992 46.0703 9.61992 46.0703C9.61992 46.0703 9.50992 46.1203 9.40992 46.1903C9.29992 46.2503 9.21992 46.3103 9.21992 46.3103L9.08992 46.3903C9.08992 46.3903 9.08992 46.4203 9.15992 46.4203C9.22992 46.4203 9.33992 46.4303 9.40992 46.4303C9.47992 46.4303 9.62992 46.3903 9.62992 46.3903L9.70992 46.3403C9.70992 46.3403 9.87992 46.2903 9.91992 46.3003C9.95992 46.3103 10.0299 46.3103 10.0299 46.3103L10.3799 46.3503C10.3799 46.3503 10.9499 46.3903 10.9999 46.3603C11.0499 46.3303 11.1999 46.3603 11.1999 46.3603C11.1999 46.3603 11.2599 46.3103 11.2899 46.3203C11.3199 46.3203 11.3699 46.3403 11.3999 46.3303C11.4299 46.3303 11.5599 46.4103 11.5599 46.3703C11.5599 46.3303 11.5399 46.2403 11.6499 46.2503L11.7299 46.2103L11.7699 46.2503L11.7199 46.2903L11.7699 46.3403C11.7699 46.3403 11.8999 46.3103 11.9599 46.3103C12.0199 46.3103 12.2699 46.3503 12.3299 46.3403C12.3899 46.3203 12.5899 46.3703 12.5899 46.3703C12.5899 46.3703 12.6499 46.3103 12.6799 46.3203C12.7099 46.3203 13.0299 46.3203 13.0299 46.3203C13.0299 46.3203 13.1799 46.3103 13.2499 46.3103C13.3199 46.3103 13.4399 46.4103 13.4899 46.4803C13.4899 46.4803 13.5899 46.2503 13.6499 46.0903C13.7199 45.9303 13.7499 45.6603 13.7699 45.5603C13.7899 45.4603 13.8199 45.3303 13.8199 45.3303C13.8199 45.3303 13.8499 45.3203 13.8399 45.1903C13.8399 45.0603 13.8399 44.9303 13.8399 44.9303L13.7599 44.9803ZM21.3399 46.0403C21.3399 46.0403 21.2799 45.9603 21.1399 45.8503C20.9999 45.7403 20.9699 45.6603 20.9699 45.6603L20.9099 45.5303L20.8899 45.4203L20.8299 45.3603L20.7999 45.2703L20.7499 45.2303L20.6999 45.0903C20.6999 45.0903 20.5999 44.7203 20.5199 44.5703C20.4399 44.4103 20.3499 44.1903 20.3499 44.1903C20.3499 44.1903 20.2599 43.9803 20.2399 43.9103C20.2199 43.8403 20.1799 43.7703 20.1799 43.7703L20.1199 43.7003L20.0599 43.7203H19.9699L19.9899 43.6003L20.0599 43.5103V43.3803L19.9999 43.2803C19.9999 43.2803 19.8399 43.0803 19.8199 42.9803C19.7899 42.8803 19.6999 42.6903 19.6999 42.6903L19.6399 42.5003C19.6399 42.5003 19.5299 42.1603 19.5199 42.1203C19.5199 42.0903 19.4099 41.8103 19.3699 41.7603L19.3099 41.5703C19.3099 41.5703 19.3099 41.4103 19.2499 41.3903C19.1899 41.3703 19.1499 41.3503 19.1499 41.3503L19.1099 41.2503C19.1099 41.2503 18.9799 41.0103 18.9599 40.9403C18.9599 40.9403 18.7399 41.1803 18.6999 41.2303C18.6599 41.2703 18.5399 41.3703 18.5399 41.3703C18.5399 41.3703 18.3599 41.4503 18.2899 41.5103C18.2299 41.5803 18.1499 41.6303 18.1499 41.6303C18.1499 41.6303 17.8699 41.7903 17.8199 41.8303C17.7599 41.8703 17.7299 41.9103 17.7299 41.9103L17.6599 42.0003H17.5899C17.5899 42.0003 17.4099 42.1303 17.3599 42.1903C17.3099 42.2503 17.1899 42.3303 17.1699 42.4303C17.1699 42.4303 17.3899 42.3303 17.4499 42.3203C17.5099 42.3103 17.6199 42.2903 17.6199 42.2903L17.6999 42.2503L17.8799 42.2303C17.8799 42.2303 17.9399 42.1903 18.0099 42.2303C18.0799 42.2703 18.1099 42.2503 18.1799 42.2603C18.2399 42.2703 18.3099 42.3203 18.3099 42.3203L18.3499 42.3603C18.3499 42.3603 18.3899 42.3703 18.4199 42.4203C18.4599 42.4603 18.4799 42.5403 18.4799 42.5403C18.4799 42.5403 18.4399 42.6203 18.4099 42.6503C18.3699 42.6803 18.3299 42.7503 18.3299 42.7503L18.2699 42.8103C18.2699 42.8103 18.2699 42.7803 18.1999 42.8203C18.1199 42.8603 18.0599 42.9203 18.0599 42.9203L18.0199 42.9403C18.0199 42.9403 17.9599 42.9803 17.9299 43.0403C17.9033 43.0803 17.8833 43.1203 17.8699 43.1603C17.8399 43.2303 17.8299 43.2803 17.8299 43.2803C17.8299 43.2803 17.8299 43.2703 17.7699 43.3403C17.7199 43.4103 17.7299 43.4603 17.6799 43.5003L17.6199 43.5303C17.6199 43.5303 17.6199 43.6003 17.5899 43.7003C17.5599 43.8003 17.4999 43.9003 17.4999 43.9003C17.4999 43.9003 17.4299 44.0003 17.4399 44.0403C17.4399 44.0803 17.4399 44.1303 17.4399 44.1303H17.3699C17.3699 44.1303 17.2899 44.3503 17.2799 44.3903V44.4203L17.1199 44.4103C17.1199 44.4103 16.9499 44.4103 16.8199 44.4203C16.6899 44.4303 16.7999 44.4303 16.7999 44.4303L16.6599 44.4603C16.6599 44.4603 16.5899 44.4603 16.4999 44.4903C16.4199 44.5203 16.3099 44.5603 16.3099 44.5603C16.3099 44.5603 16.2899 44.6303 16.4099 44.6703C16.5299 44.7103 16.6899 44.7503 16.6899 44.7503C16.6899 44.7503 16.7599 44.7903 16.8599 44.8103C16.9499 44.8203 16.8899 44.8303 16.8899 44.8303C16.8899 44.8303 16.9499 44.8303 16.9799 44.8603L17.0199 44.8903L16.9399 44.9503L17.1299 44.9703C17.1299 44.9703 16.9599 45.4003 16.9099 45.5203C16.8599 45.6403 16.7599 45.7603 16.7599 45.7603C16.7599 45.7603 16.7599 45.7303 16.6399 45.8603C16.5099 45.9903 16.3299 46.1403 16.2499 46.1803C16.1699 46.2203 16.0999 46.2703 16.0999 46.2703C16.0999 46.2703 16.0099 46.3003 15.9699 46.3803C15.9699 46.3803 16.1499 46.4203 16.2399 46.4403C16.3199 46.4503 16.4399 46.4303 16.4399 46.4303C16.4399 46.4303 16.5499 46.4103 16.6499 46.4103C16.7499 46.4103 16.8899 46.4303 16.8899 46.4303L17.0599 46.4503H17.1899C17.1899 46.4503 17.2499 46.4803 17.4099 46.4803C17.5699 46.4803 17.7799 46.4903 17.7799 46.4903H18.1299L18.2499 46.5003C18.2499 46.5003 18.1399 46.4003 18.0699 46.3603C17.9999 46.3203 17.8999 46.2403 17.8999 46.2403C17.8999 46.2403 17.7799 46.1803 17.7699 46.1203C17.7699 46.0503 17.8099 45.8603 17.8099 45.8603V45.7403C17.8099 45.7403 17.7699 45.6503 17.7899 45.5603C17.8099 45.4703 17.8299 45.3203 17.8299 45.3203L17.8899 44.9803L17.9899 45.0603H18.1499C18.2299 45.0603 18.3499 45.0403 18.4299 45.0603C18.5099 45.0803 18.7799 45.0903 18.9099 45.0903C19.0399 45.0903 19.0799 45.0903 19.1299 45.1003C19.1799 45.1103 19.2099 45.1303 19.2699 45.1303C19.3299 45.1303 19.3499 45.1303 19.4899 45.1203C19.6299 45.1103 19.6599 45.0803 19.6599 45.0803H19.7399C19.7399 45.0803 19.7599 45.1503 19.7599 45.2503C19.7599 45.3503 19.7799 45.4403 19.7799 45.5903V45.8503C19.7799 45.8503 19.8299 45.9103 19.7299 46.0203C19.6299 46.1303 19.5599 46.2503 19.5599 46.2503C19.5599 46.2503 19.4999 46.3203 19.4199 46.3903L19.3599 46.4303C19.3599 46.4303 19.4299 46.4303 19.5199 46.4603C19.5999 46.4903 19.7199 46.4403 19.7199 46.4403C19.7199 46.4403 19.8799 46.4403 19.9699 46.4203C20.0499 46.4003 20.3499 46.4803 20.3899 46.4803C20.4299 46.4803 20.6299 46.4903 20.6299 46.4903C20.6299 46.4903 20.7899 46.4303 20.9199 46.4503C21.0599 46.4603 21.1199 46.4603 21.1199 46.4603C21.1199 46.4603 21.2599 46.4903 21.2999 46.4503C21.3499 46.4103 21.3999 46.4603 21.3999 46.4603L21.4799 46.4803H21.6399C21.6399 46.4803 21.8299 46.4903 21.8899 46.4903H22.0299C22.0299 46.4903 21.7599 46.2603 21.6499 46.1903C21.5399 46.1203 21.3499 46.0303 21.3499 46.0303L21.3399 46.0403ZM19.0599 44.1903C18.9799 44.1903 18.8599 44.2103 18.8599 44.2103H18.6999L18.6399 44.2703L18.5799 44.2903C18.5799 44.2903 18.5999 44.3203 18.5499 44.3303C18.4999 44.3403 18.4599 44.3603 18.4599 44.3603C18.4599 44.3603 18.3799 44.3603 18.3799 44.3203C18.3799 44.2803 18.3199 44.2203 18.3199 44.2203H18.2499L18.2299 44.1403H18.1399C18.1399 44.1403 18.2499 43.8203 18.3399 43.7003C18.4299 43.5803 18.5099 43.3103 18.5099 43.3103C18.5099 43.3103 18.5699 43.1503 18.6199 43.1003C18.6699 43.0403 18.7199 42.9103 18.7199 42.9103C18.7199 42.9103 18.8999 43.1903 18.9399 43.2803C18.9799 43.3703 18.9999 43.4203 18.9999 43.4203C18.9999 43.4203 19.0199 43.5203 19.0599 43.6003C19.0999 43.6803 19.1399 43.8003 19.1399 43.8003L19.2399 43.9903L19.2999 44.1603C19.2999 44.1603 19.1299 44.1903 19.0499 44.1903H19.0599ZM39.3399 41.6603C39.5399 41.5503 39.7299 41.4303 39.9299 41.3103C39.9299 41.2903 39.9299 41.2703 39.9299 41.2403C39.6999 41.2403 39.4699 41.2403 39.2499 41.2403C39.2399 41.2403 39.2299 41.2603 39.2199 41.2603C39.1099 41.2803 38.9999 41.3103 38.8899 41.3103C38.7599 41.3103 38.6299 41.2703 38.4899 41.2803C38.2699 41.2803 38.0499 41.3303 37.8399 41.3403C37.6899 41.3503 37.5399 41.3403 37.3899 41.3403C37.4699 41.4503 37.5599 41.5303 37.6599 41.6003C37.7999 41.6903 37.8499 41.8403 37.8599 42.0303C37.8599 42.2803 37.9699 42.2803 38.0999 42.4603C37.9799 42.6703 37.8799 42.2803 37.8799 42.5603C37.8799 42.6903 37.8599 43.2103 37.8599 43.3403C37.8499 43.7403 37.8299 44.1403 37.8299 44.5403C37.8299 44.8803 37.8699 45.2103 37.8799 45.5503C37.8799 46.0303 37.8099 46.1603 37.4599 46.3503C37.3599 46.4103 37.2599 46.4903 37.1599 46.5503C37.1599 46.5503 37.1699 46.5703 37.1799 46.5703C37.4799 46.5703 37.8099 46.6603 38.0699 46.5403C38.3799 46.4003 38.6599 46.6303 38.9399 46.5403C38.9499 46.5403 39.3799 46.5603 39.3899 46.5603C39.5999 46.5803 39.3099 46.4703 39.5199 46.4803C39.5599 46.4803 39.7099 46.5803 39.7499 46.5803C39.7499 46.5703 39.7699 46.5503 39.7699 46.5303C39.6899 46.4403 39.6199 46.3603 39.5399 46.2703C39.4599 46.1803 39.3699 46.1003 39.2999 46.0003C39.1999 45.8603 39.1199 45.7003 39.1699 45.5003C39.2199 45.3103 39.2299 45.1203 39.2099 44.9103C39.1899 44.5803 39.1899 44.2603 39.1799 43.9303C39.1599 43.5403 39.1299 43.1603 39.1299 42.7703C39.1299 42.4703 39.1999 42.1703 39.2199 41.8703C39.2199 41.7503 39.2599 41.6803 39.3499 41.6403L39.3399 41.6603ZM27.0299 43.8203C26.9099 43.7503 26.8099 43.6203 26.6799 43.5603C26.5599 43.5103 26.4399 43.4703 26.3199 43.4403C26.1999 43.4103 26.0999 43.2603 25.9899 43.2503C25.9899 43.0603 25.8599 43.1403 25.7799 43.1503C25.7799 43.1303 25.7799 43.1003 25.7799 43.0703C25.6399 43.0703 25.5099 42.8703 25.3799 42.7903C25.2399 42.7003 25.0599 42.5703 24.9099 42.5603C24.8899 42.3503 25.1399 41.9703 25.2899 41.9003C25.3799 41.8603 25.5199 41.8303 25.6099 41.8003C25.7499 41.7503 25.8799 41.8103 26.0299 41.8003C26.0299 41.7603 26.1299 41.7103 26.1199 41.7803C26.2599 41.7803 26.4299 41.8303 26.5699 41.8703C26.6399 41.8903 26.6799 41.9403 26.7299 41.9903C26.7999 42.0603 26.8599 42.0603 26.9499 42.1103C27.0899 42.1903 27.1899 42.4303 27.2799 42.5703C27.3499 42.6803 27.4499 42.7803 27.4699 42.9403C27.4499 42.6703 27.4299 42.3803 27.4099 42.1003C27.3999 41.9703 27.3699 41.8503 27.3499 41.7203C27.3199 41.5303 27.3499 41.3203 27.3299 41.1403C27.0799 41.4103 26.6999 41.2903 26.3899 41.3303C26.0299 41.3803 25.6999 41.2603 25.3499 41.3003C25.2699 41.3003 25.2199 41.3703 25.1699 41.3803C25.1099 41.4003 25.0599 41.3603 24.9999 41.3603C24.8499 41.3803 24.6699 41.5003 24.5499 41.6103C24.3099 41.8103 24.1199 41.9603 23.9699 42.2903C23.9099 42.4103 23.8299 42.5403 23.7899 42.6803C23.7499 42.7903 23.7699 42.9903 23.7199 43.1003C23.6999 43.1503 23.6399 43.1803 23.5899 43.2203C23.6799 43.3103 23.8299 43.3303 23.9299 43.3603C24.0199 43.3903 24.1199 43.4703 24.1999 43.4903C24.2599 43.5003 24.3099 43.4803 24.3699 43.4903C24.3499 43.7103 24.6099 43.8203 24.7399 43.9303C24.8299 44.0003 24.9099 44.0303 24.9899 44.0903C25.0699 44.1403 25.1399 44.2603 25.2299 44.2803C25.2299 44.2603 25.2299 44.2503 25.2299 44.2403C25.3299 44.2603 25.3999 44.3403 25.4999 44.3503C25.5999 44.3503 25.7099 44.3403 25.7099 44.5403C25.8699 44.5403 26.0199 44.7303 26.1699 44.8103C26.3099 44.8803 26.4899 45.0903 26.6299 45.1003C26.4999 45.3603 26.3599 45.6103 26.1299 45.7503C25.9499 45.8603 25.8499 45.8503 25.6499 45.8803C25.6199 45.8803 25.5899 45.9303 25.5599 45.9303C25.5299 45.9303 25.4999 45.8803 25.4699 45.9003C25.4099 45.9303 25.3899 45.9403 25.4299 46.0403C25.4099 46.0303 25.3899 46.0403 25.3699 46.0403C25.3899 46.1003 25.3699 46.2603 25.3199 46.2803C25.3199 46.1903 25.3199 46.0203 25.3199 45.9303C25.1699 45.8903 24.9699 45.9003 24.8399 45.7703C24.6899 45.6303 24.5299 45.4603 24.3599 45.3003C24.2699 45.2103 24.1999 45.1903 24.1399 45.0703C24.1199 45.0303 24.1199 44.9703 24.0899 44.9303C24.0699 44.9003 24.0199 44.9003 24.0099 44.8803C23.9499 44.7603 23.8999 44.5103 23.8799 44.3703C23.8799 44.5403 23.8299 44.7103 23.8099 44.8703C23.7899 45.0303 23.7999 45.2003 23.7799 45.3603C23.7499 45.6703 23.6799 46.0103 23.5799 46.2803C23.6799 46.1803 23.7299 46.0403 23.8699 46.0103C24.0299 45.9703 24.1499 46.1003 24.2999 46.1403C24.5399 46.2003 24.7599 46.3803 24.9999 46.4303C25.1399 46.4603 25.2499 46.4303 25.3899 46.5003V46.5103C25.5899 46.5103 25.7899 46.4603 25.9999 46.4603C26.2699 46.4603 26.5299 46.3003 26.7699 46.1603C26.8799 46.0903 26.9299 45.9803 27.0399 45.9003C27.1499 45.8203 27.1899 45.7703 27.2699 45.6603C27.3899 45.5003 27.5499 45.3903 27.5299 45.1103C27.6199 45.1103 27.6899 44.8703 27.7199 44.7703C27.7499 44.6703 27.7399 44.6103 27.7999 44.5403C27.8499 44.4803 27.9799 44.4303 28.0399 44.4303C27.8999 44.3703 27.7799 44.2303 27.6399 44.1603C27.4299 44.0503 27.2099 43.9803 27.0099 43.8603L27.0299 43.8203ZM23.5499 43.2303C23.5499 43.2303 23.5699 43.2103 23.5799 43.2003C23.5799 43.2003 23.5699 43.1903 23.5599 43.1803V43.2303H23.5499ZM33.6199 43.8203C33.4999 43.7503 33.3999 43.6203 33.2699 43.5603C33.1499 43.5103 33.0299 43.4703 32.9099 43.4403C32.7999 43.4103 32.8899 43.4103 32.7799 43.3903C32.7799 43.2003 32.6499 43.2803 32.5699 43.2903C32.5699 43.2703 32.5699 43.2403 32.5699 43.2103C32.4299 43.2103 32.0999 42.8703 31.9699 42.7903C31.8299 42.7003 31.6499 42.5703 31.4999 42.5603C31.4799 42.3503 31.7299 41.9703 31.8799 41.9003C31.9699 41.8603 32.0999 41.8303 32.1999 41.8003C32.3399 41.7503 32.4699 41.8103 32.6099 41.8003C32.6099 41.7603 32.4899 41.6503 32.4899 41.6203C32.5399 41.6703 32.7099 41.7103 32.6999 41.7803C32.8399 41.7803 33.0099 41.8303 33.1499 41.8703C33.2199 41.8903 33.2599 41.9403 33.3099 41.9903C33.3799 42.0603 33.4399 42.0603 33.5299 42.1103C33.6699 42.1903 33.7699 42.4303 33.8599 42.5703C33.9299 42.6803 34.1299 42.8003 34.1599 42.9703C34.1399 42.7003 34.0199 42.3803 33.9899 42.1103C33.9799 41.9803 33.9499 41.8603 33.9299 41.7303C33.8999 41.5403 33.9299 41.3303 33.9099 41.1503C33.6599 41.4203 33.2799 41.3003 32.9799 41.3403C32.6199 41.3903 32.2999 41.2703 31.9399 41.3103C31.8599 41.3103 31.8699 41.4503 31.8099 41.4703C31.7499 41.4903 31.6399 41.3703 31.5799 41.3803C31.4299 41.4003 31.2499 41.5203 31.1299 41.6303C30.8899 41.8303 30.6999 41.9803 30.5499 42.3103C30.4899 42.4303 30.4099 42.5603 30.3699 42.7003C30.3299 42.8103 30.3499 43.0103 30.2999 43.1203C30.2799 43.1703 30.2199 43.1703 30.1799 43.1803C30.2699 43.2803 30.4099 43.3503 30.5199 43.3803C30.6099 43.4103 30.9899 43.7003 31.0799 43.7203C31.1399 43.7303 31.1899 43.7103 31.2499 43.7203C31.2299 43.9403 31.1999 43.8303 31.3299 43.9403C31.4199 44.0103 31.4899 44.0403 31.5799 44.1003C31.6599 44.1503 31.7299 44.2703 31.8199 44.2903C31.8199 44.2703 31.6899 43.9903 31.6899 43.9703C31.7899 43.9903 31.9899 44.3503 32.0899 44.3503C32.1899 44.3503 32.2999 44.3403 32.2999 44.5403C32.4599 44.5403 32.6099 44.7303 32.7599 44.8103C32.8999 44.8803 33.0799 45.0903 33.2199 45.1003C33.0899 45.3603 32.9499 45.6103 32.7199 45.7503C32.5399 45.8603 32.4399 45.8503 32.2399 45.8803C32.2099 45.8803 32.1799 45.9303 32.1499 45.9303C32.1199 45.9303 32.0899 45.9003 32.0599 45.9003C32.0099 45.8803 31.9099 46.0103 31.9099 45.9203C31.7599 45.8803 31.5699 45.8903 31.4399 45.7603C31.2899 45.6203 31.1299 45.4503 30.9599 45.2903C30.8699 45.2003 30.7899 45.3003 30.7299 45.1903C30.7099 45.1503 30.7099 45.0903 30.6799 45.0503C30.6599 45.0203 30.6299 44.9003 30.6099 44.8803C30.5499 44.7603 30.4999 44.5103 30.4899 44.3703C30.4899 44.5403 30.4399 44.7103 30.4199 44.8703C30.3999 45.0303 30.4099 45.2003 30.3899 45.3603C30.3599 45.6703 30.2899 46.0103 30.1899 46.2803C30.2899 46.1803 30.3399 46.0403 30.4799 46.0103C30.6399 45.9703 30.7599 46.1003 30.9099 46.1403C31.1499 46.2003 31.3699 46.3803 31.5999 46.4303C31.7399 46.4603 31.8699 46.4503 32.0099 46.5203V46.5303C32.2099 46.5303 32.3899 46.4603 32.5999 46.4603C32.8699 46.4603 33.1199 46.3003 33.3599 46.1603C33.4699 46.0903 33.5199 45.9803 33.6299 45.9003C33.7399 45.8203 33.7799 45.7703 33.8599 45.6603C33.9799 45.5003 34.1399 45.3903 34.1199 45.1103C34.2099 45.1103 34.2799 44.8703 34.3099 44.7703C34.3399 44.6703 34.3299 44.7703 34.3799 44.7003C34.4299 44.6403 34.5599 44.4303 34.6199 44.4203C34.4799 44.3603 34.3599 44.2203 34.2199 44.1503C34.0099 44.0403 33.7999 43.9703 33.5899 43.8503L33.6199 43.8203ZM30.1599 43.1703C30.1599 43.1703 30.1799 43.1603 30.1999 43.1503C30.1999 43.1503 30.1799 43.1303 30.1799 43.1203V43.1703H30.1599ZM1.16992 43.5103C1.16992 43.5103 1.19992 43.4803 1.20992 43.4603L1.16992 43.5103ZM6.21992 45.3703C6.11992 45.4803 5.98992 45.5703 5.87992 45.6503C5.80992 45.7003 5.73992 45.7503 5.66992 45.7603C5.61992 45.7703 5.57992 45.7303 5.51992 45.7603C5.51992 45.8003 5.49992 45.8303 5.49992 45.8703C5.43992 45.8703 5.36992 45.8803 5.30992 45.8903L4.99992 45.8603C4.99992 45.8603 4.97992 45.8503 4.96992 45.8403C4.92992 45.8203 4.88992 45.8203 4.83992 45.8103V45.8503H4.74992C4.51992 45.8503 4.22992 45.7203 4.02992 45.6003C3.90992 45.5303 3.83992 45.3803 3.71992 45.3203C3.64992 45.2803 3.55992 45.3203 3.48992 45.2603C3.45992 45.2403 3.45992 45.1803 3.43992 45.1603C3.21992 44.8903 2.94992 44.7103 2.83992 44.3103C2.76992 44.0503 2.75992 43.6803 2.60992 43.4703C2.68992 43.3803 2.69992 43.2503 2.75992 43.1403C2.80992 43.0403 2.87992 42.9503 2.94992 42.8603C3.14992 42.6003 3.36992 42.4203 3.61992 42.2703C3.83992 42.1403 4.06992 42.0203 4.30992 41.9603C4.35992 41.9503 4.39992 41.9403 4.43992 41.9203C4.48992 41.9003 4.48992 41.8603 4.55992 41.8503C4.68992 41.8303 4.82992 41.8903 4.96992 41.8903C4.96992 41.9303 4.98992 41.9603 4.98992 42.0003C5.04992 42.0403 5.07992 42.0003 5.13992 42.0003C5.20992 42.0103 5.27992 42.0703 5.34992 42.1103C5.46992 42.1903 5.58992 42.2803 5.68992 42.3903C5.79992 42.5103 5.85992 42.6603 5.95992 42.7803C6.04992 42.8803 6.15992 42.9203 6.22992 43.0203C6.16992 42.6603 6.06992 42.2903 6.02992 41.9203C6.00992 41.7203 5.90992 41.5503 5.83992 41.3803C5.79992 41.2703 5.72992 40.8503 5.64992 40.7903C5.49992 41.0603 5.48992 41.2803 5.22992 41.2803C4.97992 41.2803 4.73992 41.2003 4.48992 41.2103C4.24992 41.2203 4.04992 41.1603 3.80992 41.1903C3.70992 41.2003 3.61992 41.2603 3.51992 41.2903C3.44992 41.3103 3.31992 41.2903 3.27992 41.3103C3.05992 41.3403 2.86992 41.5803 2.66992 41.6803C2.68992 41.7903 2.70992 41.9103 2.83992 41.9403C2.78992 41.9403 2.47992 41.8203 2.43992 41.8303C2.40992 41.8303 2.36992 41.8903 2.33992 41.9103C2.13992 42.0503 2.08992 42.2503 1.95992 42.4603C1.90992 42.5403 1.85992 42.5603 1.80992 42.6303C1.73992 42.7203 1.70992 42.8503 1.65992 42.9803C1.57992 43.2103 1.35992 43.2903 1.19992 43.4603C1.26992 43.5503 1.42992 43.8003 1.46992 43.9003C1.50992 44.0203 1.58992 44.1203 1.61992 44.2403C1.65992 44.4003 1.64992 44.4803 1.72992 44.5903C1.80992 44.7003 1.85992 44.8303 1.91992 44.9703C1.98992 45.1503 2.07992 45.3303 2.16992 45.5003C2.26992 45.6803 2.33992 45.7303 2.48992 45.8403C2.71992 46.0003 2.89992 46.1603 3.13992 46.2703C3.22992 46.5203 3.63992 46.6203 3.82992 46.6003C4.06992 46.5703 4.31992 46.5903 4.56992 46.5703C4.71992 46.5603 4.86992 46.5103 5.01992 46.5103V46.5503C5.12992 46.5503 5.22992 46.5503 5.32992 46.5303C5.42992 46.5403 5.52992 46.5503 5.62992 46.5403C5.71992 46.5403 5.79992 46.5103 5.88992 46.4803C6.05992 46.5003 6.11992 46.5703 6.22992 46.7803C6.30992 46.7203 6.33992 46.4703 6.37992 46.3603C6.38992 46.3303 6.39992 46.3003 6.41992 46.2703C6.43992 46.2703 6.44992 46.2703 6.46992 46.2703C6.45992 46.2603 6.44992 46.2503 6.42992 46.2403C6.48992 46.1103 6.54992 45.9703 6.55992 45.8203C6.59992 45.4503 6.69992 45.0803 6.74992 44.7203C6.67992 44.8303 6.56992 44.8703 6.47992 44.9703C6.36992 45.0903 6.31992 45.2403 6.20992 45.3603L6.21992 45.3703ZM46.8999 45.2203C46.7899 45.3403 46.7399 45.2503 46.6299 45.3803C46.5299 45.4903 46.4099 45.5803 46.2899 45.6603C46.2199 45.7103 46.1499 45.7603 46.0799 45.7703C46.0299 45.7803 45.9899 45.7403 45.9299 45.7703C45.9299 45.8103 45.9099 45.8403 45.9099 45.8803C45.8499 45.8803 45.7799 45.8903 45.7199 45.9003L45.4099 45.8703C45.4099 45.8703 45.3899 45.8603 45.3799 45.8503C45.3399 45.8403 45.2999 45.8303 45.2499 45.8203V45.8603H45.1599C44.9299 45.8603 44.6399 45.7303 44.4499 45.6103C44.3299 45.5403 44.2599 45.3903 44.1499 45.3303C44.0799 45.2903 43.9999 45.3303 43.9299 45.2703C43.8999 45.2503 43.8999 45.1903 43.8799 45.1703C43.6599 44.9003 43.3999 44.7303 43.2899 44.3203C43.2199 44.0603 43.2199 43.6903 43.0699 43.4803C43.1499 43.3903 43.1599 43.2603 43.2199 43.1503C43.2699 43.0503 43.3399 42.9603 43.3999 42.8703C43.5999 42.6103 43.8099 42.4303 44.0599 42.2903C44.2799 42.1603 44.4999 42.0403 44.7399 41.9803C44.7899 41.9703 44.8299 41.9603 44.8699 41.9403C44.9199 41.9203 44.9199 41.8803 44.9899 41.8703C45.1199 41.8503 45.4699 41.9203 45.6099 41.9203C45.6099 41.9603 45.4199 41.9803 45.4099 42.0203C45.4699 42.0603 45.4999 42.0203 45.5599 42.0203C45.6299 42.0303 45.6999 42.0903 45.7699 42.1303C45.8899 42.2103 46.0099 42.3003 46.1099 42.4103C46.2199 42.5303 46.2799 42.6803 46.3799 42.8003C46.4699 42.9003 46.5799 42.9403 46.6499 43.0403C46.5999 42.6803 46.4999 42.3103 46.4499 41.9503C46.4299 41.7503 46.3299 41.5803 46.2599 41.4103C46.2199 41.3003 46.1799 41.0603 46.1099 41.0003C45.9699 41.2603 45.9099 41.3103 45.6499 41.3103C45.3999 41.3103 45.1599 41.2303 44.9199 41.2403C44.6799 41.2503 44.4899 41.1903 44.2399 41.2203C44.1399 41.2303 44.0499 41.2903 43.9499 41.3203C43.8799 41.3403 43.7599 41.3203 43.7099 41.3403C43.4899 41.3703 43.3099 41.6103 43.0999 41.7103C43.1099 41.8203 42.9199 41.8503 42.8799 41.8603C42.8499 41.8603 42.8099 41.9203 42.7799 41.9403C42.5899 42.0803 42.5699 42.6203 42.4399 42.8303C42.3899 42.9103 42.4699 42.2803 42.4199 42.3403C42.3499 42.4303 42.1599 42.8703 42.1099 43.0003C42.0199 43.2503 41.9299 43.4203 41.7899 43.6303L41.7399 43.7603C41.8099 43.8403 41.8899 43.8203 41.9299 43.9303C41.9699 44.0503 42.0499 44.1503 42.0799 44.2703C42.1199 44.4303 42.1099 44.5103 42.1899 44.6203C42.2699 44.7303 42.3199 44.8603 42.3699 45.0003C42.4399 45.1803 42.5299 45.3603 42.6199 45.5303C42.7199 45.7103 42.7899 45.7603 42.9299 45.8603C43.1599 46.0203 43.3299 46.1803 43.5799 46.2903C43.6699 46.5403 44.0699 46.6403 44.2599 46.6203C44.4999 46.5903 44.7499 46.6103 44.9899 46.5903C45.1399 46.5803 45.2799 46.5303 45.4299 46.5303V46.5703C45.5399 46.5703 45.6399 46.5703 45.7399 46.5503C45.8399 46.5603 45.9399 46.5703 46.0399 46.5603C46.1299 46.5603 46.2099 46.5303 46.2899 46.5003C46.4499 46.5203 46.5099 46.5903 46.6299 46.8003C46.7099 46.7403 46.7399 46.4903 46.7799 46.3803C46.7899 46.3503 46.7999 46.3203 46.8099 46.2903C46.8299 46.2903 46.8399 46.2903 46.8599 46.2903C46.8499 46.2803 46.8399 46.2703 46.8199 46.2603C46.8799 46.1303 46.9399 46.0003 46.9499 45.8403C46.9899 45.4703 47.0899 45.1003 47.1399 44.7503C47.0699 44.8603 46.9599 45.1303 46.8699 45.2303L46.8999 45.2203Z"
                                fill="#FEAF51"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1641_233">
                                <rect
                                  width="48"
                                  height="48"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 hover:text-white font-[600]"
                              href="#"
                            >
                              World of Warcraft Classic</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Massively Multiplayer RPG</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Warcraft_Arclight_Rumble_Icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            style="enable-background: new 0 0 50 50"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                display: none;
                              }
                              .st1 {
                                display: inline;
                              }
                              .st2 {
                                fill: #ffc345;
                              }
                              .st3 {
                                fill: #1783fc;
                              }
                              .st4 {
                                fill: #65faff;
                              }
                              .st5 {
                                fill: #ca9a2d;
                              }
                              .st6 {
                                clip-path: url(#SVGID_00000025400482822593182210000009539181259378976671_);
                                fill: #f3c029;
                              }
                              .st7 {
                                fill: #cb9b2e;
                              }
                              .st8 {
                                clip-path: url(#SVGID_00000157990878754664518300000016158038291974115462_);
                                fill: #f3c029;
                              }
                            </style>
                            <g id="BG_Check" class="st0">
                              <g class="st1">
                                <rect
                                  x="-0.9"
                                  y="0"
                                  class="st2"
                                  width="51.8"
                                  height="50.1"
                                ></rect>
                              </g>
                            </g>
                            <g id="Color_Icon">
                              <g id="Color">
                                <g>
                                  <polygon
                                    id="Bolt_Outer_00000084510211084760089520000005978577460333269168_"
                                    class="st3"
                                    points="3,41.2 24.8,12.8 26.5,20.6 
          45.1,8.7 22.6,38.9 21,30.9 			"
                                  ></polygon>
                                  <polygon
                                    id="Bolt_Inner_00000057110097004243105640000016286091061572752517_"
                                    class="st4"
                                    points="8.9,36.1 23.9,17 25.4,23.7 
          39.5,13.8 23.7,34.9 22.2,28.2 			"
                                  ></polygon>
                                </g>
                              </g>
                              <g id="Gear_Bottom">
                                <path
                                  class="st5"
                                  d="M43.8,20.1l3.2-2.8l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4
        c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3
        C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z
         M41,35.7c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_1_"
                                      x="25.5"
                                      y="22"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 27.0023 -15.4683)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000075133456212352472110000010580075822202493077_"
                                  >
                                    <use
                                      xlink:href="#SVGID_1_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000075133456212352472110000010580075822202493077_);
                                      fill: #f3c029;
                                    "
                                    d="M43.8,20.1l3.2-2.8
          l-2.7-4.8l-6.1,8.5c0,0,2.8,6.5-3.4,13.2c-4.1,4.5-9.9,3.7-9.9,3.7l-2.7,3.2l-1.3-4c0,0-0.8-0.4-2.5-1.6c-1.2-1-1.2-0.9-1.2-1
          l-5.1,3.1l9.1,5.3l0.6,4.3h8l0.7-4.3l8.6-4.9l4.7,0.5l3.2-5.6l-3.2-3C43.8,29.8,43.8,20.1,43.8,20.1z M25.8,45.4
          c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S26.9,45.4,25.8,45.4z M41,35.7c-1.2,0-2.1-0.9-2.1-2.1
          s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S42.2,35.7,41,35.7z"
                                  ></path>
                                </g>
                              </g>
                              <g id="Gear_Top">
                                <path
                                  class="st7"
                                  d="M15.7,17.1c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2
        l-4.7-0.7l-3.3,5.7l3,2.8l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1
        s-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
        S11.4,18.2,10.3,18.2z"
                                ></path>
                                <g>
                                  <defs>
                                    <rect
                                      id="SVGID_00000055672971664679300050000012021230636705464218_"
                                      x="5.7"
                                      y="6.8"
                                      transform="matrix(0.7992 0.6011 -0.6011 0.7992 13.8709 -6.6585)"
                                      width="22.3"
                                      height="21.3"
                                    ></rect>
                                  </defs>
                                  <clipPath
                                    id="SVGID_00000018927629766040953380000014933339883308610698_"
                                  >
                                    <use
                                      xlink:href="#SVGID_00000055672971664679300050000012021230636705464218_"
                                      style="overflow: visible"
                                    ></use>
                                  </clipPath>
                                  <path
                                    style="
                                      clip-path: url(#SVGID_00000018927629766040953380000014933339883308610698_);
                                      fill: #f3c029;
                                    "
                                    d="M15.7,17.1
          c4.1-4.9,9.4-5.2,12.1-4.9c2.7,0.3,5.6,2.3,5.6,2.3l4.7-3l-7.5-4.4L30,2.9h-7.7l-1.2,4.5L13,12.2l-4.7-0.7l-3.3,5.7l3,2.8
          l0.3,9.2l-3.7,2.7l1.5,3.1l7.3-9.2C13.4,25.7,12.4,21,15.7,17.1z M25.8,4.9c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1
          c-1.1,0-2.1-0.9-2.1-2.1S24.6,4.9,25.8,4.9z M10.3,18.2c-1.1,0-2.1-0.9-2.1-2.1S9.1,14,10.3,14s2.1,0.9,2.1,2.1
          S11.4,18.2,10.3,18.2z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft Rumble
                            </a>
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Action Strategy</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            part="icon"
                          >
                            <style type="text/css">
                              .st0 {
                                fill: #593810;
                              }
                              .st1 {
                                fill: #ff9c00;
                              }
                              .st2 {
                                fill: #39ccff;
                              }
                            </style>
                            <g>
                              <circle
                                class="st0"
                                cx="256.7"
                                cy="256"
                                r="138.3"
                              ></circle>
                              <g>
                                <path
                                  class="st1"
                                  d="M400.3,311.8L494,256l-93.7-55.8c-4.7-12-10.6-22.6-17.9-33.2l21.3-59.2L345.1,129
                            c-10-7.3-21.3-13.3-33.2-17.9L256,18l-55.8,93.7c-12,4.7-22.6,10.6-33.2,17.9l-58.5-21.3l21.3,58.5c-7.3,10-13.3,21.3-17.9,33.2
                            L18,256l93.7,55.8c4.7,12,10.6,22.6,17.9,33.2l-21.3,59.2l58.5-21.3c10,7.3,21.3,13.3,33.2,17.9L256,494l55.8-93.7
                            c12-4.7,22.6-10.6,33.2-17.9l59.2,21.3L383,345.1C390.3,335.1,396.3,323.8,400.3,311.8z M256,384.3
                            c-70.5,0-128.3-57.2-128.3-128.3S185.5,127.7,256,127.7S384.3,185.5,384.3,256l0,0C384.3,326.5,326.5,384.3,256,384.3L256,384.3
                            L256,384.3z"
                                ></path>
                                <path
                                  class="st2"
                                  d="M341.8,252.7c0.7-6-4.7-12-5.3-18.6c0-3.3-1.3-6.6-2.7-10c-1.3-3.3-1.3-6.6-2-9.3h-0.7
                            c4-8-7.3-17.3-12.6-23.3c-6.6-6.6-10-15.3-19.9-18.6c-4.7-2-9.3-4.7-14.6-6.6c-4.7-2-10-3.3-14-4.7c-4.7-2-8-6-13.3-5.3
                            c-5.3,0.7-8,4-14,2.7c-12-4-20.6,2.7-29.9,9.3c-4.7,3.3-9.3,6-13.3,9.3c-1.3,1.3-2.7,3.3-4,5.3c-1.3,2-4,3.3-5.3,6
                            c-2.7,4-6.6,6.6-10.6,9.3c-2,1.3-3.3,4-6,5.3c-3.3,2-4,1.3-4,5.3c0,5.3,2.7,9.3,2.7,14c0,2.7,0,5.3,0,8c0.7,2.7,1.3,4.7,2,7.3
                            c1.3,4.7,0,10,2,14c2.7,4,5.3,8.6,8.6,12c3.3,4,6.6,8.6,10,13.3c2,2.7,9.3,6.6,9.3,10.6c5.3,1.3,6.6,7.3,11.3,7.3
                            c2.7-0.7,5.3-0.7,7.3,0c2.7,0.7,4.7,1.3,7.3,2c4.7,0,8-4,12.6-5.3c4.7-1.3,10,0,14.6-2c8.6-5.3,14-14.6,14.6-24.6
                            c0-5.3-1.3-10.6-4.7-14.6c-2.7-4.7-0.7-10-5.3-12.6c-4.7-2-10-4-16-4c-5.3-2-10.6-1.3-16,0.7c-8.6,6,10.6,19.9,0.7,24.6
                            c-11.3,4.7-17.3-8-19.9-16.6c-1.3-5.3-1.3-11.3,0-16.6c0-2.7,0.7-4.7,1.3-7.3c1.3-2,4-3.3,6-4c4-2.7,7.3-6.6,11.3-9.3
                            s9.3-4.7,14-6c6-1.3,12-1.3,17.9-1.3c2.7,0,5.3,0.7,8,0.7s4.7-1.3,7.3-1.3c4,0,2.7,1.3,2.7,4.7c0,2,1.3,4,2.7,6c3.3,4,6,8,9.3,12
                            c6.6,8,5.3,20.6,4.7,30.6c-0.7,5.3,0,10.6,1.3,16c2,6-2.7,6-6.6,9.3c-2.7,4-5.3,8-7.3,12c-3.3,4-6.6,7.3-10.6,10
                            c-3.3,3.3-7.3,6-10.6,8.6c-4.7,2.7-9.3,5.3-14,7.3c-5.3,2-11.3,3.3-16.6,4.7c-2.7,0.7-5.3,1.3-8,2.7c-2,1.3-3.3,4-6,5.3
                            c-6.6,4-14,3.3-21.3,6.6c-4,2-17.3,2.7-17.9,7.3h-0.7c2,4,6,7.3,10.6,8c4.7,0.7,9.3,2,13.3,3.3c4.7,2,8.6,2.7,13.3,3.3
                            c4.7,0,8.6,2.7,13.3,3.3c5.3,0.7,9.3-3.3,14-4c5.3-0.7,10.6-0.7,16-1.3c5.3-0.7,10-2,15.3-3.3c4.7-2,9.3-2,14-4
                            c4.7-2,8.6-4,12.6-6.6c4-2.7,4.7-7.3,8.6-10c4-2.7,7.3-5.3,10.6-8.6c2.7-4,4.7-8.6,5.3-13.3c2-4,4.7-8,7.3-11.3
                            c2-4.7,4-9.3,4.7-14c2-4.7,2-9.3,2-14.6c-0.7-2.7-3.3-4-2-7.3C340.4,256.7,341.1,254.7,341.8,252.7z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Hearthstone</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Strategy Card Game</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full h-[72px] flex justify-center items-center gap-2"
                      >
                        <div
                          class="w-full h-full rounded-[4px] flex items-center pr-[10px] pl-[10px] hover:bg-[#23252b] gap-3"
                        >
                          <svg
                            class="w-[48px] h-[48px]"
                            id="a"
                            data-name="Warcraft_Family"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            part="icon"
                          >
                            <defs>
                              <style>
                                .d,
                                .e {
                                  fill: #f8b700;
                                }

                                .e {
                                  fill-rule: evenodd;
                                }
                              </style>
                            </defs>
                            <path
                              id="b"
                              data-name="Border"
                              class="d"
                              d="M42.2,5.73v36.41H5.79V5.73h36.41M44.2,3.73H3.79v40.41h40.41V3.73h0Z"
                            ></path>
                            <path
                              id="c"
                              data-name="W"
                              class="e"
                              d="M24.98,36.17c1.07-2.92-.34-6.65-.95-8.8-.59,2.14-1.9,5.72-1,8.8h-8.06c1.41-.98,1.22-2.43,1.2-2.69-.12-1.21-.67-3.8-2.2-10.07-.75-3.08-2.63-9.68-2.69-9.81-.32-.72-.94-1.4-1.57-1.81h8.12c0,.05,0,.1,0,.15-.57.71-.5,3.08-.24,4.14.65,2.65,1.17,5.36,1.78,7.9.25,1.03.45,2.2.7,3.17.19-.78.36-1.09.43-1.43.23-1.07.5-2.13.84-3.24.86-3.29,1.72-6.57,2.58-9.86h.08c1.46,5.54,3.25,12.53,3.8,14.22.75-4,1.61-8.3,1.91-9.86.23-.9.66-3.05.39-3.99-.15-.52-.65-.73-.82-1.2h8.43c-2.4,1.64-3.01,5.93-3.96,11.47-.63,3.68-1.6,9.13-1.44,7.94-.28,1.14-.68,3.7.77,4.97,0,0-6.1.09-8.08,0Z"
                            ></path>
                          </svg>
                          <div class="w-auto h-auto flex flex-col">
                            <a
                              class="text-[#ffffff] text-[15px] flex flex-row gap-2 font-[600]"
                              href="#"
                            >
                              Warcraft</a
                            >
                            <span
                              class="text-[13px] text-[#ffffff7a] font-[500]"
                              >Real-time Strategy</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!----------------------------------------------------->
              </div>
            </div>
          </div>
          <!------------------>
          <div class="w-full h-[370px] bg-[#22242c]">
            <div class="w-full h-auto">
              <div
                class="w-full h-[370px] border-[#3b3c3c] rounded-[4px] pt-[10px]"
              >
                <div
                  class="w-full h-[51px] flex justify-center items-center pr-[10px] pl-[10px] group/Redeem__Code relative"
                >
                  <div
                    id="menu7"
                    class="w-full h-[48px] rounded-[4px] flex items-center pr-[15px] pl-[15px] hover:bg-[#2f3138] cursor-pointer "
                  >
                    <p
                      class="text-[#ffffff] text-[16px] font-bold flex gap-[5px] justify-center items-center flex-row group-hover/Redeem__Code:text-white "
                      href="#"
                    >
                      Battle.net Balance
                      <svg
                        class="w-[12px] h-[12px] mt-[5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#8e8f93"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        aria-labelledby="blz-icon-title-chevron-down"
                        viewBox="0 0 24 24"
                        part="icon"
                      >
                        <title id="blz-icon-title-chevron-down">
                          Chevron Down
                        </title>
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </p>
                  </div>
                </div>

                <!----------------------->
                <div
                  id="mm7"
                  class="w-full h-auto absolute bottem-0 px-[10px] hidden"
                >
                  <div class="full h-auto bg-[#111218] rounded-[4px] flex-col">
                    <div
                      class="w-full h-[48px] flex justify-center items-center group/Add_Balance"
                    >
                      <div
                        class="w-full h-full rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#ffffff0f]"
                      >
                        <a
                          class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Add_Balance:text-white"
                          href="#"
                        >
                          <svg
                            class="w-[24px] h-[24px]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-labelledby="blz-icon-title-bn-plus-circle-outlined"
                            viewBox="0 0 24 24"
                            part="icon"
                          >
                            <title id="blz-icon-title-bn-plus-circle-outlined">
                              Plus Circle
                            </title>
                            <path
                              d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
                            ></path>
                            <path
                              d="M11.5 7a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5z"
                            ></path>
                          </svg>
                          Add Balance</a
                        >
                      </div>
                    </div>
                    <!--------------->
                    <div
                      class="w-full h-[48px] flex justify-center items-center group/Gift_Balance"
                    >
                      <div
                        class="w-full h-full rounded-[4px] flex items-center pr-[8px] pl-[8px] hover:bg-[#ffffff0f]"
                      >
                        <a
                          class="text-[#cacbce] text-[15px] flex flex-row gap-2 hover:text-white group-hover/Gift_Balance:text-white"
                          href="#"
                        >
                          <svg
                            class="w-[24px] h-[24px]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-labelledby="blz-icon-title-bn-gift-outlined"
                            viewBox="0 0 24 24"
                            part="icon"
                          >
                            <title id="blz-icon-title-bn-gift-outlined">
                              Gift
                            </title>
                            <path
                              d="M16.066 7.245a2.75 2.75 0 0 0 1.006-3.756c-.325-.563-.803-1.1-1.489-1.34-.711-.247-1.485-.119-2.268.333-.295.17-.528.432-.708.688-.186.265-.35.574-.49.895a9 9 0 0 0-.535 1.715 9 9 0 0 0-1.557-1.494 5 5 0 0 0-.87-.53c-.285-.132-.618-.242-.958-.242-.904 0-1.638.276-2.13.846-.475.55-.62 1.254-.62 1.904 0 .659.23 1.263.616 1.736H5a2 2 0 0 0-2 2v3.53a.5.5 0 0 0 .5.5H4V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.97h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-4.242zm-.293-3.006a1.25 1.25 0 0 1-.457 1.707l-2.383 1.376a4.3 4.3 0 0 1 .062-.933 7.5 7.5 0 0 1 .498-1.725 3.7 3.7 0 0 1 .342-.632c.118-.168.2-.234.23-.25.517-.299.833-.283 1.025-.216.217.076.456.28.683.673M6.947 6.264c0-.454.104-.75.255-.924.132-.153.398-.326.995-.326.034 0 .139.016.325.102.177.083.386.21.612.377.453.334.923.79 1.293 1.244.253.311.422.578.52.777h-2.75c-.69 0-1.25-.56-1.25-1.25M18 19h-5v-4.899h5zm1-6.97h-6V10h6zm-8 0H5V10h6zM11 19H6v-4.899h5z"
                            ></path>
                          </svg>
                          Gift Balance</a
                        >
                      </div>
                    </div>
                    <!--------------->
                    <div
                      class="w-full h-[48px] flex justify-center items-center gap-2 group/Balance__History"
                    >
                      <div
                        class="w-full h-full rounded-[4px] flex gap-2 items-center pr-[8px] pl-[8px] hover:bg-[#ffffff0f]"
                      >
                        <a
                          class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Balance__History:text-white"
                          href="#"
                        >
                          <svg
                            class="w-[24px] h-[24px]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-labelledby="blz-icon-title-bn-history-outlined"
                            viewBox="0 0 24 24"
                            part="icon"
                          >
                            <title id="blz-icon-title-bn-history-outlined">
                              History
                            </title>
                            <path
                              d="M5.001 12a7 7 0 1 1 2.725 5.544.53.53 0 0 0-.695.032l-.713.713a.48.48 0 0 0 .027.712A9 9 0 1 0 3.001 12H1.208a.5.5 0 0 0-.354.854l2.793 2.792a.5.5 0 0 0 .707 0l2.793-2.792A.5.5 0 0 0 6.794 12H5Z"
                            ></path>
                            <path
                              d="M12.001 7a1 1 0 0 0-1 1v4.036a1 1 0 0 0 .5.91l3.465 2a1 1 0 0 0 1-1.732l-2.965-1.712V8a1 1 0 0 0-1-1"
                            ></path>
                          </svg>
                          Balance History
                        </a>
                        <svg
                          class="w-[16px] h-[16px] fill-[#cacbce]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-labelledby="blz-icon-title-bn-external-link-filled"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-external-link-filled">
                            External Link
                          </title>
                          <path
                            d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
                          ></path>
                          <path
                            d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <!--------------->
                    <div
                      class="w-full h-[48px] flex justify-center items-center gap-2 group/Balance__Help"
                    >
                      <div
                        class="w-full h-full rounded-[4px] flex gap-2 items-center pr-[8px] pl-[8px] hover:bg-[#ffffff0f]"
                      >
                        <a
                          class="text-[#cacbce] text-[15px] flex flex-row gap-2 group-hover/Balance__Help:text-white"
                          href="#"
                        >
                          <svg
                            class="w-[24px] h-[24px]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-labelledby="blz-icon-title-bn-question-outlined"
                            viewBox="0 0 24 24"
                            part="icon"
                          >
                            <title id="blz-icon-title-bn-question-outlined">
                              Question
                            </title>
                            <path
                              d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                            ></path>
                            <path
                              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
                            ></path>
                          </svg>
                          Balance Help</a
                        >
                        <svg
                          class="w-[16px] h-[16px] fill-[#cacbce]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-labelledby="blz-icon-title-bn-external-link-filled"
                          viewBox="0 0 24 24"
                          part="icon"
                        >
                          <title id="blz-icon-title-bn-external-link-filled">
                            External Link
                          </title>
                          <path
                            d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
                          ></path>
                          <path
                            d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <!--------------->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

`,D=()=>{let c=document.querySelector("#rightOpen"),t=document.querySelector("#leftOpen"),a=document.querySelector("#rightMenu"),l=document.querySelector("#leftMenu"),e=document.querySelector("#lc"),i=document.querySelector("#rc"),s=document.querySelector("#body");c.addEventListener("click",()=>{a.classList.remove("hidden","animate__slideOutRight"),a.classList.add("fixed","overflow-auto"),s.classList.add("overflow-auto"),l.classList.contains("fixed","animate__slideOutRight")&&l.classList.add("animate__slideOutLeft")}),t.addEventListener("click",()=>{l.classList.remove("hidden","animate__slideOutLeft"),l.classList.add("fixed"),s.classList.add("overflow-auto"),a.classList.contains("fixed","animate__slideOutLeft")&&a.classList.add("hidden")}),e.addEventListener("click",()=>{l.classList.add("animate__slideOutLeft","animate__faster"),s.classList.remove("overflow-hidden")}),i.addEventListener("click",()=>{a.classList.add("animate__slideOutRight","animate__faster","hidden"),s.classList.remove("overflow-hidden")});let h=document.querySelector("#mm1");document.querySelector("#menu1").addEventListener("click",()=>{h.classList.contains("hidden")&&(h.classList.remove("hidden"),h.classList.add("sticky"),f.classList.add("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),p.classList.add("hidden"),C.classList.add("hidden"))});let f=document.querySelector("#mm2");document.querySelector("#menu2").addEventListener("click",()=>{f.classList.contains("hidden")&&(f.classList.remove("hidden"),f.classList.add("sticky"),h.classList.add("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),p.classList.add("hidden"),C.classList.add("hidden"))});let r=document.querySelector("#mm3");document.querySelector("#menu3").addEventListener("click",()=>{r.classList.contains("hidden")&&(r.classList.remove("hidden"),r.classList.add("sticky"),h.classList.add("hidden"),f.classList.add("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),p.classList.add("hidden"),C.classList.add("hidden"))});let o=document.querySelector("#mm4");document.querySelector("#menu4").addEventListener("click",()=>{o.classList.contains("hidden")&&(o.classList.remove("hidden"),o.classList.add("sticky"),h.classList.add("hidden"),f.classList.add("hidden"),r.classList.add("hidden"),d.classList.add("hidden"),p.classList.add("hidden"),C.classList.add("hidden"))});let d=document.querySelector("#mm5");document.querySelector("#menu5").addEventListener("click",()=>{d.classList.contains("hidden")&&(d.classList.remove("hidden"),d.classList.add("sticky"),h.classList.add("hidden"),f.classList.add("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),p.classList.add("hidden"),C.classList.add("hidden"))});let p=document.querySelector("#mm6");document.querySelector("#menu6").addEventListener("click",()=>{p.classList.contains("hidden")&&(p.classList.remove("hidden"),p.classList.add("sticky"),h.classList.add("hidden"),f.classList.add("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),C.classList.add("hidden"))});let C=document.querySelector("#mm7");document.querySelector("#menu7").addEventListener("click",()=>{C.classList.contains("hidden")&&(C.classList.remove("hidden"),C.classList.add("sticky"),h.classList.add("hidden"),f.classList.add("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),p.classList.add("hidden"))});let M=document.querySelector("#search"),u=document.querySelector("#svg");M.addEventListener("click",()=>{u.classList.contains("hidden"),u.classList.remove("hidden"),u.classList.add("block")})},A=` <div
        id="darkbtn"
        class="w-[44px] h-[44px] bg-[#15171e] fixed ol:left-[40px]  ol:bottom-[40px] md:left-[20px]  md:bottom-[20px]  hover:border-[3px] flex items-center justify-center border-[#464343] border-[.5px] rounded-[3px] text-[#aaa2a2] text-[16px] z-10 "
      >
        <button class="">light</button>
      </div>`,W=()=>{let c=document.querySelector("#darkbtn"),t=document.querySelector("html");c.addEventListener("click",()=>{t.classList.contains("dark")?(t.classList.remove("dark"),c.innerHTML="Light"):(t.classList.add("dark"),c.innerHTML="Dark")})},P=`  <div
        class="loading w-full h-[100vh] bg-[#15171e] flex justify-center items-center fixed z-50 pb-[360px]"
      >
        <div
          class="loading1 w-[80px] h-[80px] bg-[url(../images/pageloading.png)]"
        ></div>
      </div>`,F=()=>{const c=t=>document.querySelector(t);document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{c(".loading").remove()},2e3)})},q=`
 <div
        class="w-[44px] h-[44px] bg-[#15171e] fixed ol:right-[40px]  ol:bottom-[40px] md:right-[20px]  md:bottom-[20px] hover:border-[3px] flex items-center justify-center border-[#464343] border-[.5px] rounded-[3px] z-10 "
      >
        <a href="#">
          <svg
            width="24px"
            height="48px"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>
`,R=`
 <div
    class="w-full bg-cover flex justify-center items-center border-t-[.5px] border-b-[.5px] border-stone-700 bg-[url(../images/one__case_1.jpg)] mt-[50px] 2xl:h-[566px] 2xl:pr-[70px] 2xl:pl-[70px] 2xl:my-auto 2xl:pb-[0px] sm:pr-[0px] sm:pl-[0px] sm:pb-[40px] ol:pt-[0px] ol:pb-[100px] ol:pr-[0px] ol:h-[530px] ol:pl-[0px] sm:h-auto"
  >
    <div
      class="w-full flex 2xl:h-auto 2xl:gap-[70px] 2xl:flex-row 2xl:justify-start ol:flex-row ol:gap-[40px] sm:h-auto sm:gap-[60px] sm:flex-col-reverse sm:justify-center sm:items-center"
    >
      <div class="">
        <img
          class="2xl:w-[792px] 2xl:h-[434px] lg:w-[641px] lg:h-[358px] md:w-[445px] md:h-[248px] sm:w-[380px] sm:h-[212px] ol:w-[480px] ol:h-[296px]"
          src="./assets/one__case-1.png"
          alt="one__case-1.png"
        />
      </div>

      <div
        class="h-[258px] 2xl:w-auto ol:w-[320px] flex flex-col justify-center 2xl:gap-[35px] sm:gap-[20px] 2xl:pt-[0px] sm:pt-[70px] sm:items-center 2xl:items-start ol:text-start"
      >
        <div
          class="flex flex-col gap-[10px] sm:text-center 2xl:text-start ol:text-start"
        >
          <h1
            class="text-white font-bold 2xl:text-[48px] lg:text-[48px] sm:text-[36px] ol:pl-[20px] 2xl:pl-[0px]"
          >
            Dive into adventure
          </h1>
          <p
            class="text-[#ffffffb8] 2xl:text-[20px] lg:text-[20px] 2xl:pr-[0px] 2xl:pl-[0px] ol:text-start ol:pl-[20px] ol:pr-[0px] sm:text-[16px] sm:text-center sm:pl-[20px] sm:pr-[20px]"
          >
            Download Battle.net and join a community of millions.
          </p>
        </div>

        <div
          class="flex gap-[10px] 2xl:flex-row md:flex-row sm:flex-col sm:w-auto ol:flex-col ol:text-start"
        >
          <div
            class="w-[284px] h-[45px] bg-[#3C74E0] flex justify-center gap-[10px] items-center rounded-[4px] hover:border-[0.5px] hover:border-white"
          >
            <a
              class="text-white font-bold text-[18px] flex justify-center gap-[10px] items-center"
              href="#"
            >
              <svg
                class="w-[20px] h-[20px] fill-white"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 19.132 19.132"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      style="fill: #ffffff"
                      d="M9.172,9.179V0.146H0v9.033H9.172z"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M19.132,9.179V0.146H9.959v9.033H19.132z"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M19.132,18.986V9.955H9.959v9.032H19.132z"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M9.172,18.986V9.955H0v9.032H9.172z"
                    />
                  </g>
                </g>
              </svg>
              Download for Windows</a
            >
          </div>
          <div
            class="2xl:w-[156px] md:w-[156px] sm:w-[284px] h-[42px] 2xl:bg-[#2B2B33] sm:bg-[#33365c77] rounded-[4px] flex items-center justify-center"
          >
            <a class="text-white text-[18px] font-bold" href="#">
              Learn More</a
            >
          </div>
        </div>

        <div
          class="flex gap-[4px] 2xl:mt-[20px] sm:mt-[10px] ol:pr-[30px] 2xl:pr-[0px]"
        >
          <p class="text-white">Also available for</p>
          <a
            class="text-[#148eff] underline-offset-4 font-bold underline"
            href="#"
          >
            Mac
          </a>
          <p class="text-white">and</p>
          <a
            class="text-[#148eff] underline-offset-4 font-bold underline"
            href="#"
          >
            mobile
          </a>
        </div>
      </div>
    </div>
  </div>

`,E=`
 <div
        class="slider w-full ol:h-[354px] sm:h-[434px] pr-[16px] pl-[16px] relative group/mjk z-20 4xl:px-[18%]"
      >
        <div
          class="w-full h-full relative overflow-hidden rounded-br-[4px] rounded-bl-[4px]"
        >
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.1.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.1.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden"
            >
              <img
                class="w-[320px] h[89px]"
                src="./assets/slider.1.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[30px]"
              >
                Season 03 is live now! Get up to 30% off
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Purchase Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[320px] h[89px]"
                src="./assets/slider.1.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Season 03 is live now! Get up to 30% off
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.2.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.2.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center sm:hidden"
            >
              <img
                class="w-[266px] h[150px]"
                src="./assets/slider.2.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[30px]"
              >
                Pre-purchase and get the Void DOOM Slayer Skin at launch!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Pre-purchase Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[266px] h[150px]"
                src="./assets/slider.2.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Pre-purchase and get the Void DOOM Slayer Skin at launch!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Pre-purchase Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.3.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.3.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden"
            >
              <img
                class="w-[320px] h[53px]"
                src="./assets/slider.3.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[30px]"
              >
                Season 03 is live. Get the new BlackCell Pack.
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Purchase Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[320px] h[53px]"
                src="./assets/slider.3.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Season 03 is live. Get the new BlackCell Pack.
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.4.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.4.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden"
            >
              <img
                class="w-[241px] h[150px]"
                src="./assets/slider.4.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[30px]"
              >
                Unlock More Rewards with the Tavern Pass
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[241px] h[150px]"
                src="./assets/slider.4.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Unlock More Rewards with the Tavern Pass
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.5.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.5.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden"
            >
              <img
                class="w-[320px] h[34px]"
                src="./assets/slider.5.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[30px]"
              >
                Introducing the Mythic Dame Chance Widowmaker weapon skin
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[320px] h[89px]"
                src="./assets/slider.5.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Introducing the Mythic Dame Chance Widowmaker weapon skin
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.6.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.6.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden"
            >
              <img
                class="w-[300px] h[150px]"
                src="./assets/slider.6.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[20px]"
              >
                The Journey Continues with our new Major Update!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Play Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center gap-[1px] ol:hidden sm:flex"
            >
              <img
                class="w-[320px] h[89px]"
                src="./assets/slider.6.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                The Journey Continues with our new Major Update!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
          <div
            class="slide w-full h-full absolute ol:bg-[url(../images/slider/desktop/slider.d.7.jpg)] sm:bg-[url(../images/slider/mobile/slider.m.7.jpg)] bg-cover bg-center sm:flex sm:justify-center sm:items-end"
          >
            <div
              class="w-[320px] h-[360px] absolute top-[0px] left-[150px] ol:flex flex-col justify-center items-center gap-[1px] sm:hidden pb-[20px]"
            >
              <img
                class="w-[282px] h[150px]"
                src="./assets/slider.7.png"
                alt="slider1-1"
              />
              <h2
                class="text-white text-[20px] font-bold text-center px-[24px]"
              >
                Get two new mounts, a max-level character boost, and more with a
                Sha-Infused Epic Pack!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div
              class="w-[380px] pb-[40px] absolute flex-col justify-center items-center ol:hidden sm:flex"
            >
              <img
                class="w-[280px] h[56px]"
                src="./assets/slider.7.png"
                alt="slider1-1"
              />
              <h2 class="text-white text-[16px] font-bold text-center">
                Get two new mounts, a max-level character boost, and more with a
                Sha-Infused Epic Pack!
              </h2>

              <div
                class="w-[280px] h-[56px] bg-[#0074e0] rounded-[5px] flex items-center justify-center hover:border-[2px] hover:border-white mt-[15px]"
              >
                <a
                  class="text-white text-[20px] font-bold text-center"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <!------------->
        </div>
        <!---------------------------------------------------------------------------->
        <button
          class="absolute ol:w-[40px] ol:h-[80px] md:w-[24px] md:h-[48px] sm:hidden bg-[#23252b] rounded-6 ol:top-[125px] md:top-[170px] left-[25px] hover:border-[3px] items-center justify-center border-[#615d5d] border-[.5px] rounded-[3px] md:group-hover/mjk:flex sm:group-hover/mjk:hidden   transition-all hidden 4xl:px-[18%]"
          id="prevbtn"
        >
          <svg
            class="w-[40px] h-[80px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-chevron-left-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-chevron-left-filled">
              Chevron Left
            </title>
            <path
              d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"
            ></path>
          </svg>
        </button>
        <button
          class="absolute ol:w-[40px] ol:h-[80px] md:w-[24px] md:h-[48px] sm:hidden bg-[#23252b] rounded-6 ol:top-[125px] md:top-[170px] right-[25px] hover:border-[3px] items-center justify-center border-[#615d5d] border-[.5px] rounded-[3px] md:group-hover/mjk:flex sm:group-hover/mjk:hidden transition-all hidden 4xl:px-[18%]"
          id="nextbtn"
        >
          <svg
            class="w-[40px] h-[80px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-chevron-right-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-chevron-right-filled">
              Chevron Right
            </title>
            <path
              d="M9.354 5.354a.5.5 0 0 0-.707 0l-.704.703a.5.5 0 0 0 0 .707L13.17 12l-5.227 5.236a.5.5 0 0 0 0 .707l.704.703a.5.5 0 0 0 .707 0l6.293-6.292a.5.5 0 0 0 0-.707L9.354 5.353Z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="w-full h-[34px] flex justify-center items-center gap-2 pr-[40px] pt-2 4xl:px-[10%]"
      >
        <span id="stopbtn" class="cursor-pointer"
          ><svg
            class="w-[20px] h-[20px] fill-[#84868b]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-pause-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-pause-filled">Pause</title>
            <path
              d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
            ></path>
          </svg>
        </span>
        <div
          id="pagination"
          class="h-[34px] flex justify-center items-center ol:gap-2 sm:gap-1"
        ></div>
      </div>


`,O=()=>{let c=[...document.querySelectorAll(".slide")],t=document.querySelector("#nextbtn"),a=document.querySelector("#prevbtn"),l=document.querySelector("#stopbtn"),e=document.querySelector("#pagination"),i=document.querySelector(".slider"),s=0,h=p=>{c.forEach((x,C)=>{x.style.left=`${(C-p)*100}%`}),g()};h(s);let n=()=>{s===c.length-1?(s=0,h(s)):(s++,h(s))},f=()=>{s===0?(s=c.length-1,h(s)):(s--,h(s))};function g(){[...document.querySelectorAll(".bullet")].forEach((x,C)=>{x.classList.remove("active"),C===s&&x.classList.add("active")})}t.addEventListener("click",()=>{n()}),a.addEventListener("click",()=>{f()});let r=setInterval(()=>{n()},3e3),w=!0;l.addEventListener("click",()=>{w===!0?(clearInterval(r),l.innerHTML='<svg class="w-[20px] h-[20px] fill-[#84868b] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-play-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-play-filled">Play</title><path d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"></path></svg>',w=!1):(r=setInterval(()=>{n()},3e3),l.innerHTML='<svg class="w-[20px] h-[20px] fill-[#84868b] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-pause-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-pause-filled">Pause</title><path d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"></path></svg>',w=!0)});let o=c.map((p,x)=>`<div class="bullet" data-id="${x}"></div>`);e.insertAdjacentHTML("afterbegin",o.join("")),g(),document.querySelectorAll(".bullet").forEach(p=>{p.addEventListener("click",x=>{s=+x.target.dataset.id,h(s)})});let v=0,d=0,b=()=>{v<d?f():v>d&&n(),d=0,v=0};i.addEventListener("touchstart",p=>{v=p.changedTouches[0].screenX}),i.addEventListener("touchend",p=>{d=p.changedTouches[0].screenX,b()})};const T=async()=>{let a=(await(await fetch("https://tehrani-1366.github.io/api-battle/db.json")).json()).map(l=>` <div
      class="relative hover:bg-[#313339] rounded-br-[4px] rounded-bl-[4px] sm:nth-of-type-[7]:hidden sm:nth-of-type-[8]:hidden sm:nth-of-type-[9]:hidden sm:nth-of-type-[10]:hidden  ol:nth-of-type-[7]:block ol:nth-of-type-[8]:block ol:nth-of-type-[9]:block xl:nth-of-type-[9]:hidden 3xl:nth-of-type-[9]:block 3xl:nth-of-type-[10]:block"
    >
      <img
        class="w-full h-[156px] object-cover  object-[center_8%] rounded-tr-[4px] rounded-tl-[4px]"
        src="${l.image}"
        alt="${l.gameName}"
      />

      <div
        class="w-full p-[24px] flex flex-col hover:translate-y-[-3px] transition-all"
      >
        <div class="flex items-center gap-1">
<img class="w-[30px] h-[30px] object-contain"
src="${l.icon}" 
alt="${l.gameTitle}"/>



          <span class="text-[#ffffffb8] text-[13px] font-bold">
           ${l.gameName}
          </span>
        </div>
        <h2 class="text-[18px] font-bold line-clamp-2 text-slate-200">
          ${l.gameTitle}
        </h2>
        <p class="text-[#FFB400] line-clamp-3 text-[14px] pr-[30px]">
          ${l.desc}
        </p>
        <p class="text-[12px] text-[#ffffffb8]">Massively Multiplayer RPG</p>
      </div>
      <span class="text-[18px] font-bold text-white ml-[24px] mb-[10px]">
        From $${l.price}</span
      >
    </div>`);document.querySelector("#gamesContainer1").insertAdjacentHTML("afterbegin",a.join(""))},$=async()=>{let a=(await(await fetch("https://tehrani-1366.github.io/api-battle/db.json")).json()).map(l=>` <div
      class="relative hover:bg-[#313339] rounded-br-[4px] rounded-bl-[4px] sm:nth-of-type-[7]:hidden sm:nth-of-type-[8]:hidden sm:nth-of-type-[9]:hidden sm:nth-of-type-[10]:hidden  ol:nth-of-type-[7]:block ol:nth-of-type-[8]:block ol:nth-of-type-[9]:block xl:nth-of-type-[9]:hidden 3xl:nth-of-type-[9]:block 3xl:nth-of-type-[10]:block"
    >
      <img
        class="w-full h-[156px] object-cover  object-[center_8%] rounded-tr-[4px] rounded-tl-[4px]"
        src="${l.image}"
        alt="${l.gameName}"
      />

      <div
        class="w-full p-[24px] flex flex-col hover:translate-y-[-3px] transition-all"
      >
        <div class="flex items-center gap-1">
<img class="w-[30px] h-[30px] object-contain"
src="${l.icon}" 
alt="${l.gameTitle}"/>



          <span class="text-[#ffffffb8] text-[13px] font-bold">
           ${l.gameName}
          </span>
        </div>
        <h2 class="text-[18px] font-bold line-clamp-2 text-slate-200">
          ${l.gameTitle}
        </h2>
        <p class="text-[#FFB400] line-clamp-3 text-[14px] pr-[30px]">
          ${l.desc}
        </p>
        <p class="text-[12px] text-[#ffffffb8]">Massively Multiplayer RPG</p>
      </div>
      <span class="text-[18px] font-bold text-white ml-[24px] mb-[10px]">
        From $${l.price}</span
      >
    </div>`);document.querySelector("#gamesContainer2").insertAdjacentHTML("afterbegin",a.join(""))},N=async()=>{let a=(await(await fetch("https://tehrani-1366.github.io/api-battle/db.json")).json()).map(l=>` <div
      class="relative hover:bg-[#313339] rounded-br-[4px] rounded-bl-[4px] sm:nth-of-type-[7]:hidden sm:nth-of-type-[8]:hidden sm:nth-of-type-[9]:hidden sm:nth-of-type-[10]:hidden  ol:nth-of-type-[7]:block ol:nth-of-type-[8]:block ol:nth-of-type-[9]:block xl:nth-of-type-[9]:hidden 3xl:nth-of-type-[9]:block 3xl:nth-of-type-[10]:block"
    >
      <img
        class="w-full h-[156px] object-cover  object-[center_8%] rounded-tr-[4px] rounded-tl-[4px]"
        src="${l.image}"
        alt="${l.gameName}"
      />

      <div
        class="w-full p-[24px] flex flex-col hover:translate-y-[-3px] transition-all"
      >
        <div class="flex items-center gap-1">
<img class="w-[30px] h-[30px] object-contain"
src="${l.icon}" 
alt="${l.gameTitle}"/>



          <span class="text-[#ffffffb8] text-[13px] font-bold">
           ${l.gameName}
          </span>
        </div>
        <h2 class="text-[18px] font-bold line-clamp-2 text-slate-200">
          ${l.gameTitle}
        </h2>
        <p class="text-[#FFB400] line-clamp-3 text-[14px] pr-[30px]">
          ${l.desc}
        </p>
        <p class="text-[12px] text-[#ffffffb8]">Massively Multiplayer RPG</p>
      </div>
      <span class="text-[18px] font-bold text-white ml-[24px] mb-[10px]">
        From $${l.price}</span
      >
    </div>`);document.querySelector("#gamesContainer3").insertAdjacentHTML("afterbegin",a.join(""))},U=async()=>{let a=(await(await fetch("https://tehrani-1366.github.io/api-battle/db.json")).json()).map(l=>` <div
      class="relative hover:bg-[#313339] rounded-br-[4px] rounded-bl-[4px] sm:nth-of-type-[7]:hidden sm:nth-of-type-[8]:hidden sm:nth-of-type-[9]:hidden sm:nth-of-type-[10]:hidden  ol:nth-of-type-[7]:block ol:nth-of-type-[8]:block ol:nth-of-type-[9]:block xl:nth-of-type-[9]:hidden 3xl:nth-of-type-[9]:block 3xl:nth-of-type-[10]:block"
    >
      <img
        class="w-full h-[156px] object-cover  object-[center_8%] rounded-tr-[4px] rounded-tl-[4px]"
        src="${l.image}"
        alt="${l.gameName}"
      />

      <div
        class="w-full p-[24px] flex flex-col hover:translate-y-[-3px] transition-all"
      >
        <div class="flex items-center gap-1">
<img class="w-[30px] h-[30px] object-contain"
src="${l.icon}" 
alt="${l.gameTitle}"/>



          <span class="text-[#ffffffb8] text-[13px] font-bold">
           ${l.gameName}
          </span>
        </div>
        <h2 class="text-[18px] font-bold line-clamp-2 text-slate-200">
          ${l.gameTitle}
        </h2>
        <p class="text-[#FFB400] line-clamp-3 text-[14px] pr-[30px]">
          ${l.desc}
        </p>
        <p class="text-[12px] text-[#ffffffb8]">Massively Multiplayer RPG</p>
      </div>
      <span class="text-[18px] font-bold text-white ml-[24px] mb-[10px]">
        From $${l.price}</span
      >
    </div>`);document.querySelector("#gamesContainer4").insertAdjacentHTML("afterbegin",a.join(""))},Q=(...c)=>{c.forEach(t=>{document.querySelector("#root").insertAdjacentHTML("beforeend",t)})};Q(P,A,q,j,B,I,E,m,V(),L,z(),Z,k(),y,S(),R,_);F();W();G();D();O();T();$();N();U();H();
