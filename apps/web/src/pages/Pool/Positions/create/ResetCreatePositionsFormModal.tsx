import { GetHelpHeader } from 'components/Modal/GetHelpHeader'
import { HelpCircle } from 'react-feather'
import { useTranslation } from 'react-i18next'
import { Button, Flex, Text, useSporeColors } from 'ui/src'
import { Modal } from 'uniswap/src/components/modals/Modal'
import { ModalName } from 'uniswap/src/features/telemetry/constants'

interface ResetCreatePositionFormModalProps {
  isOpen: boolean
  onClose: () => void
  onHandleReset: () => void
}

export default function ResetCreatePositionFormModal({
  isOpen,
  onClose,
  onHandleReset,
}: ResetCreatePositionFormModalProps) {
  const colors = useSporeColors()
  const { t } = useTranslation()

  const handleReset = () => {
    onHandleReset()
    onClose()
  }

  return (
    <Modal
      name={ModalName.ResetCreatePositionsForm}
      onClose={onClose}
      isDismissible
      gap="$gap24"
      padding="$padding16"
      isModalOpen={isOpen}
      maxWidth={420}
    >
      <Flex row justifyContent="flex-end" alignItems="center" gap="$spacing8" width="100%">
        <GetHelpHeader closeModal={onClose} />
      </Flex>
      <Flex flexDirection="column" alignItems="center" gap="$spacing16">
        <Flex gap="$gap16" backgroundColor="$surface3" borderRadius="$rounded12" p="$spacing12">
          <HelpCircle stroke={colors.neutral1.val} size={20} />
        </Flex>
        <Flex centered rowGap="$spacing2">
          <Text variant="subheading1">{t('common.areYouSure')}</Text>
          <Text variant="body2" color="$neutral2" px="$spacing8" textAlign="center">
            {t('position.resetDescription')}
          </Text>
        </Flex>
        <Flex row gap="$spacing8" width="100%" mt="$spacing8">
          <Button size="small" emphasis="secondary" onPress={onClose}>
            {t('common.button.cancel')}
          </Button>
          <Button size="small" onPress={handleReset}>
            {t('common.button.reset')}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  )
}
