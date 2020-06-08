import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { CommentWrapper, Top, Info, Profile, Name, Date, Text } from "./styles";

const Comment = ({}) => {
  return (
    <CommentWrapper>
      <Top>
        <Profile src="https://assets.reqter.com/asset/download/file-1589438010203.jpeg" />
        <Info>
          <Name>سعید پادیاب</Name>
          <Date>بیست روز قبل</Date>
        </Info>
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={3}
        />
      </Top>
      <Text>
        جای یوسف خارق العاده بود. این یک مکان عالی است که نسبتاً ایمن است.
        تقریباً تمام کارهایی را انجام دادیم که یوسف توصیه کرد در هنگام ورود به
        سیستم انجام دهیم و قطعاً به یاد ماندنی بود. نکات خود را در مورد گزینه
        های غذا بسیار پیشنهاد می کند ، همه آنها عالی هستند. با تشکر!
      </Text>
    </CommentWrapper>
  );
};
export default Comment;
