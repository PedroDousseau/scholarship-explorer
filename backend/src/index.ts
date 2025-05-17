import { PrismaClient } from '@prisma/client'
import express, { RequestHandler } from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/scholarships', (async (req, res) => {
  try {
    const scholarships = await prisma.scholarship.findMany()
    res.json(scholarships)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scholarships' })
  }
}) as RequestHandler)

app.post('/api/applications', (async (req, res) => {
  const { scholarshipId, studentName, studentEmail, message, utm } = req.body

  try {
    const scholarship = await prisma.scholarship.findUnique({
      where: { id: scholarshipId }
    })

    if (!scholarship) {
      return res.status(404).json({ error: 'Scholarship not found' })
    }

    const application = await prisma.application.create({
      data: {
        studentName,
        studentEmail,
        message,
        utm,
        scholarship: {
          connect: { id: scholarshipId }
        }
      },
      include: {
        scholarship: true
      }
    })

    res.status(201).json(application)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application' })
  }
}) as RequestHandler)

const server = app.listen(SERVER_PORT, () =>
  console.log(`Server ready at: http://localhost:${SERVER_PORT}`))
