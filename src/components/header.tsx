import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const [menuToggled, setMenuToggled] = useState(false);
	const { data: session, status } = useSession();

	return <header></header>;
}
