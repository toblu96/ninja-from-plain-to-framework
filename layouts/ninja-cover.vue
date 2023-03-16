<script setup lang="ts">
const props = defineProps({
  image: {
    default: "https://source.unsplash.com/collection/94734566/1920x1080",
  },
  imageClass: {
    default: "",
  },
  githubUrl: {
    default: "https://github.com/toblu96",
  },
  date: {
    default: new Date().getFullYear(),
  },
});
</script>

<template>
  <div class="slidev-layout cover">
    <!-- bg image -->
    <div class="abs-br -right-21 -bottom-12 scale-82">
      <svg
        width="960"
        height="540"
        viewBox="0 0 960 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g clip-path="url(#clip0_1171_40)">
          <path
            d="M824.192 331.414C699.114 308.546 620.432 240.159 388.88 258.503C381.105 259.118 377.16 268.238 381.755 274.54C557.216 515.212 498.589 583.251 594.386 720.62C598.096 725.94 605.904 726.21 610.05 721.223C722.017 586.506 777.576 502.487 832.059 344.681C834.083 338.816 830.294 332.53 824.192 331.414Z"
            fill="url(#paint0_linear_1171_40)"
          />
          <!-- bg -->
          <path
            d="M1032.33 161.263C877.047 128.026 783.566 38.6998 492.913 52.4213C485.122 52.7892 480.84 61.8212 485.226 68.2707C694.691 376.261 616.934 456.763 731.667 632.292C735.216 637.72 743.054 638.289 747.374 633.451C892.922 470.46 965.233 369.217 1039.76 174.795C1041.98 169.002 1038.4 162.561 1032.33 161.263Z"
            fill="#fff"
          />
          <!-- image -->
          <path
            d="M1032.33 161.263C877.047 128.026 783.566 38.6998 492.913 52.4213C485.122 52.7892 480.84 61.8212 485.226 68.2707C694.691 376.261 616.934 456.763 731.667 632.292C735.216 637.72 743.054 638.289 747.374 633.451C892.922 470.46 965.233 369.217 1039.76 174.795C1041.98 169.002 1038.4 162.561 1032.33 161.263Z"
            fill="url(#pattern0)"
          />
          <!-- opacity filter -->
          <path
            d="M1032.33 161.263C877.047 128.026 783.566 38.6998 492.913 52.4213C485.122 52.7892 480.84 61.8212 485.226 68.2707C694.691 376.261 616.934 456.763 731.667 632.292C735.216 637.72 743.054 638.289 747.374 633.451C892.922 470.46 965.233 369.217 1039.76 174.795C1041.98 169.002 1038.4 162.561 1032.33 161.263Z"
            fill="#ccfbf1"
            fill-opacity="0.7"
          />
          <path
            d="M1047.66 321.229C911.282 318.082 662.615 126.394 432.571 188.004C425.037 190.022 423.192 199.732 428.95 204.993C649.244 406.295 519.917 602.806 639.124 721.759C643.714 726.34 651.368 724.944 654.667 719.36C746.068 564.641 1027.66 497.508 1057.8 332.793C1058.91 326.69 1053.86 321.372 1047.66 321.229Z"
            stroke="url(#paint1_linear_1171_40)"
            stroke-width="4"
          />
          <path
            d="M1070.04 81.6125C1008.66 68.1032 920.97 22.7093 814.783 27.251C806.99 27.5843 803.031 36.5556 807.56 42.9058C880.522 145.215 863.647 175.558 898.639 232.039C902.943 238.987 913.317 237.374 916.598 229.888C956.918 137.893 1046.04 157.886 1077.16 94.8438C1079.9 89.2807 1076.1 82.9461 1070.04 81.6125Z"
            stroke="url(#paint2_linear_1171_40)"
            stroke-width="2"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_1171_40"
              transform="matrix(0.00155039 0 0 0.00149015 0 -0.0118675)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_1171_40"
            x1="601.859"
            y1="250.062"
            x2="618.635"
            y2="730.462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5eead4" />
            <stop offset="1" stop-color="#5eead4" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1171_40"
            x1="684.5"
            y1="344"
            x2="812"
            y2="270.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0f766e" />
            <stop offset="1" stop-color="#0f766e" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1171_40"
            x1="838.5"
            y1="43.5"
            x2="942"
            y2="159"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5eead4" />
            <stop offset="1" stop-color="#5eead4" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_1171_40">
            <rect width="960" height="540" fill="white" />
          </clipPath>
          <image
            :class="imageClass"
            class="w-full grayscale"
            :href="image"
            id="image0_1171_40"
          />
        </defs>
      </svg>
    </div>

    <!-- content -->
    <div class="abs-t text-left w-full z-1">
      <slot />
    </div>

    <!-- footer -->
    <footer
      class="absolute bottom-0 left-0 right-0 p-2 px-4 flex justify-between items-center text-neutral-500 place-content-"
    >
      <div class="space-x-2 divide-x divide-neutral-400">
        <a
          :href="githubUrl"
          target="_blank"
          alt="GitHub"
          class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"
        >
          <carbon-logo-github />
        </a>
        <span class="align-middle pl-4 text-neutral-400">{{ date }}</span>
      </div>
      <div>
        <vscode-icons-file-type-ninja />
      </div>
    </footer>
  </div>
</template>

<style>
.slidev-layout.cover p,
h2,
h3,
h4 {
  @apply text-neutral-400 w-60%;
}

.slidev-layout.cover h2,
h3,
h4 {
  @apply uppercase mb-10;
}
</style>
