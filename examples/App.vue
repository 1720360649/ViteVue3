<template>
	<div>
		启动测试
		<Button></Button>
	</div>
</template>

<script lang="ts" setup>
import { Button } from 'wnview'
import { Loadding } from 'wnview'

Loadding({ type: 'diamond', duration: 3000 })
setInterval(() => {
	Loadding({ type: 'diamond', duration: 3000 })
}, 4000)
</script>
