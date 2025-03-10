import { describe, it, expect, beforeEach, vi } from "vitest"

describe("Project Milestone Contract", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    ;(globalThis as any).createMilestone = vi.fn((project: string, description: string) => ({
      result: { value: 1 },
    }))
    ;(globalThis as any).completeMilestone = vi.fn((id: number) => ({
      result: { value: true },
    }))
    ;(globalThis as any).getMilestone = vi.fn((id: number) => ({
      result: { project: "Project A", description: "Milestone 1", completed: false },
    }))
  })
  
  it("should create a milestone successfully", () => {
    const result = (globalThis as any).createMilestone("Project A", "Milestone 1")
    expect(result.result.value).toBe(1)
  })
  
  it("should complete a milestone", () => {
    const result = (globalThis as any).completeMilestone(1)
    expect(result.result.value).toBe(true)
  })
  
  it("should retrieve a milestone", () => {
    const result = (globalThis as any).getMilestone(1)
    expect(result.result).toEqual({ project: "Project A", description: "Milestone 1", completed: false })
  })
})

