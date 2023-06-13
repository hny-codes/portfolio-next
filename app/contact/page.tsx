'use client';

import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AlertCircle,
  Github,
  Linkedin,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [request, setRequest] = useState<boolean | null>(null);
  const [greeting, setGreeting] = useState<string>('');
  const acceptResponses = ['Cool!', 'Great!', 'Awesome!'];
  const declineResponses = ['Bummer!', 'Unfortunate!', 'Unlucky!'];

  const handleClickAccept = () => {
    setRequest(() => true);
    setGreeting(
      acceptResponses[Math.floor(Math.random() * acceptResponses.length)]
    );
  };

  const handleClickDecline = () => {
    setRequest(() => false);
    setGreeting(
      declineResponses[Math.floor(Math.random() * acceptResponses.length)]
    );
  };

  return (
    <main className='text-white'>
      <div>
        <section className='relative'>
          <Alert
            className={`w-[80%] mx-auto alert ${
              request === null ? 'block' : 'hidden'
            }`}
          >
            <AlertTitle className='flex items-center gap-2 font-bold'>
              <AlertCircle color='#000000' />
              Alert!
            </AlertTitle>
            <AlertDescription>You got 1 notification.</AlertDescription>
          </Alert>
          <Alert
            className={`w-[80%] mx-auto alert ${
              request === true ? 'block' : 'hidden'
            }`}
          >
            <AlertTitle className='flex items-center gap-2 font-bold'>
              <div className='flex items-center gap-2'>
                <CheckCircle2 /> {greeting}
              </div>
            </AlertTitle>
            <AlertDescription>
              Looking forward to getting to know you!
            </AlertDescription>
          </Alert>
          <Alert
            className={`w-[80%] mx-auto alert ${
              request === false ? 'block' : 'hidden'
            }`}
          >
            <AlertTitle className='flex items-center gap-2 font-bold'>
              <div className='flex items-center gap-2'>
                <XCircle /> {greeting}
              </div>
            </AlertTitle>
            <AlertDescription>
              No hard feelings! I&apos;ll leave you my contact information
              regardless!
            </AlertDescription>
          </Alert>
          <Card className='w-[60%] mx-auto my-8 max-w-lg'>
            <CardHeader>
              <CardTitle className='flex items-center gap-4 font-bold'>
                <Avatar>
                  <AvatarImage src='https://avatars.githubusercontent.com/u/104471437?v=4' />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                hny-codes has sent you a friend request!
              </CardTitle>
              <CardDescription className='ml-14'>
                Junior Front-end Developer
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex flex-col sm:flex-row gap-2 justify-between'>
              <Button onClick={handleClickAccept}>
                <CheckCircle2
                  className={`${request === true ? 'block' : 'hidden'} mr-2`}
                />
                Accept
              </Button>
              <Button onClick={handleClickDecline}>
                <XCircle
                  className={`${request === false ? 'block' : 'hidden'} mr-2`}
                />
                Decline
              </Button>
            </CardFooter>
          </Card>
          <Card
            className={`w-[80%] mx-auto max-w-2xl ${
              request === null ? 'hidden' : 'block'
            }`}
          >
            <CardHeader className='flex items-center'>
              <CardTitle>Get in contact with me!</CardTitle>
            </CardHeader>
            <CardContent className=''>
              <div className=''>
                <div className='flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>Email me!</h3>
                  <p>hny-codes@protonmail.com</p>
                </div>
                <div className='flex justify-evenly mt-8 font-bold'>
                  <a
                    href='https://github.com/hny-codes'
                    target='_blank'
                    className='flex flex-col items-center link-hover'
                  >
                    <Github />
                    <span className='text-black'>Github</span>
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    className='flex flex-col items-center link-hover'
                  >
                    <Linkedin />
                    <span className='text-black'>LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
