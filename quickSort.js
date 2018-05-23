var values = [999,15,7,16,20,2,111,8,14,11,4,222,19,10,977,18,1];
left = 0;
right = values.length-1;

document.write("Given input = "+values);
quickSort(values, left, right);
document.write("<br />");
document.write("Sorted Output = "+values);

function quickSort(values, left, right){
  if(left<right){
		index = partation(values, left, right);
  }
  if(left<index-1){
  	quickSort(values, left, index-1);
  }
  if(right>index+1){
		  quickSort(values, index+1, right)  
  }
}

function partation(values, left, right){
//document.write("<br />");
//document.write(left+"-----"+right);
	pivot = values[right];
  i = left;
  j = right-1;
  
  while(i<=j){
  	while(values[i]<pivot){
    	i++;
    }
    while(values[j]>pivot){
    	j--;
    }
    
    if(i<j){
    	swap(values,i,j);
      i++; j--;
    }else{
    	break;
    }
    //document.write("<br />");
		//document.write(values);
  }
  swap(values,i,right);
  //document.write("<br />");
	//document.write(values);
	return i;
}

function swap(values,i,j){
	temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}