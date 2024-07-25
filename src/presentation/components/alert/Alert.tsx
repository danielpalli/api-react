interface Props {
  message: string;
}

export const Alert: React.FC<Props> = ({ message }) => {
  return (
    <div className='bg-red-500 text-white font-semibold p-2 rounded-md'>
      { message }
    </div>
  );
};