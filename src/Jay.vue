<template>
  <div class="bg-[#131313] text-white text-[15px]">
    <div class="fixed top-0 px-[60px] flex items-center justify-between h-[128px] backdrop-blur-xl w-full">
      <img width="135px" src="/images/logo.png" alt="" srcset="" />
      <div>
        <div class="inline mr-[30px]">Project</div>
        <div class="inline-block">Contacts</div>
      </div>
    </div>
    <header class="px-[60px] mt-[128px]">
      <div class="mt-[10px] pt-[22px] text-[64px] title">ALIRAZA</div>
      <nav class="border-y border-white py-[15px] -mt-[2px]">
        <div class="flex justify-between">
          <div class="menu">
            <a class="p-[10px] font-bold hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="">ALL</a>
            <a class="p-[10px] font-light hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="#brand">#關於品牌</a>
            <a class="p-[10px] font-light hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="">#組織成員</a>
            <a class="p-[10px] font-light hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="">#核心概念</a>
            <a class="p-[10px] font-light hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="">#作品</a>
            <a class="p-[10px] font-light hover:bg-[#d9d9d9] hover:text-black mr-[30px]" href="">#清單</a>
          </div>
          <div class="decrator">
            <a class="p-[10px] hover:bg-[#d9d9d9] hover:text-black mr-[15px]" href="">Gallery</a>
            <span class="mr-[15px]">/</span>
            <a class="p-[10px] hover:bg-[#d9d9d9] hover:text-black" href="">List</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="banner mt-[30px]">
      <img src="/images/banner.png" alt="" srcset="" />
    </div>
    <div class="mt-[30px] px-[60px] flex">
      <div class="flex-1">
        (關於品牌)
        <span id="brand" class="relative -top-[150px]"></span>
      </div>
      <div class="w-[600px] text-[30px]">
        透過ALIRAZA的品牌體驗，感受全新的藝術與設計世界。我們的產品和服務是結合多年專業經驗所打造，旨在提供讓人耳目一新的創意旅程。無論您是初次接觸設計，還是已有豐富經驗的專業人士，我們的團隊都能為您量身打造專屬的設計方案。
      </div>
      <div class="flex-1 text-right">©2024</div>
    </div>
    <img class="mt-[200px]" src="/images/hr.png" alt="" srcset="" />
    <div class="px-[60px]">
      <div class="flex justify-between mt-[200px]">
        <div>(組織成員)</div>
        <div>©2024</div>
      </div>
      <div class="flex flex-wrap relative">
        <Spline class="absolute -top-[650px] -left-[380px] scale-[0.3]" scene="https://prod.spline.design/kBSjj7-hTG4uk-M4/scene.splinecode" />

        <Member v-for="member in members" :avatar="member.avatar" :name="member.name" :desc="member.desc" />
      </div>
      <div class="flex justify-between mt-[200px]">
        <div>(核心概念)</div>
        <div>©2024</div>
      </div>
      <div class="flex justify-end text-[20px] mt-[30px] text-justify">
        <div class="w-[340px] mr-[20px]">
          告別平凡與單調，加入我們，一同探索設計的深度與美感，從圖形到數位，讓您的創意飛翔。無論是簡潔的標誌設計還是複雜的數位專案，我們將創造出能夠代表您品牌精神的作品。
        </div>
        <div class="w-[340px]">
          在ALIRAZA，我們深信每個創意都是獨一無二的。從品牌設計、圖形創作到數位藝術，我們運用尖端技術與設計美學，將您的願景轉化為具象的設計作品。無論是視覺設計還是互動體驗，我們的目標是讓每一個細節都能打動人心，帶來持久的印象。
        </div>
      </div>
      <table class="w-full text-left mt-[200px]">
        <tr class="border-b">
          <th class="text-[64px]">作品</th>
          <th class="w-[300px] align-bottom pb-[15px]">#專案</th>
          <th class="w-[300px] align-bottom pb-[15px]">#年份</th>
          <th class="w-[100px] align-bottom pb-[15px]">#連結</th>
        </tr>
        <tr class="border-b">
          <td class="py-[15px]">№</td>
          <td>Animore</td>
          <td>2024</td>
          <td>🌻🌻🌻</td>
        </tr>
        <tr>
          <td></td>
          <td colspan="3" class="py-[15px]">
            <div class="image-container relative">
              <img class="absolute top-0 left-0" src="/images/member/1.png" alt="" srcset="" />
              <img class="image-target absolute top-0 left-0" src="/images/member/2.png" alt="" srcset="" />
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import Member from "./Member.vue"
import Spline from "spline-vue/v3"

const members = reactive([
  {
    avatar: "/images/member/1.png",
    name: "邱鉦祐",
    desc: "吉祥物",
  },
  {
    avatar: "/images/member/2.png",
    name: "王小明",
    desc: "怕被吉",
  },
  {
    avatar: "/images/member/3.png",
    name: "張小美",
    desc: "吉娃娃",
  },
])
</script>
