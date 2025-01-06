import { getMailOptions, transport } from '@/features/email/utils';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(getMailOptions(email, message, name), function (err) {
        if (!err) {
          resolve('Grazie per avermi contattato!');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const message = await sendMailPromise();
    return NextResponse.json({ message });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
