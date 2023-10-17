import { TbBrandGithubFilled } from 'react-icons/tb';
import { BiHomeAlt2, BiSolidHomeAlt2 } from 'react-icons/bi';

export const PageIndicatorType =
{
  HOME_ACTIVE  :   <BiSolidHomeAlt2  className="indicators--icon indicators--icon-active"/>,
  HOME_INACTIVE:   <BiHomeAlt2       className="indicators--icon"/>,
  
  GITHUB: <TbBrandGithubFilled       className="indicators--icon"/>,
}