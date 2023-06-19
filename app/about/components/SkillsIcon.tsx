import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Image from 'next/image';

export function AstroIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Astro.svg'}
              alt='Astro icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Astro</h1>
            <p>Blazing fast web framework</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function CssIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/CSS.svg'}
              alt='CSS icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>CSS</h1>
            <p>Language to beautify the web</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function DiscordIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Discord.svg'}
              alt='Discord icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Discord</h1>
            <p>Social platform for communication</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function FigmaIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Figma-Dark.svg'}
              alt='Figma icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Figma</h1>
            <p>My go-to design and prototyping tool</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function GitIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Git.svg'}
              alt='Git icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Git</h1>
            <p>Version control for us developers</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function GithubIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Github-Dark.svg'}
              alt='Github icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Github</h1>
            <p>Code repository using Git </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function HTMLIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/HTML.svg'}
              alt='HTML icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>HTML</h1>
            <p>Markup language to build the web</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function JavaScriptIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/JavaScript.svg'}
              alt='JavaScript icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>JavaScript</h1>
            <p>Scripting language for the world-wide web</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function NextIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/NextJS-Dark.svg'}
              alt='Next icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Next</h1>
            <p>Powerful all-in-one web framework</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function PythonIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Python-Dark.svg'}
              alt='Python icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Python</h1>
            <p>My go-to swiss-army scripting language</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function ReactIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/React-Dark.svg'}
              alt='React icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>React</h1>
            <p>Javascript Library for the modern web</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function TailwindIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/TailwindCSS-Dark.svg'}
              alt='Tailwind icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Tailwind</h1>
            <p>Utility-first CSS framework</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function ViteIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/Vite-Dark.svg'}
              alt='Vite icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>Vite</h1>
            <p>Modern bundling tool with speed</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export function VSCodeIcon() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={'/images/icons/VSCode-Dark.svg'}
              alt='VSCode icon'
              width={50}
              height={50}
            />
          </TooltipTrigger>
          <TooltipContent>
            <h1 className='font-bold'>VS Code</h1>
            <p>My development environment of choice</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
