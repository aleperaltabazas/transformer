import { Box, List, ListItem, ListItemText } from '@mui/material';
import { SelectFilesAction } from '../../../model/transformer';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface Props {
  action: SelectFilesAction;
  idx: number;
}

function renderRow(props: ListChildComponentProps<string[]>) {
  const { index, style, data } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemText primary={data[index]} />
    </ListItem>
  );
}

const SelectFiles = (props: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={200}
        width={360}
        itemSize={46}
        itemCount={props.action.files.length}
        overscanCount={5}
        itemData={props.action.files}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};

export default SelectFiles;
