//冒泡排序
const arr = [2, 44, 1, 0, -22, 56, -78];
// arr.sort((a,b)=>a-b)
function bubbleSort(arr){
	let tmp;
	for(let i=arr.length; i>0; i--){// 较大的arr[j]会冒泡到arr的尾部
		for(let j=0; j<i-1; j++){
			if(arr[j]>arr[j+1]){// 前一个元素比或一个大，则向后冒泡(交换)
				tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
}
console.log(bubbleSort(arr));// [-78, -22, 0, 1, 2, 44, 56]

//选择排序
const arr = [2, 44, 1, 0, -22, 56, -78];
function selectionSort(arr){
	for(let i=0; i<arr.length; i++){
		let minIndex = i;// 假设arr[i]为最小元素（即默认就是递增）
		let tmp;
		for(let j=i+1; j<arr.length; j++){
			if(arr[j]<arr[minIndex]){// 如果arr[j]比arr[minIndex]还小
				minIndex = j;// 更新最小元素的下标
			}
		}
		// 交换arr[i]和arr[minIndex]
		tmp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = tmp;
	}
	return arr;
}
console.log(selectionSort(arr));

//插入排序
const arr = [2, 44, 1, 0, -22, 56, -78];
/*
简单来说就是，从第二个元素开始，往前找一个合适的位置插进去
知道找到第一个比自己小的元素，然后插在它的后面
期间，当前元素与第一个比它小的元素之间的所有元素都向后移动一个位置，
直到当前元素找到第一个比他小的元素时，直接插在该元素后面就可以
*/
function insertSort(arr){
	let preIndex, current;// 当前元素之前的下标， 当前元素
	for(let i=1; i<arr.length; i++){
		preIndex = i - 1;
		current = arr[i];
		// 当前元素向前找第一个比自己小的元素，然后插在它的后面的合适位置
		while(preIndex>=0 && arr[preIndex]>current){
			// 当前元素到这个第一个比自己小的元素之间的元素全部向后移动一个位置，向后挤一挤
			arr[preIndex+1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex+1] = current;// 找到合适位置后,当前元素直接到它的后面
	}
	return arr;
}
console.log(insertSort(arr));

//希尔排序
/*
希尔排序是改进的插入排序，

*/
const arr = [2, 44, 1, 0, -22, 56, -78];
function shallSort(arr){
	// 增量每次/2且向下取整
	for(let step=Math.floor(arr.length/2); step>0; step=Math.floor(step/2)){
		// 从增量那一组开始进行插入排序，直至完毕
		for(let i=step; i<arr.length; i++){
			let j = i;
			let current = arr[i];
			// preIndex-step是与它同组的其它元素
			while(j-step>=0 && arr[j-step]>current){
				arr[j] = arr[j-step];
				j -= step;
			}
			arr[j] = current;
		}
	}

	return arr;
}
console.log(shallSort(arr));


//归并排序
const arr = [2, 44, 1, 0, -22, 56, -78];
function mergeSort(arr){
	if(arr.length===0 || arr.length===1) return arr;

	const middle = Math.floor(arr.length/2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));

	// 辅助函数，用于将两个数组合并为一个有序数组，并返回
	function merge(left, right){
		const result = [];
		while(left.length && right.length){
			// 放入较小的元素，并从头部移出
			result.push(left[0]<=right[0]? left.shift(): right.shift());
		}
		result.push(...left, ...right);// 放入剩余元素
		return result;
	}
}
console.log(mergeSort(arr));


//快速排序
/*
快排是冒泡的一种改进，基于分治思想
*/
const arr1 = [2, 44, 1, 0, -22, 56, -78];
const arr2 = [2, 44, 1, 0, -22, 56, -78];

function quickSort1(arr, low, high){
	let i = low, j = high, tmp;
	if(i<j){
		tmp = arr[i];// 选取arr[i]作为基准数
		while(i!==j){
			while(i<j && arr[j]>tmp) j--;
			arr[i] = arr[j];
			while(i<j && arr[i]<tmp) i++;
			arr[j] = arr[i];
		}
		arr[i] = tmp;// 至此，基准数arr[i]冒泡完成
		quickSort1(arr, low, i-1);// arr[i]的左侧快排
		quickSort1(arr, i+1, high);// arr[i]的右侧快排
	}
}

function quickSort2(arr){
	if(arr.length===0) return arr;
	const pivot = arr.pop();// 使用最后一个元素当作基准数
	const left = [], right = [];
	for(let i=0; i<arr.length;i++){
		if(arr[i]<pivot)
			left.push(arr[i]);// 小于基准数则放到left
		else
			right.push(arr[i]);// 大于基准数则放到right
	}
	// 合并left的快排结果，基准数和右侧的快排结果
	return quickSort2(left).concat(pivot, quickSort2(right));
}

console.log((quickSort1(arr1, 0, arr1.length-1), arr1));
console.log(quickSort2(arr2));