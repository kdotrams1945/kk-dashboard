import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export interface resumeItem {
    title: string;
    subtitle: string;
    points: string[];
    link?:string;
    
}



export const workExperience : resumeItem[] = [
    {
        title: 'Assistant Tutor in CS124 : Intro to Computer Science I',
        subtitle: 'University of Illinois At Urbana-Champaign, 8/2024-',
        points: ['Assisted students in understanding fundamental concepts of Java (boolean logic, class structure, polymorphism, etc).', 
        'Provided guidance on Java coding assignments and projects',
    'Conducted review sessions to help students prepare for exams'],
    },
    {
        title: 'Math Tutor',
        subtitle: 'Naperville Public Library, 5/2024-8/2024',
        points: ['Provided one-on-one tutoring to students in mathematics, ranging from Pre-Algebra to Calculus', 
        'Assisted students with homework and exam preparation',
    'Developed personalized learning plans to address individual student needs']
    },
    {
        title: 'Code Instructor',
        subtitle: 'Code Ninjas, 5/2022-8/2024',
        points: ['Aided school age children 5-11 years of age learn coding skills',
        'Instructed the children by teaching them how to build games utilizing MIT\'s ScratchJr and Microsoft\'s MakeCode Arcade']
    },
]

export const education : resumeItem[] = [
    {
        title: 'Bachelor of Science in Math and Computer Science',
        subtitle: 'University of Illinois At Urbana-Champaign, 8/2023-Present',
        points: ['Abstract Linear Algebra', 
        'Data Structures and Algorithms',
        'Discrete Structures', 
        'Introduction to C++',
        'Introduction to Java',
        'Numerical Methods']
    },
    {
        title: 'High School Diploma',
        subtitle: 'Neuqua Valley High School, 8/2019-5/2023',
        points: []
    }
]

export const projects : resumeItem[] = [
    {
        title: 'Mortgage Calculator',
        subtitle: 'Java, Springboot, React, Next.js, MaterialUI',
        points: ['Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts and Optimized custom amortization algorithm to generate 360-month schedule'],
         link : '/BMI'
    },
    {
        title: 'Mortgage Calculator2',
        subtitle: 'Java, Springboot, React, Next.js, MaterialUI',
        points: ['Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts, Optimized custom amortization algorithm to generate 360-month schedule']
    },
    {
        title: 'Mortgage Calculator12',
        subtitle: 'Java, Springboot, React, Next.js, MaterialUI',
        points: ['Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts, Optimized custom amortization algorithm to generate 360-month schedule']
    },
    {
        title: 'Mortgage Calculator112',
        subtitle: 'Java, Springboot, React, Next.js, MaterialUI',
        points: ['Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts, Optimized custom amortization algorithm to generate 360-month schedule']
    },
    {
        title: 'Mortgage Calculator3',
        subtitle: 'Java, Springboot, React, Next.js, MaterialUI',
        points: ['Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs']
    }
]

export const awards : resumeItem[] = [
    {
        title: 'National Merit Scholarship',
        subtitle: 'National Merit Scholarship Corporation',
        points: []
    },
    {
        title: 'ADP Henry Taub Memorial Scholarship',
        subtitle: 'ADP',
        points: []
    }, 
    {
        title: 'Illinois State Scholar',
        subtitle: 'State of Illinois',
        points: []
    }
]

export const skills : resumeItem[] = [
    {
        title : 'Languages/Frameworks',
        subtitle:'',
        points: ['Java, SQL,C++,Python,React,Typescript']
    }
]



export function InfoPoint({ point }: { point: string }) {
    return <li>{point}</li>;
  }
  
  export default function InfoCard({ item, elevation }: { item: resumeItem; elevation: number }) {
    const isSinglePoint = item.points && item.points.length === 1;
  //  const para = isSi == 0 ? 1 : 0;
    const linkExists:boolean = item.link != null;
    return (
      <Card sx={{ height: '100%', p:  2 , borderRadius:4 }} elevation={elevation} >
        
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {item.subtitle}
          </Typography>
  
          {isSinglePoint ? (
            <Typography variant="body1">{item.points[0]}</Typography>
          ) : (
            <ul>
              {item.points.map((p, i) => (
                <InfoPoint key={i} point={p} />
              ))}
            </ul>
          )}
          {linkExists ?
          <CardActions  sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small"  variant="outlined" href={item.link} sx={{alignItems:'end'}}>show</Button>
       
      </CardActions> :<div/>
  }
        </CardContent>
      </Card>
    );
  }
    
  export  function Infoormation({ item}: { item: resumeItem}) {
    const isSinglePoint = item.points && item.points.length === 1;
  
    return (
   
        
        <div>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {item.subtitle}
          </Typography>
  
          {isSinglePoint ? (
            <Typography variant="body1">{item.points[0]}</Typography>
          ) : (
            <ul>
              {item.points.map((p, i) => (
                <InfoPoint key={i} point={p} />
              ))}
            </ul>
          )}
        
  
        </div>
  
    );
  }