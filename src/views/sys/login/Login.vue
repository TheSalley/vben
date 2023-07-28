<template>
    <div class="relative w-full h-full px-4">
        <div class="flex items-center absolute right-4 top-4"></div>
        <span class="xl:hidden">
            <AppLogo />
        </span>
        <div class="container relative h-full py-2 mx-auto sm:px-10"></div>
    </div>
</template>
<script lang="ts" setup>
  import { AppLogo } from '@/components/Application';
</script>