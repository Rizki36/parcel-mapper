import AlertDialog from "@/_components/AlertDialog";
import { useToast } from "@chakra-ui/react";
import { useDeleteCourierStore } from "../_providers/DeleteCourierProvider";
import useDeleteCourierMutation from "@/_hooks/mutations/useDeleteCourierMutation";

const DeleteCourierAlertDialog = () => {
  const toast = useToast();
  const { open, id, resetState } = useDeleteCourierStore((state) => state);
  const { mutateAsync, status } = useDeleteCourierMutation();

  const handleConfirm = async () => {
    if (!id) return;

    try {
      await mutateAsync({ id });
      resetState();
      toast({
        title: "Berhasil menghapus kurir",
        description: "Kurir berhasil dihapus",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Gagal menghapus kurir",
        description: "Terjadi kesalahan saat menghapus kurir",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <AlertDialog
      isOpen={open}
      onClose={() => resetState()}
      title="Hapus kurir"
      description="Apakah anda yakin menghapus kurir ini ?"
      onConfirm={() => handleConfirm()}
      confirmButtonProps={{
        isLoading: status === "pending",
      }}
    />
  );
};

export default DeleteCourierAlertDialog;
