import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
import type { Session } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            // const { currentUser } = await serverAuth(req, res);

            const { userId } = req.query;

            if (!userId || typeof userId !== 'string') {
                return res
                    .status(400)
                    .json({ error: 'Missing or misconfigured site ID or session ID' });
            }

            const { title, content } = req.body;

            const post = await prismadb.post.create({
                data: {
                    title,
                    content,
                    userId,
                }
            });

            return res.status(200).json(post);
        }

        // if (req.method === 'DELETE') {
        //     const { currentUser } = await serverAuth(req, res);

        //     const { movieId } = req.body;

        //     const existingMovie = await prismadb.movie.findUnique({
        //         where: {
        //             id: movieId,
        //         }
        //     });

        //     if (!existingMovie) {
        //         throw new Error('Invalid ID');
        //     }

        //     const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

        //     const updatedUser = await prismadb.user.update({
        //         where: {
        //             email: currentUser.email || '',
        //         },
        //         data: {
        //             favoriteIds: updatedFavoriteIds,
        //         }
        //     });

        //     return res.status(200).json(updatedUser);
        // }

        return res.status(405).end();
    } catch (error) {
        console.log(error);

        return res.status(500).end();
    }
}