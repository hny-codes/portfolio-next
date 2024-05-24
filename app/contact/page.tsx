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
  TwitterIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  notifVariants,
  friendRequestVariant,
  contactVariants,
  notifKeyframes,
  contactDuration,
} from '@/lib/framerAnim';

export default function ContactPage() {
  const [request, setRequest] = useState<boolean | null>(null);
  const [greeting, setGreeting] = useState<string>('');
  const acceptResponses = ['Cool!', 'Great!', 'Awesome!'];
  const declineResponses = ['Bummer...', 'Unfortunate...', 'Unlucky...'];

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
    <main className='text-white sm:p-10 mb-14'>
      <div>
        <section className='relative'>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{
              opacity: notifKeyframes.opacity,
              y: notifKeyframes.y,
            }}
            transition={{ duration: contactDuration + 3 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={request === true ? 'after' : 'before'}
            transition={{ duration: contactDuration + 4 }}
            variants={notifVariants}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={request === false ? 'after' : 'before'}
            transition={{ duration: contactDuration + 4 }}
            variants={notifVariants}
          >
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
                Have my contact information anyways!
              </AlertDescription>
            </Alert>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={request === null ? 'before' : 'after'}
            transition={{ contactDuration, delay: contactDuration }}
            variants={friendRequestVariant}
          >
            <Card className='w-[60%] mx-auto my-8 max-w-lg -z-10 border-l-[var(--clr-secondary-01)] border-l-8'>
              <CardHeader>
                <CardTitle className='flex items-center gap-4 font-bold'>
                  <Avatar className=''>
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
                <Button
                  variant={'friend'}
                  onClick={handleClickAccept}
                  className={`${request === true ? 'btn-select' : ''}`}
                >
                  <CheckCircle2
                    className={`${request === true ? 'block' : 'hidden'} mr-2`}
                  />
                  Accept
                </Button>
                <Button
                  variant={'friend'}
                  onClick={handleClickDecline}
                  className={`${request === false ? 'btn-select' : ''}`}
                >
                  <XCircle
                    className={`${request === false ? 'block' : 'hidden'} mr-2`}
                  />
                  Decline
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            animate={request === null ? 'before' : 'after'}
            variants={contactVariants}
          >
            <Card
              className={`w-[80%] mx-auto max-w-xl border-l-[var(--clr-secondary-01)] border-l-8 
              ${request === null ? 'hidden' : 'block'}`}
            >
              <CardHeader className='flex items-center'>
                <CardTitle>Let&apos;s Party Up!</CardTitle>
              </CardHeader>
              <CardContent className=''>
                <div className=''>
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-bold'>My Email:</h3>
                    <a href='mailto:hny-codes@protonmail.com'>
                      hny-codes@protonmail.com
                    </a>
                  </div>
                  <div className='flex justify-evenly mt-8 font-bold gap-4'>
                    <a
                      href='https://github.com/hny-codes'
                      target='_blank'
                      className='flex flex-col items-center link-hover hover:rotate-12 hover:transition'
                    >
                      <Github />
                      <span className='text-black'>Github</span>
                    </a>
                    <a
                      href='https://linkedin.com/in/henry-nguyen-00ab23b3'
                      target='_blank'
                      className='flex flex-col items-center link-hover hover:rotate-12 hover:transition'
                    >
                      <Linkedin />
                      <span className='text-black'>LinkedIn</span>
                    </a>
                    <a
                      href='https://x.com/hny_codes'
                      target='_blank'
                      className='flex flex-col items-center link-hover hover:rotate-12 hover:transition'
                    >
                      <TwitterIcon />
                      <span className='text-black'>Twitter</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
