class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        String ab = String.valueOf(a) + String.valueOf(b);
        int abValue = Integer.parseInt(ab);
        if(abValue >= 2*a*b){
            return abValue;
        }
        else{
            return 2*a*b;
        }
    }
}