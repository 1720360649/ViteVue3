<template>
	<div
		class="wn-loadding wn-loadding-animation"
		:class="{ 'wn-loadding-enter-from': enter }"
		@click.stop=""
	>
		<div class="wn-loadding-box">
			<Vue3Lottie
				class="wn-loadding-box-lottie"
				:class="{ 'wn-loadding-box-lottie-round': page.round }"
				:animationData="page.json"
				v-if="page && page.json"
			></Vue3Lottie>
			<div class="wn-loadding-box-title" v-if="title">{{ title }}</div>
		</div>
		<div class="wn-loadding-mark" v-if="mark"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
// 基础数据接收和处理
interface pageFace {
	json: any
	round: Boolean
}

const page: pageFace = reactive({
	json: null,
	round: true,
})

const props = defineProps({
	type: String,
	title: String,
	mark: Boolean,
})

let href = './round.json'
if (props.type === 'diamond') {
	page.round = false
	href = './diamond.json'
}

// 动态引入，import.meta.glob() 不能传入变量所以无法抽离
const modules = import.meta.glob('./*.json')
modules[href]().then((mod: any) => {
	page.json = mod.default
})

// 进出动画
let enter = ref(false)
onMounted(() => {
	enter.value = true
	setTimeout(() => {
		enter.value = false
	}, 300)
})
</script>

<style lang="scss" scoped>
.wn-loadding-animation {
	transition: all 0.3s ease;
}

.wn-loadding-enter-from,
.wn-loadding-leave-to {
	opacity: 0;
}

.wn-loadding {
	box-sizing: border-box;

	.wn-loadding-box {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 160px;
		height: 160px;
		padding: 10px;
		margin: auto;
		border-radius: 12px;
		background-color: rgba($color: gray, $alpha: 0.1);
		z-index: 996;

		.wn-loadding-box-lottie {
			width: 130px;
			height: 130px;
		}
		.wn-loadding-box-lottie-round {
			width: 95px;
			height: 95px;
		}
		.wn-loadding-box-title {
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100%;
			text-align: center;
			white-space: nowrap;
		}
	}
	.wn-loadding-mark {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		margin: auto;
		background-color: rgba($color: gray, $alpha: 0.1);
		z-index: 992;
	}
}
</style>
