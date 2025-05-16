export type Mode = "sleep" | "wake";

export class SleepCalculator {
  private static readonly CYCLE_MINUTES = 90;
  private static readonly FALL_ASLEEP_TIME = 15;
  private mode: Mode;
  private referenceTime: Date;

  constructor(mode: Mode, referenceTime: Date) {
    this.mode = mode;
    this.referenceTime = referenceTime;
  }

  public calculateCycles(): Date[] {
    const cycles: Date[] = [];

    for (let i = 3; i <= 10; i++) {
      const totalMinutes = i * SleepCalculator.CYCLE_MINUTES + SleepCalculator.FALL_ASLEEP_TIME;

      let resultDate: Date;

      if (this.mode === "wake") {
        resultDate = new Date(this.referenceTime.getTime() - totalMinutes * 60000);
      } else {
        resultDate = new Date(this.referenceTime.getTime() + totalMinutes * 60000);
      }

      cycles.push(resultDate);
    }

    return cycles;
  }

  public static formatTime(date: Date): string {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
