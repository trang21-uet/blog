import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk("blog/getBlogs", async (queries) => {
  try {
    // TODO
    return;
  } catch (error) {
    throw error;
  }
});

export const getBlog = createAsyncThunk("blog/getBlog", async (queries) => {
  try {
    // TODO
    return BLOG;
  } catch (error) {
    throw error;
  }
});

const BLOG = {
  title: "NĂM Ý TƯỞNG CỰC THÚ DZỊ CHO ĐỒ ÁN TỐT NGHIỆP NGÀNH CNTT",
  content:
    "Gần đây, nhiều bạn sinh viên hay nhờ mình gợi ý ý tưởng làm đồ án tốt nghiệp. Với các bạn sinh viên, nghĩ ra ý tưởng hay ho đã khó, xem xét ý tưởng đó có khả thi hay không, lưạ chọn công nghệ để thực hiện còn khó hơn. Do vậy, trong bài này, mình sẽ gợi ý một số ý tưởng thú dzị, không quá khó mà lại hay, rất thích hợp để làm đồ án tốt nghiệp. Bên cạnh đó, mình cũng gợi ý luôn một số công nghệ mà các bạn có thể tìm hiểu và sử dụng cho đồ án nhé! Các đồ án này cần team khoảng 3-4 sinh viên làm trong 3-4 tháng kể cả viết document, nếu các bạn có ít người hơn thì cứ việc bỏ bớt chức năng ha.",
  id: "a1",
  author: "TrangNX",
  createdAt: 1691851270000,
  updatedAt: 1692196870000,
};
