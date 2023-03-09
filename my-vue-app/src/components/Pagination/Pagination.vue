<script setup lang="ts">
import { ref } from "vue";
import { Product } from "../../index"

const emit = defineEmits(
	["changePage"]
)

var props = defineProps<{ 
	totalPages: number
	currentPage: number
}>()

function changePage(event: any) {
	if (event.target.innerHTML != "x"){
		let page = parseInt(event.target.innerHTML || "0");
		emit("changePage", page);
	}
}

function nextPage() {
	if(props.currentPage < props.totalPages) {
		let page = props.currentPage + 1;
		emit("changePage", page);
	}
	
}

function prevPage() {
	if(props.currentPage > 1) {
		let page = props.currentPage - 1;
		emit("changePage", page);
	}
}

function returnMinimizedPagination() {
	let minimized = [];
    const limit = 3;
	var prev = "";

    for (let i = 1; i <= props.totalPages; i++) {
        if (i == 1 || i == props.totalPages || i == props.currentPage || i == (props.currentPage + 1) || i== (props.currentPage - 1)) {
			minimized.push(i);
			var prev = "";
		} else if (prev != 'x') {
			minimized.push("x")
			prev= "x"
		}
    }
    
    return minimized;
}

</script>

<template>
    <div class="pagination">
        <ul class="pagination__list">
            <div class="pagination__list-arrow left" @click="prevPage()">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png">
			</div>
            <li v-for="index in returnMinimizedPagination()">
				<div v-if="index != 'x'" :class="{ 'active' : props.currentPage == index }" class="pg" @click="changePage">
					{{ index }}
				</div>
				<div v-else class="pg inactive">...</div>
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

		.pg {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 40px;
			font-weight: bold;
			background-color: #bbb;
		}
		
		.inactive {
			color: black;
			background-color: unset;
			font-weight: bold;
			top: 10px;
			position: relative;
			width: 10px;

			&:hover {
				background-color: unset;
			}

		}
		
		.active {
			background-color: #008c46;
			color: white;
		}
	}
}

@media (min-width: 768px) {
	.pagination {
		max-width: 40%;
	}
}

</style>