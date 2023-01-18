import { useState } from 'react';
import Review from './reuse/Review';

interface Comment {
  // userName: string;
  commentContent: string;
  createdAt: string;
}

interface Props {
  aboutReview: {
    reviewData: Array<Comment>;
    reviewCount: number;
  };
}

const ReviewContainer = ({ aboutReview }: Props) => {
  const [isViewReview, setIsViewReview] = useState<boolean>(false);
  const reviewArr = aboutReview.reviewData;

  const handleReviewClick = () => {
    setIsViewReview(!isViewReview);
  };

  console.log(aboutReview);

  return (
    <div className="flex flex-col items-start justify-center w-full h-fit">
      <button
        type="button"
        className="mt-3 text-sm cursor-pointer w-fit h-fit text-fontGray"
        onClick={handleReviewClick}
      >
        댓글 {aboutReview.reviewCount}개 모두보기
      </button>

      {isViewReview ? (
        <div>
          {reviewArr.map(el => {
            // const userName = el.userName;
            const { commentContent, createdAt } = el;

            return (
              <Review commentContent={commentContent} createdAt={createdAt} />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ReviewContainer;
