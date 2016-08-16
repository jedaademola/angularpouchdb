package com.ehealth.utility;

/**
 * Created by Lukman.Arogundade on 8/16/2016.
 */
public class CharacterInStrings {

    public static void main(String args[]) {

        String a = "LUKMAN ADEMOLA";
        String b = "LUKMAN AROGUNDADE";

        System.out.println(getCommonCharNSquard(a.toCharArray(), b.toCharArray()));
        System.out.println(getCommonCharN(a.toCharArray(), b.toCharArray()));

    }


    //order of N*N
    public static char[] getCommonCharNSquard(char[] a, char[] b) {
        String ret = new String();

        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    if (ret.indexOf(a[i]) == -1)
                        ret += a[i]; // order of a
                    break;
                }
            }

        return ret.toCharArray();
    }

    // order of N.
    public static char[] getCommonCharN(char[] a, char[] b) {
        String ret = new String();
        boolean[] flags = new boolean[256];  //sizeOf(char)=256

        for (int i = 0; i < b.length; i++)
            flags[b[i]] = true;

        for (int j = 0; j < a.length; j++)
            if (flags[a[j]] == true) {
                ret += a[j];  // order of a
                flags[a[j]] = false;
            }
        return ret.toCharArray();
    }

}
