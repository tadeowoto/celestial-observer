interface FormErrorMessageProps {
  message: string;
}

export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  return <span className="text-red-500 text-sm mt-1">{message}</span>;
}
