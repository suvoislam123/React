
export const useThreeItem = (reviews)=>{
    let arr = [];
      if(reviews.length !==0 && reviews.length>3)
      {
        for(let i=0;i<3;i++)
      {
          arr.push(reviews[i]);
      }
      }
      else{
        arr = reviews
      }
      return arr;
  }
  export default  useThreeItem;