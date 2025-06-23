import { Link, useNavigate, useOutletContext } from "react-router";
import type { TodoItem } from "./TodoInfo";
import { useForm } from "react-hook-form";
import useAxiosInstance from "@hooks/useAxiosInstance";

interface OutletContextProps {
  item: TodoItem;
}
function TodoEdit() {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  //부모 컴포넌트에서 context로 넘겨준 값을 받아오기 위한코드
  const { item } = useOutletContext<OutletContextProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  const updateTodo = async (formData: TodoItem) => {
    console.log("API 서버에 수정 요청", formData);

    try {
      //TODO API 서버에 수정 요청
      await axiosInstance.patch(`/todolist/${item._id}`, formData);
      alert("할일이 수정 되었습니다.");

      // 상세 보기로 이동
      navigate(-1); // window.history.go(-1)
      // navigate(`/list/3`);
    } catch (err) {
      console.error(err);
      alert("할일 수정에 실패했습니다.");
    }
  };
  return (
    <>
      {/* //원래 상세보기가 있었음 */}
      <h2>할일 수정</h2>
      <div className="todo">
        {/* //궁극적으로는 updateTodo를 호출하는데 그전에 설정해놓은 검증 규칙을 검증하는 작업이다. */}
        <form onSubmit={handleSubmit(updateTodo)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "제목을 입력하세요🚨",
              pattern: {
                value: /\S/,
                message: "제목에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols={23}
            rows={5}
            {...register("content", {
              required: "내용을 입력하세요🚨",
              pattern: {
                value: /\S/,
                message: "내용에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.content?.message}</div>

          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register("done")} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
