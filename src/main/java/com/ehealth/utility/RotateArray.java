package com.ehealth.utility;

/**
 * Created by Lukman.Arogundade on 8/16/2016.
 */
public class RotateArray {



    public static void main(String a[]){
        int[] input1 = {1,2,3,4,5,6};
        int position = 2;

        rotate(input1,position);

    }


    public static void rotate(int[] arr, int order) {
        if (arr == null || arr.length==0 || order < 0) {
            throw new IllegalArgumentException("Illegal argument!");
        }

        if(order > arr.length){
            order = order %arr.length;
        }

        //length of first part
        int a = arr.length - order;

        reverse(arr, 0, a-1);
        reverse(arr, a, arr.length-1);
        reverse(arr, 0, arr.length-1);

        for(int i:arr){
            System.out.print(i+" ");
        }

    }

    public static void reverse(int[] arr, int left, int right){
        if(arr == null || arr.length == 1)
            return;

        while(left < right){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
