type MessageErrorType = {
  message: string;
};

export const ErrorComponent = ({ message }: MessageErrorType) => {
  return (
    <div>
      <p className='text-[15px] text-red-500 mt-2'>{message}</p>
    </div>
  );
};
