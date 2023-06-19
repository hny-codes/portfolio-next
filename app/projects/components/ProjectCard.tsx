import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  link: string;
  title: string;
  content: string;
  src: string;
  alt: string;
};

export default function ProjectCard({ link, title, content, src, alt }: Props) {
  return (
    <a
      href={link}
      target='_blank'
      className='project-hover animate-delay-enter'
    >
      <Card className='sm:max-w-[450px] h-full'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Image src={src} alt={alt} width={500} height={100} />
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </a>
  );
}
