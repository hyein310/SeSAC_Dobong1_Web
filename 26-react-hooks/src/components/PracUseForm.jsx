import { useForm } from "react-hook-form";

export default function PracUseForm() {
    const { register, handleSubmit, watch, formState: {errors}, } = useForm();

    const onValid = (data) => {
        console.log("valid", data);
    };

    const onInvalid = (data) => {
        console.log("invalid", data);
    }
    return (
        <>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input type="text" {...register("username", {
                required: "이름은 필수 항목입니다."
            },
            )}/>
            {errors.username?.message}
            <br />
            <input type="number" {...register("age", {
                min: {
                    value: 0,
                    message: "0 이상의 숫자만 입력 가능합니다."
                },
            })}/>
            {errors.age?.message}
            <br />
            <button type="submit">제출</button>
        </form>
        </>
    )
}