import netherlandsRecruiter from './jeremy-akeze-doghouse-it-recruitment.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="jeremy Akeze - Doghouse IT Recruitment"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Welcome to one of my projects!
        <S.Flag />
      </h4>
      <p>
        Hi i am Lakshya Mishra a motivated Front End Developer, a bit of experience in react and next.js, typescript{' '}
        <a href="https://www.linkedin.com/in/lakshya-mishra-8ab9b0165/">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
