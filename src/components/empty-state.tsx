export function EmptyState({
  title,
  text,
  action,
  onAction,
}: {
  title: string;
  text: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex min-h-[52vh] flex-col items-center justify-center px-5 text-center">
      <p className="mb-2.5 text-[17px] font-semibold text-fg">{title}</p>
      <p className="mb-7 max-w-[260px] text-sm leading-snug text-muted">{text}</p>
      {action ? (
        <button type="button" onClick={onAction} className="bg-transparent p-0 text-base font-medium text-accent">
          {action}
        </button>
      ) : null}
    </div>
  );
}
