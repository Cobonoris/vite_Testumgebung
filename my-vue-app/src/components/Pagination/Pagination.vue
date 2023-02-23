<script setup lang="ts">
import { Product } from "../../index"

const emit = defineEmits(
	["changePage"]
)

var props = defineProps<{ 
	list: Product[] 
	totalPages: number
	currentPage: number
}>()

function changePage(event: any) {
	let page = parseInt(event.target.innerHTML || "0") - 1;
	emit("changePage", page);
}

function nextPage() {
	if(props.currentPage < props.totalPages - 1) {
		let page = props.currentPage + 1;
		emit("changePage", page);
	}
	
}

function prevPage() {
	if(props.currentPage > 0) {
		let page = props.currentPage - 1;
		emit("changePage", page);
	}
}

</script>

<template>
    <div class="pagination">
        <ul class="pagination__list">
            <div class="pagination__list-arrow left" @click="prevPage()">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png">
			</div>
            <li v-for="(item, index) in totalPages" :key="index">
				<div :class="{ 'active' : currentPage == index}" @click="changePage">
					{{ index + 1}}
				</div>
			</li>
            <div class="pagination__list-arrow right" @click="nextPage()">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png">
			</div>
        </ul>
    </div>
</template>

<style lang="scss">

.pagination {
	width: auto;
	max-width: 85%;
	height: 40px;
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	
	&__list {
		width: 350px;
		display: flex;
		justify-content: space-around;
		list-style: none;
		margin: 0;
    	padding: 0;
		
		&-arrow {
			content: ";";
			align-items: center;
			display: flex;
			margin-top: 2px;
			text-decoration: none;
			width: 26px;
			filter: invert(39%) sepia(61%) saturate(818%) hue-rotate(104deg) brightness(90%) contrast(102%);
			img {
				width: 26px;
				position: relative;
			}
		}
		
		&-arrow:hover {
			filter: invert(19%) sepia(12%) saturate(4787%) hue-rotate(111deg) brightness(93%) contrast(103%);
			
		}
		
		&-arrow.left {
			transform: rotate(180deg);
			margin-left: 0;
		}
		
		li {
			
			color: black;
    		text-decoration:none;
			background-color: #bbb;			
			
			div {
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: bold;
				width: 40px;
				height: 40px;
				text-decoration: none;
				font-weight: bold;
				color: white;
				transition: ease-in-out 0.3s;
			}
			
			div:hover {
				background-color: #008c46;
				transition: ease-in-out 0.3s;
			}
			
		}
		
		.inactive {
			display: block;
			background-color: #ddd;
			font-weight: bold;
			top: 10px;
			position: relative;
		}
		
		.active {
			background-color: #008c46;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 40px;
			font-weight: bold;
		}
	}
}

@media (min-width: 768px) {
	.pagination {
		max-width: 40%;
	}
}

</style>