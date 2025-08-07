import universidadesJson from '@/assets/json/Universidades.json';
import ListCardSignatures from '../../../components/universidad/ListCardSignatures';
import { Universidad } from '@/interfaces/Universidad';

async function universityDetail({ params }: { params: Promise<{ name_university: string }> }) {

  const universityNameEncoded = (await params).name_university;
  const universityName = decodeURIComponent(universityNameEncoded);
  const university : Universidad | undefined = universidadesJson.find(u => u.name_university == universityName)
  const carreras = university?.Carreras
  console.log(university);



  return (
    <div className='mt-40 min-h-screen '>
      {carreras ? <ListCardSignatures signatures={carreras} /> : ""}
    </div>
  )
}

export default universityDetail