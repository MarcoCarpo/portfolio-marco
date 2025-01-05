'use client';

import { data } from '@/data';
import { copyToClipboard } from '@/lib/utils';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

const Email = () => {
  return (
    <span className="flex justify-center items-center gap-2 text-xl mt-2">
      <EnvelopeClosedIcon />
      <span
        className="main-gradient cursor-pointer"
        onClick={() => copyToClipboard(data.email, 'Indirizzo email copiato!')}
      >
        {data.email}
      </span>
    </span>
  );
};

export default Email;
