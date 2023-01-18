<script setup lang="ts">
import { Product } from "../../index"

defineProps<{ list: Product[] }>()

</script>

<template>
    <div class="pagination">
        <ul class="pagination__list">
            <a class="pagination__list-arrow left" href="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png">
            </a>
            <li><a href="_blank">1</a></li>
            <li class="inactive">...</li>
            <li><a href="_blank">3</a></li>
            <li class="active">4</li>
            <li><a href="_blank">5</a></li>
            <li class="inactive">...</li>
            <li><a href="_blank">10</a></li>
            <a class="pagination__list-arrow right" href="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png">
            </a>
        </ul>
    </div>
</template>

<style lang="scss">

.pagination {
	width: 320px;
	height: 70px;
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
			
			a {
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
			
			a:hover {
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

</style>