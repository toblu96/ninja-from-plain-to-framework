<template>
  <!-- bg images -->
  <div v-if="$slidev.nav.currentPage !== 1">
    <img src="./images/bg-layout-tr.svg" class="abs-tr w-25 -top-3 -right-5" />
    <img
      src="./images/bg-layout-br-filled.svg"
      class="abs-br w-75 -bottom-30 -right-30"
    />
    <img
      src="./images/bg-layout-br-stroke.svg"
      class="abs-br w-60 -bottom-25 -right-8 -rotate-5"
    />

    <footer
      class="absolute bottom-0 left-0 right-0 p-2 px-4 flex justify-between text-neutral-500"
    >
      <div><vscode-icons-file-type-ninja /></div>
      <div>From Plain to Framework</div>
      <div class="text-teal-50">
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </div>
    </footer>
  </div>
</template>
