package com.ehealth.utility;

/**
 * Created by Lukman.Arogundade on 8/16/2016.
 */
public class LeastCommonMultiple {



    public static void main(String a[]){

        int[] input1 = {1,2,3,4,5,6};

       System.out.print(" Least Common Multiple:" +   lcm(input1));


    }



    /**
     * Method that calculates the Least Common Multiple (LCM) of several
     * positive integer numbers.
     *
     * @param x Array containing the numbers.
     * */
    public static final int lcm(int[] x) {

        if(x.length<2) {
            throw new Error("Do not use this method if there are less than"+
                    " two numbers.");
        }
        int tmp = lcm(x[x.length-1],x[x.length-2]);
        for(int i=x.length-3; i>=0; i--) {
            if(x[i]<=0) {
                throw new IllegalArgumentException("Cannot compute the least "+
                        "common multiple of "+
                        "several numbers where "+
                        "one, at least,"+
                        "is negative.");
            }
            tmp = lcm(tmp,x[i]);
        }
        return tmp;
    }


    /**
     * Method that calculates the Least Common Multiple (LCM) of two strictly
     * positive integer numbers.
     *
     * @param x1 First number
     *
     * @param x2 Second number
     * */
    public static final int lcm(int x1,int x2) {
        if(x1<=0 || x2<=0) {
            throw new IllegalArgumentException("Cannot compute the least "+
                    "common multiple of two "+
                    "numbers if one, at least,"+
                    "is negative.");
        }
        int max,min;
        if (x1>x2) {
            max = x1;
            min = x2;
        } else {
            max = x2;
            min = x1;
        }
        for(int i=1; i<=min; i++) {
            if( (max*i)%min == 0 ) {
                return i*max;
            }
        }
        throw new Error("Cannot find the least common multiple of numbers "+
                x1+" and "+x2);
    }
}
