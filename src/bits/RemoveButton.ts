import van from 'vanjs-core'

const { button } = van.tags

interface RemoveButtonProps {
  onRemove: () => Promise<void> | void
}

export default ({ onRemove }: RemoveButtonProps) => {
  const loading = van.state(false)

  const handleClick = async () => {
    loading.val = true
    await onRemove();
    loading.val = false;
  }

  return button({
    class: 'remove-button',
    onclick: handleClick,
    disabled: () => loading.val
  }, () => loading.val ? '⏳' : '🗑️')
}
